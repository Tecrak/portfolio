import { useContext } from "react";
import { Game, ShareVars } from "../config/games";
import { ShopContext } from "../util/ShopContext";
import RenderPrice from "./renderPrice";
import styles from "./styles/shopBestBlock.module.css";

export default function ShopBestBlock() {
  const context = useContext(ShopContext);
  if (!context) return null;
  const { games } = context;

  return (
    <div className={styles.shopBestBlock}>
      {games.map((game: Game) => (
        <div key={game.id} className={styles.shopBestDeal}>
          <div className={styles.bestImg}>
            <img src={game.imgSrc}></img>
          </div>
          <div className={styles.bestDesc}>
            <span>Deal of the day</span>
            <h3>{game.gameName}</h3>
            <p>{game.description}</p>
            <div className={styles.bestPrices}>
              <div className={styles.bestPricesText}>
                <p className={styles.discountText}>
                  -{game.gamePrice.discountPer * 100}%
                </p>
                <p
                  style={{
                    textDecoration: "line-through",
                    color: "grey",
                  }}>
                  {game.gamePrice.price}
                </p>
                <p className={styles.newBestPrice}>
                  <RenderPrice
                    price={game.gamePrice.price}
                    discount={game.gamePrice.discountPer}
                  />
                </p>
              </div>
              <button className={styles.addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
