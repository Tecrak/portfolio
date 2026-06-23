"use client";

import { useEffect, useState } from "react";
import styles from "./styles/page.module.css";
import ShopAllGames from "./components/shopAllGames";
import { Game, Genre, genres, ShareVars } from "./config/games";
import ShopBestBlock from "./components/shopBestBlock";
import ShopTopPart from "./components/shopTopPart";
import ShopSideBar from "./components/shopSideBar";
import { ShopContext } from "./util/ShopContext";
import { useGames } from "./hook/useGames";

export default function dotNetPage() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
  const { data: games = [], isLoading, isError } = useGames();
  const shareVars: ShareVars = {
    games,
    genres,
    styles,
  };

  const handleGenreChange = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  return (
    <ShopContext.Provider value={shareVars}>
      <div className={styles.shopMainBlock}>
        <ShopSideBar onGenreChange={handleGenreChange} />
        <div className={styles.shopContent}>
          <ShopTopPart />
          <ShopBestBlock />
          <ShopAllGames selectedGenre={selectedGenre} />
        </div>
      </div>
    </ShopContext.Provider>
  );
}
