import styles from "./styles/imgCard.module.css";
import { Heart, MessageCircle } from "lucide-react";
export default function LikeBttn() {
  return (
    <button className={`${styles.likeBttn} ${styles.notLiked}`}>
      <Heart fill="red" stroke="transperent" />
    </button>
  );
}
