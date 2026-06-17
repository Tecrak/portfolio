"use client";

import { useState } from "react";
import styles from "./styles/page.module.css";
import ShopAllGames from "./components/shopAllGames";
import { games, genres } from "./config/games";
import ShopBestBlock from "./components/shopBestBlock";
import ShopTopPart from "./components/shopTopPart";
import ShopSideBar from "./components/shopSideBar";

export default function dotNetPage() {
  const [upToPrice, setUpToPrice] = useState("100");

  const shareVars = {
    games,
    genres,
    styles,
    upToPrice,
    setUpToPrice,
  };

  return (
    <div className={styles.shopMainBlock}>
      <ShopSideBar {...shareVars} />
      <div className={styles.shopContent}>
        <ShopTopPart {...shareVars} />
        <ShopBestBlock {...shareVars} />
        <ShopAllGames {...shareVars} />
      </div>
    </div>
  );
}
