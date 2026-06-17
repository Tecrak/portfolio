import Link from "next/link";
import { ShareVars } from "../config/games";
import styles from "./styles/shopAllGames.module.css";
import GameItem from "./gameItem";

export default function ShopAllGame({ games }: ShareVars) {
  return (
    <div className={styles.shopAllGames}>
      <ul>
        {games
          .filter((game) => game.isBestOfDay != true)
          .map((game) => (
            <Link key={game.id} href={`../examples/dotnetshop/${game.id}`}>
              <GameItem game={game} />
            </Link>
          ))}
      </ul>
    </div>
  );
}
