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
  const shareVars: ShareVars = {
    games,
    genres,
    styles,
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
