"use client";

import { useState } from "react";
import styles from "./styles/page.module.css";

export default function dotNetPage() {
  const [upToPrice, setUpToPrice] = useState("100");

  const genres = ["All Games", "Action", "RPG", "Strat", "MOBA"];
  const games = [
    {
      id: 1,
      gameName: "Shadow",
      gamePrice: {
        price: 20.99,
        discountPer: 0.25,
      },
      genre: "Action",
      imgSrc:
        "https://imgs.search.brave.com/gxS2bibOZzDvKigxNrFkMByIDJCsLhBDZY99aDGRr5M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FjL2Rj/LzIwL2FjZGMyMDIy/N2ExNjIxN2NmZTA2/OWNiODcwNzIxODE1/LmpwZw",
      description: "Cool game",
      isCommingSoon: false,
      isDiscount: false,
      isBestOfDay: false,
      isPopular: true,
    },
    {
      id: 2,
      gameName: "DOTA 2",
      gamePrice: {
        price: 0,
        discountPer: 0,
      },
      genre: "MOBA",
      imgSrc:
        "https://imgs.search.brave.com/5KBMrcOTlh4yLfQo5eW4qgyG6RB4xYv-MdNuoEdnvIg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYxL2E0/LzhmLzYxYTQ4ZjUx/ZWU0YWI5NjlkZTcx/YzAzYjgyM2EzMjg4/LmpwZw",
      description: "Awesome game",
      isCommingSoon: false,
      isDiscount: false,
      isBestOfDay: false,
      isPopular: true,
    },
    {
      id: 3,
      gameName: "Deadlock",
      gamePrice: {
        price: 20,
        discountPer: 0,
      },
      genre: "MOBA",
      imgSrc:
        "https://imgs.search.brave.com/eRPtjSiR2OEiD82b57VXOaZ3v2CwxEKb-6cTD8MaT04/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvZGVh/ZGxvY2stZ2FtZXBs/YXktdXBkYXRlLTA1/LTIyLTIwMjYtdjAt/UUVpQWFsTElfT2lz/WGJaUHJUaFZqMmpa/ajZmRVpYeUx0NUs2/alNSSXlway5wbmc_/d2lkdGg9NjQwJmNy/b3A9c21hcnQmYXV0/bz13ZWJwJnM9NzBh/NGEyYjgxNGEzNjcx/MWE2NDY1ZDVmZmM4/YjRiYWM5ODJiNWE4/Yw",
      description: "Amazing game",
      isCommingSoon: true,
      isDiscount: false,
      isBestOfDay: false,
      isPopular: false,
    },
    {
      id: 4,
      gameName: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
      gamePrice: {
        price: 49.99,
        discountPer: 0.4,
      },
      genre: "RPG",
      imgSrc:
        "https://imgs.search.brave.com/Y4pD06dOrzZpQ2j_q8SzSrHWpTw3mZJjNZMpvjtYLRs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnF1/YWxiZXJ0LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/MS9TdGFsa2VyLTIt/dGl0bGUuanBnP3Jl/c2l6ZT0xMTcwLDcy/MCZzc2w9MQ",
      description:
        "Відкрийте для себе Чорнобильську Зону Відчуження сповнену небезпечних ворогів, смертельних аномалій та потужних артефактів. Напишіть свою власну епічну історію, прокладаючи свій шлях до Серця Чорнобиля",
      isCommingSoon: false,
      isBestOfDay: true,
      isPopular: false,
    },
    {
      id: 5,
      gameName: "Kikikaka",
      gamePrice: {
        price: 10.99,
        discountPer: 0.0,
      },
      genre: "RPG",
      imgSrc:
        "https://imgs.search.brave.com/OF4Ny4Uw6va6GuwVUJPczIbiiZve9e4GgsZzsXCQ4zM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBhL0x1eG9yVGVt/cGxlMy5qcGc",
      description: "Beatiful game",
      isCommingSoon: false,
      isBestOfDay: false,
      isPopular: false,
    },
  ];

  const renderPrice = (price: number, discount: number) => {
    // 1. Якщо початкова ціна вже 0, то гра безкоштовна
    if (price === 0) return "Free";

    // 2. Якщо є знижка (discount > 0)
    if (discount > 0) {
      const finalPrice = price * (1 - discount);

      // Якщо після знижки ціна стала 0 або пішла в мінус — буде Free
      if (finalPrice <= 0) return "Free";

      // Інакше повертаємо обчислену ціну з двома знаками після коми
      return `${finalPrice.toFixed(2)}`;
    }
    // 3. Якщо знижки немає (discount === 0), просто повертаємо базову ціну
    return `${price.toFixed(2)}$`;
  };

  return (
    <div className={styles.shopMainBlock}>
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
      <div className={styles.shopContent}>
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
        <div className={styles.shopBestBlock}>
          {games
            .filter((game) => game.isBestOfDay === true)
            .map((game) => (
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
                      <p className={styles.bestPercent}>
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
                        {renderPrice(
                          game.gamePrice.price,
                          game.gamePrice.discountPer,
                        )}
                      </p>
                    </div>

                    <button className={styles.addToCart}>Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.shopAllGames}>
          <ul>
            {games
              .filter((game) => game.isBestOfDay != true)
              .map((game) => (
                <li key={game.id}>
                  <img src={game.imgSrc}></img>
                  <div className={styles.gameInfo}>
                    <h4>{game.gameName}</h4>
                    <p>{game.genre}</p>
                    <div className={styles.payMents}>
                      <p>
                        {renderPrice(
                          game.gamePrice.price,
                          game.gamePrice.discountPer,
                        )}
                      </p>
                      <button>+</button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
