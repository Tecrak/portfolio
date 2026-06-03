"use client";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./styles/newImg.module.css";
import { useSession } from "next-auth/react";

export default function NewImg({
  isNewImg,
  setIsNewImg,
}: {
  isNewImg: boolean;
  setIsNewImg: (v: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const onErrorImg =
    "https://imgs.search.brave.com/pPrdorGUOBNDvCkeh4bLvSMZyoZkjr0gO3Ai8ggA81o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MTYxMjM0L3Bob3Rv/L2VtcHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1jX1JO/R29RUWhZUlpwUUI5/YUZtRjMxamVxZ2w0/LVlkTFNzd0RLWXBi/UHRvPQ";
  const defaultImg =
    "https://kapterka.com.ua/image/data/ukraine/bandera-flag-deviz.jpg";
  const [imgUrl, setImgUrl] = useState("");
  const [authComment, setAuthComment] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const { data: session } = useSession();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!imgUrl || !session?.user) return;

    setIsPending(true);
    await fetch("/page/examples/mongodb/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imgSrc: imgUrl,
        authComment,
        ownerEmail: session.user.email,
        ownerName: session.user.name,
        ownerImage: session.user.image,
        date: new Date().toLocaleDateString("uk-UA"),
        likes: [],
        comments: [],
      }),
    });

    queryClient.invalidateQueries({ queryKey: ["mongopeople"] });
    setIsPending(false);
    setIsNewImg(false);
    setImgUrl("");
    setAuthComment("");
  }
  const [isImgValid, setIsImgValid] = useState(false);

  useEffect(() => {
    if (!imgUrl) {
      setIsImgValid(false);
      return;
    }

    const img = new Image();
    img.src = imgUrl;
    img.onload = () => setIsImgValid(true);
    img.onerror = () => setIsImgValid(false);
  }, [imgUrl]);

  return createPortal(
    <div
      className={styles.newImgBox}
      onClick={() => setIsNewImg(!isNewImg)}
      style={!isNewImg ? { display: "none" } : { display: "flex" }}>
      <form
        className={styles.newImgForm}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}>
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
            <label htmlFor="imgSrc">
              IMAGE URL {imgUrl && (isImgValid ? "✓" : "✗")}
            </label>
            <input
              id="imgSrc"
              type="text"
              name="imgSrc"
              value={imgUrl}
              onChange={(e) => {
                setImgUrl(e.target.value);
                setIsImgValid(false);
              }}
            />
          </div>
          <div>
            <label htmlFor="authComment">AUTHOR COMMENT</label>
            <textarea
              id="authComment"
              name="authComment"
              value={authComment}
              maxLength={250}
              placeholder="Max 250 chars"
              className={styles.authCommInput}
              onChange={(e) => {
                setAuthComment(e.target.value);
                setCharCount(e.target.value.length);
              }}
            />
            <span className={styles.charCount}>{charCount}/250</span>
          </div>
          <button
            type="submit"
            className={styles.newImgSubmit}
            disabled={isPending || !imgUrl || !isImgValid}>
            {isPending ? "Adding..." : "Add img"}
          </button>
        </div>
      </form>
    </div>,
    document.body,
  );
}
