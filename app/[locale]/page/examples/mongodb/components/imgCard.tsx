"use client";
import { useEffect, useState } from "react";
import { Person } from "../config/data";
import styles from "./styles/imgCard.module.css";

export default function ImgCard({
  mData,
  setImgOpened,
  imgOpened,
  selectedImg,
}: {
  mData: Person[];
  setImgOpened: (v: number) => void;
  imgOpened: number;
  selectedImg: (imgID: number) => boolean;
}) {
  useEffect(() => {
    imgOpened > 0 && setImgOpened;
    console.log(imgOpened);
  }, [imgOpened]);
  return (
    <ul className={styles.imgList}>
      {mData.map((data) => (
        <li key={data._id}>
          <div className={`${styles.comOpenned} ${styles.imgBox}`}>
            <img src={data.imgSrc} onClick={() => setImgOpened(data._id)}></img>
            {/* <div className="deleteBox"> */}
            <div className={styles.bttnSection}>
              <div className={styles.likeBox}>
                <button className={`${styles.likeBttn} ${styles.notLiked}`}>
                  ❤️ Like
                </button>
                <span className={styles.commsCount}>{data.likeCount}</span>
              </div>
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
