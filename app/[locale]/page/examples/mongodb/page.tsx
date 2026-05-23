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
    if (people.length > 0) {
      const initial: Record<string, number> = {};
      people.forEach((p: Person) => {
        initial[p._id] = p.likeCount;
      });
      setLikes(initial);
    }
  }, [people]);
  function handleLike(id: string, increment: number) {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + increment }));
  }
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
      />
      <OpenedCard
        mData={people}
        setImgOpened={setImgOpened}
        imgOpened={imgOpened}
        likes={likes}
        onLike={handleLike}
      />
    </div>
  );
}
