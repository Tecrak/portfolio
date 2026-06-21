import Link from "next/link";
import { Game, ShareVars } from "../config/games";
import styles from "./styles/shopAllGames.module.css";
import GameItem from "./gameItem";
import { ShopContext } from "../util/ShopContext";
import { useContext } from "react";

export default function ShopAllGame() {
  const context = useContext(ShopContext);
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
        {games.map((game: Game) => {
          const isBestDeal: boolean =
            getSavings(game.gamePrice.price, game.gamePrice.discountPer) ===
            maxSavings;

          return (
            <Link key={game.id} href={`../examples/dotnetshop/${game.id}`}>
              <GameItem game={game} isBestDeal={isBestDeal} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
