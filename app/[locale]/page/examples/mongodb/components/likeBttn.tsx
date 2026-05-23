import styles from "./styles/imgCard.module.css";
import { Heart, MessageCircle } from "lucide-react";
export default function LikeBttn({ lCount }: { lCount: number }) {
  return (
    <div className={styles.likeBox}>
      <button className={`${styles.likeBttn}`}>
        <Heart fill="red" stroke="transperent" />
      </button>
      <span className={styles.commsCount}>{lCount}</span>
    </div>
  );
}
