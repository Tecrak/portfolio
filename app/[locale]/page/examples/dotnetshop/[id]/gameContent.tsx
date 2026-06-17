import GameItem from "../components/gameItem";
import { games } from "../config/games";

export default function GameContent({ gameId }: { gameId: number }) {
  return (
    // Треба щоби на рівні БД фільтрувало, а зара на костилях буде
    <>
      {games
        .filter((game) => game.id == gameId)
        .map((game) => (
          <div>
            <GameItem game={game} />
          </div>
        ))}
    </>
  );
}
