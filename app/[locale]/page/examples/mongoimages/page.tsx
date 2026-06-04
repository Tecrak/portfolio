"use client";

import styles from "./styles/page.module.css";
import { useEffect, useState } from "react";
import { useMongopeople, MongoPerson } from "./api/useMPeople";
import { Post } from "./config/data";
import ImgCard from "./components/imgCard";
import OpenedCard from "./components/openedCard";
import NewImg from "./components/newImg";
import { useSession } from "next-auth/react";

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

    await fetch("/page/examples/mongodb/api", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, userEmail, action }),
    });
  }

  useEffect(() => {
    if (!isLoading && people.length > 0) {
      const initialLikes: Record<string, number> = {};
      const initialLiked: Record<string, boolean> = {};
      const userEmail = session?.user?.email ?? "";

      people.forEach((p: Post) => {
        initialLikes[p._id] = p.likes?.length ?? 0;
        initialLiked[p._id] = p.likes?.includes(userEmail) ?? false;
      });
      setLikes(initialLikes);
      setLikedIds(initialLiked);
    }
  }, [isLoading, session]);
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
  useEffect(() => {
    console.log(isNewImg);
  }, [isNewImg]);
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

      <ImgCard
        mData={people}
        setImgOpened={setImgOpened}
        imgOpened={imgOpened}
        likes={likes}
        onLike={handleLike}
        likedIds={likedIds}
      />
      <OpenedCard
        mData={people}
        setImgOpened={setImgOpened}
        imgOpened={imgOpened}
        likes={likes}
        onLike={handleLike}
        likedIds={likedIds}
      />
    </div>
  );
}
