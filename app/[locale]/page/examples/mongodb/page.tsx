"use client";

import "./styles/page.css";
import { useEffect, useState } from "react";
import { useMongopeople, MongoPerson } from "./api/useMPeople";
import { Person } from "./config/data";
import ImgCard from "./components/imgCard";
import OpenedCard from "./components/openedCard";

export default function MongoDBPage() {
  const { data: people = [], isLoading, isError } = useMongopeople();
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [imgOpened, setImgOpened] = useState("");
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});

  // ініціалізуй з localStorage при монтуванні
  useEffect(() => {
    if (!isLoading && people.length > 0) {
      const initialLikes: Record<string, number> = {};
      const initialLiked: Record<string, boolean> = {};
      people.forEach((p: Person) => {
        initialLikes[p._id] = p.likeCount;
        initialLiked[p._id] = localStorage.getItem(`liked_${p._id}`) === "true";
      });
      setLikes(initialLikes);
      setLikedIds(initialLiked);
    }
  }, [isLoading]);

  function handleLike(id: string, increment: number) {
    const newVal = !likedIds[id];
    setLikedIds((prev) => ({ ...prev, [id]: newVal }));
    setLikes((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + increment }));
    localStorage.setItem(`liked_${id}`, String(newVal));
  }

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
      <button className="newPhotoBttn">Add new</button>
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
