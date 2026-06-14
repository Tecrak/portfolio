import styles from "./styles/openedCard.module.css";
import { ShareCompsVars } from "./types";

export default function NewComment({
  session,
  newCommentText,
  setNewCommentText,
  handleAddComment,
}: ShareCompsVars) {
  return (
    <>
      {session?.user?.image ? (
        <div className={styles.newComment}>
          <div className={styles.commentAuthor}>
            <img
              src={
                session?.user?.image !== null ? session?.user?.image : ""
              }></img>
            <p>{session?.user?.name}</p>
          </div>

          <textarea
            maxLength={50}
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
          />
          <button onClick={handleAddComment} disabled={!newCommentText.trim()}>
            Send
          </button>
        </div>
      ) : (
        <div className={styles.newComment}>
          <p>Please login to leave comment</p>
        </div>
      )}
    </>
  );
}
