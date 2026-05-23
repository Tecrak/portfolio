import { useEffect, useState } from "react";
import { Person } from "../config/data";
import { createPortal } from "react-dom";
import styles from "./styles/openedCard.module.css";
import LikeBttn from "./likeBttn";

export default function OpenedText({
  mData,
  setImgOpened,
  imgOpened,
  likes,
  onLike,
}: {
  mData: Person[];
  imgOpened: string;
  setImgOpened: (v: string) => void;
  likes: Record<string, number>;
  onLike: (id: string, increment: number) => void;
}) {
  const current = mData.find((item) => item._id === imgOpened);

  if (!current) return null;
  return createPortal(
    <div className={styles.openedCard} onClick={() => setImgOpened("")}>
      <ul className={styles.cardContent} onClick={(e) => e.stopPropagation()}>
        <li className={styles.cardItem} key={current._id}>
          <div className={styles.cardImg}>
            <img src={current.imgSrc}></img>
          </div>
          <div className={styles.commentSection}>
            <div className={styles.bttnsSection}>
              <LikeBttn
                lCount={likes[current._id] ?? current.likeCount}
                id={current._id}
                onLike={onLike}
              />
              <span>{current.date}</span>
            </div>
            <div className={styles.commentsBlock}>
              <ul>
                {current.comments.map((comment, index) => (
                  <li className={styles.commentContent} key={index}>
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
    </div>,
    document.body,
  );
}
