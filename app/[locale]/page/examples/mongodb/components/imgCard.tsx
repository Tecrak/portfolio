"use client";
import { useEffect, useState } from "react";
import { Person } from "../config/data";
import styles from "./styles/imgCard.module.css";
import LikeBttn from "./likeBttn";

export default function ImgCard({
  mData,
  setImgOpened,
  imgOpened,
  likes,
  onLike,
  likedIds,
}: {
  mData: Person[];
  imgOpened: string;
  setImgOpened: (v: string) => void;
  likes: Record<string, number>;
  onLike: (id: string, increment: number) => void;
  likedIds: Record<string, boolean>;
}) {
  useEffect(() => {
    imgOpened === "" && setImgOpened;
  }, [imgOpened]);
  return (
    <ul className={styles.imgList}>
      {mData.map((data) => (
        <li key={data._id}>
          <div className={`${styles.comOpenned} ${styles.imgBox}`}>
            <img src={data.imgSrc} onClick={() => setImgOpened(data._id)}></img>
            {/* <div className="deleteBox"> */}
            <div className={styles.bttnSection}>
              <LikeBttn
                lCount={likes[data._id] ?? data.likeCount}
                id={data._id}
                onLike={onLike}
                isLiked={likedIds[data._id] ?? false}
              />
              <div
                className={styles.commentsBttn}
                onClick={() => setImgOpened(data._id)}>
                <span>💬</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
