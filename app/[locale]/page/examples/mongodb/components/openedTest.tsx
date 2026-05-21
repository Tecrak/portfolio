import { useEffect, useState } from "react";
import { Person } from "../config/data";
import styles from "./styles/openedCard.module.css";

export default function OpenedText({
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
  const current = mData.find((item) => item._id === imgOpened);

  if (!current) return null;
  return (
    <div className={styles.openedCard} onClick={() => setImgOpened(0)}>
      <ul className={styles.cardContent}>
        <li className={styles.cardItem} key={current._id}>
          <div className={styles.cardImg}>
            <img src={current.imgSrc}></img>
          </div>
          <div className={styles.commentSection}>
            <div className={styles.bttnsSection}>
              <div className={styles.likeBttn}>
                <button>Like</button>
                <span>{current.likeCount}</span>
              </div>
              <span>{current.date}</span>
            </div>
            <div className={styles.commentsBlock}>
              <ul>
                {current.comments.map((comment) => (
                  <li className={styles.commentContent} key={comment.aId}>
                    <div className={styles.commentLeftPart}>
                      <img src={comment.aImg}></img>
                    </div>
                    <div className={styles.commentContent}>
                      <p>{comment.commentText}</p>
                      <div className={styles.lazyIMLike}>
                        <span>♡</span>
                        <span>{comment.commentLikes}</span>{" "}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
