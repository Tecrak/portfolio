"use client";
import { useContext } from "react";
import GameItem from "../components/gameItem";
import { ShopContext } from "../util/ShopContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Game } from "../config/games";

export default function GameContent({ gameId }: { gameId: any }) {
  const context = useContext(ShopContext);
  // if (!context) return null;
  // const { games } = context;

  function useSelectedGame(gameID: number | null) {
    return useQuery({
      queryKey: ["games"],
      queryFn: async () => {
        const res = await axios.get("/page/examples/dotnetshop/api");
        return res.data;
      },
      select: (data) =>
        gameID ? data.filter((game: Game) => game._id === gameID) : data,
    });
  }

  const { data: games = [] } = useSelectedGame(gameId);

  return (
    // Треба щоби на рівні БД фільтрувало, а зара на костилях буде
    <>
      {games
        .filter((game: Game) => game._id == gameId)
        .map((game: Game) => (
          <div key={game._id}>
            <GameItem game={game} />
          </div>
        ))}
    </>
  );
}
