import { ShareVars } from "../config/games";
import styles from "./styles/shopTopPart.module.css";

export default function ShopTopPart({ games }: ShareVars) {
  return (
    <div className={styles.shopTopPart}>
      <div>
        <h3>Browse games ({games.length})</h3>
      </div>
      <div className={styles.shopTopFunct}>
        <select defaultValue={"Filter"}>
          <option>Most popular</option>
          <option>Price:High to Low</option>
          <option>Price:Low to High</option>
          <option>Discounts</option>
          <option>Comming soon</option>
        </select>
        <div className={styles.shopCart}>Cart</div>
      </div>
    </div>
  );
}
