"use client";

import { createContext, useState } from "react";
import styles from "./styles/page.module.css";
import ShopAllGames from "./components/shopAllGames";
import { genres, ShareVars } from "./config/games";
import ShopBestBlock from "./components/shopBestBlock";
import ShopTopPart from "./components/shopTopPart";
import ShopSideBar from "./components/shopSideBar";
import { ShopContext } from "./util/ShopContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function useGames() {
  return useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const res = await axios.get("/page/examples/dotnetshop/api");
      return res.data;
    },
  });
}

export default function dotNetPage() {
  const { data: games = [], isLoading, isError } = useGames();
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
