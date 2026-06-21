"use client";

import styles from "./styles/page.module.css";
import { useEffect, useState } from "react";
import { useMongopeople } from "./hooks/useMPeople";
import ImgCard from "./components/imgCard";
import OpenedCard from "./components/openedCard";
import NewImg from "./components/newImg";
import { useSession } from "next-auth/react";
import { useEffectInitLikes } from "./hooks/useEffectInitLikes";
import { useEffectScrollLock } from "./hooks/useEffectScrollLock";
import { ShareVarsType } from "./types";

export default function MongoDBPage({
  isAccountPage,
  owner,
}: {
  isAccountPage: boolean;
  owner: string;
}) {
  const { data: session } = useSession();
  const {
    data: people = [],
    isLoading,
    isError,
  } = useMongopeople(isAccountPage ? owner : "");
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [imgOpened, setImgOpened] = useState("");
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  const [isNewImg, setIsNewImg] = useState(false);

  async function handleLike(id: string, increment: number) {
    if (!session?.user?.email) return; // не авторизований

    const userEmail = session.user.email;
    const isCurrentlyLiked = likedIds[id];
    const action = isCurrentlyLiked ? "unlike" : "like";

    setLikedIds((prev) => ({ ...prev, [id]: !isCurrentlyLiked }));
    setLikes((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + increment }));

    await fetch("/page/examples/mongoimages/api", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, userEmail, action }),
    });
  }
  const shareVars: ShareVarsType = {
    setImgOpened,
    imgOpened,
    likes,
    handleLike,
    likedIds,
  };

  //useEffects!!!
  useEffectScrollLock(imgOpened !== "");
  useEffectInitLikes(isLoading, people, session, setLikes, setLikedIds);
  useEffect(() => {
    if (imgOpened !== "") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [imgOpened]);

  if (isLoading) return <div className="pg-loading">завантаження...</div>;
  if (isError) return <div className="pg-loading">помилка підключення</div>;

  return (
    <div className="mainMPage">
      {!isAccountPage && (
        <button
          className={styles.newImgBttn}
          onClick={() => setIsNewImg(!isNewImg)}
          style={
            !session?.user?.email
              ? { pointerEvents: "none" }
              : { pointerEvents: "all" }
          }
          disabled={!session?.user?.email}>
          {!session?.user?.email ? "Please log in to leave image" : "Add new"}
        </button>
      )}

      <NewImg isNewImg={isNewImg} setIsNewImg={setIsNewImg} />

      <ImgCard mData={people} {...shareVars} />
      <OpenedCard mData={people} {...shareVars} />
    </div>
  );
}
