"use client";

import "./styles/page.css";
import { useEffect, useState } from "react";
import { useMongopeople, MongoPerson } from "./api/useMPeople";
import ImgCard from "./components/imgCard";
import OpenedCard from "./components/openedCard";

export default function MongoDBPage() {
  const { data: people = [], isLoading, isError } = useMongopeople();

  const [imgOpened, setImgOpened] = useState("");

  function selectedImg(imgID: string) {
    return imgID === imgOpened;
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
      />
      <OpenedCard
        mData={people}
        setImgOpened={setImgOpened}
        imgOpened={imgOpened}
      />
    </div>
  );
}
