import { ShareVars } from "../config/games";
import styles from "./styles/shopSideBar.module.css";

export default function ShopSideBar({
  genres,
  setUpToPrice,
  upToPrice,
}: ShareVars) {
  return (
    <div className={styles.shopSideBar}>
      <h3>Genre</h3>
      <ul className={styles.shopGenres}>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <h3>Price</h3>
      <input
        type="range"
        min={0}
        max={100}
        step={10}
        defaultValue={100}
        onChange={(e) => setUpToPrice(e.target.value)}></input>
      <p>Up to {upToPrice}$</p>
    </div>
  );
}
