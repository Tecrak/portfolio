"use client";
import { useContext, useState } from "react";
import { Genre } from "../config/games";
import { ShopContext } from "../util/ShopContext";
import styles from "./styles/shopSideBar.module.css";

export default function ShopSideBar({
  onGenreChange,
  onPriceChange,
  upToPrice,
  selectedGenre,
}: {
  onGenreChange: (genre: Genre) => void;
  onPriceChange: (price: number) => void;
  upToPrice: number;
  selectedGenre: string | undefined;
}) {
  const context = useContext(ShopContext);
  if (!context) return null;
  const { genres } = context;

  return (
    <div className={styles.shopSideBar}>
      <h3>Genre</h3>
      <ul className={styles.shopGenres}>
        {genres.map((genre: Genre) => (
          <li
            className={selectedGenre === genre ? styles.selectedG : ""}
            onClick={() => onGenreChange(genre)}
            key={genre}>
            {genre}
          </li>
        ))}
      </ul>
      <h3>Price</h3>
      <input
        type="range"
        min={0}
        max={100}
        step={10}
        defaultValue={100}
        onChange={(e) => onPriceChange(+e.target.value)}></input>
      <p>{upToPrice !== 0 ? `Up to ${upToPrice}$` : "Free"}</p>
    </div>
  );
}
