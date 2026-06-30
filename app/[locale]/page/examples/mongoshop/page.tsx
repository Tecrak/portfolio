"use client";

import { useEffect, useState } from "react";
import styles from "./styles/page.module.css";
import ShopAllGames from "./components/shopAllGames";
import { Game, Genre, genres, ShareVars } from "./config/games";
import ShopBestBlock from "./components/shopBestBlock";
import ShopTopPart from "./components/shopTopPart";
import ShopSideBar from "./components/shopSideBar";
import { ShopContext } from "./util/ShopContext";
import { useGenredGames } from "./hook/useGenredGames";

export default function MongoShop() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
  const [upToPrice, setUpToPrice] = useState<number>(100);
  const {
    data: games = [],
    isLoading,
    isError,
  } = useGenredGames(selectedGenre);
  const shareVars: ShareVars = {
    games,
    genres,
    styles,
  };

  const handleGenreChange = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const handlePriceChange = (price: number) => {
    setUpToPrice(price);
  };

  return (
    <ShopContext.Provider value={shareVars}>
      <div className={styles.shopMainBlock}>
        <ShopSideBar
          onGenreChange={handleGenreChange}
          onPriceChange={handlePriceChange}
          upToPrice={upToPrice}
          selectedGenre={selectedGenre}
        />
        <div className={styles.shopContent}>
          <ShopTopPart />
          <ShopBestBlock />
          <ShopAllGames upToPrice={upToPrice} />
        </div>
      </div>
    </ShopContext.Provider>
  );
}
