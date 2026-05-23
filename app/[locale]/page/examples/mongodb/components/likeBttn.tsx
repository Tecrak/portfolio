"use client";
import { useState, useEffect } from "react";
import styles from "./styles/imgCard.module.css";
import { Heart } from "lucide-react";

export default function LikeBttn({
  lCount,
  id,
  isLiked,
  onLike,
}: {
  lCount: number;
  id: string;
  isLiked: boolean;
  onLike: (id: string, increment: number) => void;
}) {
  function handleLike() {
    onLike(id, isLiked ? -1 : 1);
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
