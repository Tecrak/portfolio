"use client";
import { useContext } from "react";
import GameItem from "../components/gameItem";
import { ShopContext } from "../util/ShopContext";

export default function GameContent({ gameId }: { gameId: any }) {
  const context = useContext(ShopContext);
  if (!context) return null;
  const { games } = context;

  return (
    // Треба щоби на рівні БД фільтрувало, а зара на костилях буде
    <>
      {games
        .filter((game) => game._id == gameId)
        .map((game) => (
          <div key={game._id}>
            <GameItem game={game} />
          </div>
        ))}
    </>
  );
}
