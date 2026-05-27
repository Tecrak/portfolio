"use client";
import { createPortal } from "react-dom";
import styles from "./styles/newImg.module.css";
import { useState } from "react";
export default function NewImg() {
  const defaultImg =
    "https://imgs.search.brave.com/pPrdorGUOBNDvCkeh4bLvSMZyoZkjr0gO3Ai8ggA81o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MTYxMjM0L3Bob3Rv/L2VtcHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1jX1JO/R29RUWhZUlpwUUI5/YUZtRjMxamVxZ2w0/LVlkTFNzd0RLWXBi/UHRvPQ";
  const [imgUrl, setImgUrl] = useState(defaultImg);
  return createPortal(
    <div className={styles.newImgBox}>
      <form className={styles.newImgForm}>
        <div className={styles.imgBox}>
          <img src={imgUrl === "" ? defaultImg : imgUrl}></img>
        </div>
        <div className={styles.kostyl}>
          <p>Please provide some information to add photo :)</p>
          <div>
            <label htmlFor="imgSrc"> IMAGE URL</label>
            <input
              type="text"
              name="imgSrc"
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="authComment">AUTHOR COMMENT</label>
            <input
              type="text"
              name="authComment"
              className={styles.authCommInput}
            />
          </div>
          <button type="submit">Add img</button>
        </div>
      </form>
    </div>,
    document.body,
  );
}
