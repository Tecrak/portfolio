"use client";
import { createPortal } from "react-dom";
import styles from "./styles/newImg.module.css";
import { useState } from "react";
export default function NewImg({
  isNewImg,
  setIsNewImg,
}: {
  isNewImg: boolean;
  setIsNewImg: (v: boolean) => void;
}) {
  const onErrorImg =
    "https://imgs.search.brave.com/pPrdorGUOBNDvCkeh4bLvSMZyoZkjr0gO3Ai8ggA81o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MTYxMjM0L3Bob3Rv/L2VtcHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1jX1JO/R29RUWhZUlpwUUI5/YUZtRjMxamVxZ2w0/LVlkTFNzd0RLWXBi/UHRvPQ";
  const defaultImg =
    "https://imgs.search.brave.com/8KtLvdYeeqtPNj25O899tRH1Q7ZnYugYpDkW6a9Ghr8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/ODI3MTg2OS9mci9w/aG90by9ob21tZS0l/QzMlQTJnJUMzJUE5/LWFwcHIlQzMlQTlj/aWFudC1kZS1zZS1k/JUMzJUE5dGVuZHJl/LWRhbnMtbGEtcGlz/Y2luZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bS1jYUxD/TWRicTd5am1QaElH/QTR3b3dDWWJTbXZi/Nmg3blB4UjE3TFhh/Zz0";
  const [imgUrl, setImgUrl] = useState(defaultImg);

  return createPortal(
    <div
      className={styles.newImgBox}
      onClick={() => setIsNewImg(!isNewImg)}
      style={!isNewImg ? { display: "none" } : { display: "flex" }}>
      <form className={styles.newImgForm} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imgBox}>
          <img
            src={imgUrl === "" ? defaultImg : imgUrl}
            onError={(e) => {
              e.currentTarget.src = onErrorImg;
            }}
          />
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
          <button type="submit" className={styles.newImgSubmit}>
            Add img
          </button>
        </div>
      </form>
    </div>,
    document.body,
  );
}
