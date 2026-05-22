"use client";

import "./styles/page.css";
import { mData } from "./config/data";
import { useEffect, useState } from "react";
import { useMongopeople, MongoPerson } from "./api/useMPeople";
import ImgCard from "./components/imgCard";
import OpenedCard from "./components/openedCard";

export default function MongoDBPage() {
  // const { data: people = [], isLoading, isError } = useMongopeople();

  // if (isLoading) return <div className="pg-loading">завантаження...</div>;
  // if (isError) return <div className="pg-loading">помилка підключення</div>;

  const [imgOpened, setImgOpened] = useState(0);
  function selectedImg(imgID: number) {
    const valid = imgID === imgOpened;
    return valid;
  }
  useEffect(() => {
    if (imgOpened > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [imgOpened]);
  return (
    <div className="mainMPage">
      <button className="newPhotoBttn">Add new</button>
      <ImgCard
        mData={mData}
        setImgOpened={setImgOpened}
        imgOpened={imgOpened}
        selectedImg={selectedImg}
      />
      <OpenedCard
        mData={mData}
        setImgOpened={setImgOpened}
        imgOpened={imgOpened}
        selectedImg={selectedImg}
      />
    </div>
  );
}
