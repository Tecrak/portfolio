import { ShareVars } from "../config/games";
import styles from "./styles/shopAllGames.module.css";

export default function ShopAllGame({ games, renderPrice }: ShareVars) {
  return (
    <div className={styles.shopAllGames}>
      <ul>
        {games
          .filter((game) => game.isBestOfDay != true)
          .map((game) => (
            <li key={game.id} className={styles.gameItem}>
              <img src={game.imgSrc}></img>
              <div className={styles.gameInfo}>
                <h4>{game.gameName}</h4>
                <ul className={styles.gameGenres}>
                  {game.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>

                <div className={styles.payMents}>
                  <p>
                    {renderPrice(
                      game.gamePrice.price,
                      game.gamePrice.discountPer,
                    )}

                    {game.gamePrice.discountPer > 0 ? (
                      <span>-${game.gamePrice.discountPer * 100}%</span>
                    ) : null}
                  </p>
                  <button>+</button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
