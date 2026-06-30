import { Game, Genre } from "../config/games";
import styles from "./styles/shopAllGames.module.css";
import GameItem from "./gameItem";
import { ShopContext } from "../util/ShopContext";
import { useContext } from "react";

export default function ShopAllGame({ upToPrice }: { upToPrice: number }) {
  const context = useContext(ShopContext);
  if (!context) return null;
  const { games } = context;

  function getActualPrice(game: Game) {
    return game.gamePrice.price * (1 - game.gamePrice.discountPer);
  }

  return (
    <div className={styles.shopAllGames}>
      <ul>
        {games
          .filter((game) => {
            const matchesPrice =
              upToPrice === undefined || getActualPrice(game) <= upToPrice;
            return matchesPrice;
          })
          .map((game: Game) => {
            return (
              <div key={game._id}>
                <GameItem game={game} />
              </div>
            );
          })}
      </ul>
    </div>
  );
}
