import { getBestDealGame } from "../util/getBestDeal";
import RenderPrice from "./renderPrice";
import styles from "./styles/shopBestBlock.module.css";
import Link from "next/link";
import { useAllGames } from "../hook/useAllGames";

export default function ShopBestBlock() {
  const { data: games = [] } = useAllGames();
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
