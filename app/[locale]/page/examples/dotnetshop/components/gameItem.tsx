import Link from "next/link";
import { Genre, GameItemProps } from "../config/games";
import RenderPrice from "./renderPrice";
import styles from "./styles/shopAllGames.module.css";
export default function GameItem({ game }: GameItemProps) {
  return (
    <li title={game.description} key={game._id} className={styles.gameItem}>
      <img src={game.imgSrc}></img>
      <div className={styles.gameInfo}>
        <Link href={`../examples/dotnetshop/${game._id}`}>
          <h4>{game.gameName}</h4>
          <ul className={styles.gameGenres}>
            {game.genres.map((genre: Genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </Link>
        <div className={styles.payMents}>
          <p>
            <RenderPrice
              price={game.gamePrice.price}
              discount={game.gamePrice.discountPer}
            />

            {game.gamePrice.discountPer > 0 ? (
              <span>-${game.gamePrice.discountPer * 100}%</span>
            ) : null}
          </p>
          {!game.isCommingSoon ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault;
                console.log("Added to cart game:" + game.gameName);
              }}>
              +
            </button>
          ) : (
            <p>Coming soon</p>
          )}
        </div>
      </div>
    </li>
  );
}
