"use client";

import { createContext, useState } from "react";
import styles from "./styles/page.module.css";
import ShopAllGames from "./components/shopAllGames";
import { games, genres, ShareVars } from "./config/games";
import ShopBestBlock from "./components/shopBestBlock";
import ShopTopPart from "./components/shopTopPart";
import ShopSideBar from "./components/shopSideBar";
import { ShopContext } from "./util/ShopContext";

export default function dotNetPage() {
  const [upToPrice, setUpToPrice] = useState("100");

  const shareVars: ShareVars = {
    games,
    genres,
    styles,
    upToPrice,
    setUpToPrice,
  };
  return (
    <ShopContext.Provider value={shareVars}>
      <div className={styles.shopMainBlock}>
        <ShopSideBar />
        <div className={styles.shopContent}>
          <ShopTopPart />
          <ShopBestBlock />
          <ShopAllGames />
        </div>
      </div>
    </ShopContext.Provider>
  );
}
