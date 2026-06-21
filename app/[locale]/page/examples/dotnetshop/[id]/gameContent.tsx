"use client";
import GameItem from "../components/gameItem";
import { useSelectedGame } from "../hook/useSelectedGame";
import { Game } from "../config/games";

export default function GameContent({ gameId }: { gameId: any }) {
  const { data: games = [] } = useSelectedGame(gameId);

  return (
    // Треба щоби на рівні БД фільтрувало, а зара на костилях буде
    <>
      {games.map((game: Game) => (
        <div key={game._id}>
          <GameItem game={game} />
        </div>
      ))}
    </>
  );
}
