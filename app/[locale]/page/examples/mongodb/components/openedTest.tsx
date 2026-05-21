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
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className={styles.openedCard}>
      <ul className={styles.cardContent}>
        <li className={styles.cardItem}>
          <div className={styles.cardImg}>
            <img src="https://i.pravatar.cc/150?img=11"></img>
          </div>
          <div className={styles.commentSection}>
            <div className={styles.bttnsSection}>
              <div className={styles.likeBttn}>
                <button>Like</button>
                <span>100</span>
              </div>
              <span>21.21.2222</span>
            </div>
            <div className={styles.commentsBlock}>
              <ul>
                <li className={styles.commentContent}>
                  <div className={styles.commentLeftPart}>
                    <img src="https://i.pravatar.cc/150?img=2"></img>
                  </div>
                  <div className={styles.commentContent}>
                    <p>
                      COMMENT HERE COMMENT HERE COMMENT HERE COMMENT HERE
                      COMMENT HERE COMMENT HERE COMMENT HERE COMMENT HERE
                      COMMENT HERE COMMENT HERE COMMENT HERE COMMENT HERECOMMENT
                      HERECOMMENT HERECOMMENT HERECOMMENT HERECOMMENT
                      HERECOMMENT HERECOMMENT HERECOMMENT HERECOMMENT
                      HERECOMMENT HERECOMMENT HERECOMMENT HERECOMMENT
                      HERECOMMENT HERECOMMENT HERECOMMENT HERECOMMENT
                      HERECOMMENT HERE
                    </p>
                    <span>Likes:10</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
