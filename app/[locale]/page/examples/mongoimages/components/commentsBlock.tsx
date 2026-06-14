import styles from "./styles/openedCard.module.css";
import { ShareCompsVars } from "./types";
import { Comment } from "../config/data";

export default function CommentsBlock({ current }: ShareCompsVars) {
  return (
    <>
      <div className={styles.authComment}>
        <p>{current?.authComment}</p>
      </div>
      <div className={styles.commentsBlock}>
        <ul>
          {current?.comments.map((comment: Comment) => (
            <li className={styles.commentContent} key={comment.commID}>
              <div className={styles.commentLeftPart}>
                <img src={comment.commImg} alt={comment.commName} />
              </div>
              <div className={styles.commentText}>
                <div className={styles.commPerson}>
                  <span className={styles.commName}>{comment.commName}</span>
                  <span className={styles.commDate}>{comment.commDate}</span>
                </div>
                <p>{comment.commText}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
