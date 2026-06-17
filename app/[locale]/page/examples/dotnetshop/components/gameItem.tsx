import { Genre, GameItemProps } from "../config/games";
import RenderPrice from "./renderPrice";
import styles from "./styles/shopAllGames.module.css";
export default function GameItem({ game }: GameItemProps) {
  return (
    <li key={game.id} className={styles.gameItem}>
      <img src={game.imgSrc}></img>
      <div className={styles.gameInfo}>
        <h4>{game.gameName}</h4>
        <ul className={styles.gameGenres}>
          {game.genres.map((genre: Genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>

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
          <button>+</button>
        </div>
      </div>
    </li>
  );
}
