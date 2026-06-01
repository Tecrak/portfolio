import { useEffect, useState } from "react";
import { Post } from "../config/data";
import { Comment } from "../config/data";
import { createPortal } from "react-dom";
import styles from "./styles/openedCard.module.css";
import LikeBttn from "./likeBttn";

export default function OpenedText({
  mData,
  setImgOpened,
  imgOpened,
  likes,
  onLike,
  likedIds,
}: {
  mData: Post[];
  imgOpened: string;
  setImgOpened: (v: string) => void;
  likes: Record<string, number>;
  onLike: (id: string, increment: number) => void;
  likedIds: Record<string, boolean>;
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
                lCount={current.likes.length}
                id={current._id}
                onLike={onLike}
                isLiked={likedIds[current._id] ?? false}
              />
              <span>{current.date}</span>
            </div>
            <div className={styles.authComment}>
              <p>{current.authComment}</p>
            </div>
            <div className={styles.commentsBlock}>
              <ul>
                {current.comments.map((comment: Comment) => (
                  <li className={styles.commentContent} key={comment.commID}>
                    <div className={styles.commentLeftPart}>
                      <img src={comment.commImg} alt={comment.commName} />
                    </div>
                    <div className={styles.commentText}>
                      <span className={styles.commName}>
                        {comment.commName}
                      </span>
                      <p>{comment.commText}</p>
                      <span className={styles.commDate}>
                        {comment.commDate}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.newComment}>sds</div>
          </div>
        </li>
      </ul>
    </div>,
    document.body,
  );
}
