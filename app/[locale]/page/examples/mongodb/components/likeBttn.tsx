"use client";
import { useState, useEffect } from "react";
import styles from "./styles/imgCard.module.css";
import { Heart } from "lucide-react";

// LikeBttn — прибери внутрішній count, прийми ззовні
export default function LikeBttn({
  lCount,
  id,
  onLike,
}: {
  lCount: number;
  id: string;
  onLike: (id: string, increment: number) => void;
}) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(localStorage.getItem(`liked_${id}`) === "true");
  }, [id]);

  async function handleLike() {
    const newVal = !isLiked;
    setIsLiked(newVal);
    localStorage.setItem(`liked_${id}`, String(newVal));
    onLike(id, newVal ? 1 : -1);

    await fetch("/page/examples/mongodb/api", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, increment: newVal ? 1 : -1 }),
    });
  }

  return (
    <div className={styles.likeBox}>
      <button className={styles.likeBttn} onClick={handleLike}>
        <Heart
          fill={isLiked ? "red" : "transparent"}
          stroke={isLiked ? "red" : "grey"}
        />
      </button>
      <span className={styles.commsCount}>{lCount}</span>
    </div>
  );
}
