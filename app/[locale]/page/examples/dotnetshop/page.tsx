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

  const renderPrice = (price: number, discount: number) => {
    // 1. Якщо початкова ціна вже 0, то гра безкоштовна
    if (price === 0) return "Free";

    // 2. Якщо є знижка (discount > 0)
    if (discount > 0) {
      const finalPrice = price * (1 - discount);

      // Якщо після знижки ціна стала 0 або пішла в мінус — буде Free
      if (finalPrice <= 0) return "Free";

      // Інакше повертаємо обчислену ціну з двома знаками після коми
      return `${finalPrice.toFixed(2)}$`;
    }
    // 3. Якщо знижки немає (discount === 0), просто повертаємо базову ціну
    return `${price.toFixed(2)}$`;
  };

  const shareVars = {
    games,
    genres,
    styles,
    renderPrice,
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
