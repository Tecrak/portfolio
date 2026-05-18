"use client";

import "./styles/page.css";
import { mData } from "./config/data";

import { useMongopeople, MongoPerson } from "./api/useMPeople";
import ImgCard from "./components/imgCard";
import { useState } from "react";

export default function MongoDBPage() {
  // const { data: people = [], isLoading, isError } = useMongopeople();

  // if (isLoading) return <div className="pg-loading">завантаження...</div>;
  // if (isError) return <div className="pg-loading">помилка підключення</div>;

  const [imgOpened, setImgOpened] = useState(0);
  function selectedImg(imgID: number) {
    const valid = imgID === imgOpened;
    return valid;
  }

  return (
    <div className="mainMPage">
      <button className="newPhotoBttn">Add new</button>
      <ImgCard
        mData={mData}
        setImgOpened={setImgOpened}
        imgOpened={imgOpened}
        selectedImg={selectedImg}
      />
      {imgOpened > 0 && <li>hisssssssssssssssssssssssssssssss</li>}
    </div>
  );
}
