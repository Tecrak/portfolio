import { Game, Genre } from "../config/games";
import styles from "./styles/shopAllGames.module.css";
import GameItem from "./gameItem";
import { ShopContext } from "../util/ShopContext";
import { useContext } from "react";

export default function ShopAllGame({
  selectedGenre,
}: {
  selectedGenre: Genre | undefined;
}) {
  const context = useContext(ShopContext);
  if (!context) return null;
  const { games } = context;

  const getSavings = (price: number, discount: number) =>
    price * (discount / 100);

  const maxSavings = Math.max(
    ...games.map((game: Game) =>
      getSavings(game.gamePrice.price, game.gamePrice.discountPer),
    ),
  );

  return (
    <div className={styles.shopAllGames}>
      <ul>
        {games
          .filter((game) =>
            !selectedGenre || selectedGenre === "All Games"
              ? true
              : game.genres.includes(selectedGenre),
          )
          .map((game: Game) => {
            const isBestDeal: boolean =
              getSavings(game.gamePrice.price, game.gamePrice.discountPer) ===
              maxSavings;

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
