import { useContext } from "react";
import { ShopContext } from "../util/ShopContext";
import { getBestDealGame } from "../util/getBestDeal";
import RenderPrice from "./renderPrice";
import styles from "./styles/shopBestBlock.module.css";
import Link from "next/link";

export default function ShopBestBlock() {
  const context = useContext(ShopContext);
  if (!context) return null;
  const { games } = context;
  const bestDeal = getBestDealGame(games);
  if (!bestDeal) return null;

  return (
    <div className={styles.shopBestBlock}>
      <div className={styles.shopBestDeal}>
        <Link href={`../examples/dotnetshop/${bestDeal._id}`}>
          <div className={styles.bestImg}>
            <img src={bestDeal.imgSrc}></img>
          </div>
        </Link>
        <div className={styles.bestDesc}>
          <span>Deal of the day</span>
          <h3>{bestDeal.gameName}</h3>
          <p>{bestDeal.description}</p>
          <div className={styles.bestPrices}>
            <div className={styles.bestPricesText}>
              <p className={styles.discountText}>
                -{bestDeal.gamePrice.discountPer * 100}%
              </p>
              <p style={{ textDecoration: "line-through", color: "grey" }}>
                {bestDeal.gamePrice.price}
              </p>
              <p className={styles.newBestPrice}>
                <RenderPrice
                  price={bestDeal.gamePrice.price}
                  discount={bestDeal.gamePrice.discountPer}
                />
              </p>
            </div>
            <button className={styles.addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
