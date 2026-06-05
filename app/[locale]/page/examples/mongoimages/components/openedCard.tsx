"use client";
import { useEffect, useState } from "react";
import { Post } from "../config/data";
import { Comment } from "../config/data";
import { createPortal } from "react-dom";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./styles/openedCard.module.css";
import LikeBttn from "./likeBttn";
import { useSession } from "next-auth/react";
import AuthorDetails from "./authorDetails";

export default function OpenedText({
  mData,
  setImgOpened,
  imgOpened,
  likes,
  onLike,
  likedIds,
}: {
  mData: Post[];
  imgOpened: string;
  setImgOpened: (v: string) => void;
  likes: Record<string, number>;
  onLike: (id: string, increment: number) => void;
  likedIds: Record<string, boolean>;
}) {
  const current = mData.find((item) => item._id === imgOpened);
  const { data: session } = useSession();
  const [newCommentText, setNewCommentText] = useState("");
  const queryClient = useQueryClient();

  async function handleAddComment() {
    if (!newCommentText.trim() || !session?.user) return;

    await fetch("/page/examples/mongoimages/api", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "comment",
        id: current?._id,
        comment: {
          commID: Date.now().toString(),
          commName: session.user.name,
          commEmail: session.user.email,
          commImg: session.user.image,
          commText: newCommentText.trim(),
          commDate: new Date().toLocaleDateString("uk-UA"),
        },
      }),
    });

    queryClient.invalidateQueries({ queryKey: ["mongopeople"] });
    setNewCommentText("");
  }

  if (!current) return null;
  return createPortal(
    <div className={styles.openedCard} onClick={() => setImgOpened("")}>
      <ul className={styles.cardContent} onClick={(e) => e.stopPropagation()}>
        <li className={styles.cardItem} key={current._id}>
          <div className={styles.cardImg}>
            <AuthorDetails data={current} person={current.ownerName} />
            <img src={current.imgSrc} className={styles.postImg}></img>
          </div>
          <div className={styles.commentSection}>
            <div className={styles.bttnsSection}>
              <LikeBttn
                lCount={likes[current._id] ?? current.likes?.length ?? 0}
                id={current._id}
                onLike={onLike}
                isLiked={likedIds[current._id] ?? false}
              />
              <span>{current.date}</span>
            </div>
            <div className={styles.authComment}>
              <p>{current.authComment}</p>
            </div>
            <div className={styles.commentsBlock}>
              <ul>
                {current.comments.map((comment: Comment) => (
                  <li className={styles.commentContent} key={comment.commID}>
                    <div className={styles.commentLeftPart}>
                      <img src={comment.commImg} alt={comment.commName} />
                    </div>
                    <div className={styles.commentText}>
                      <div className={styles.commPerson}>
                        <span className={styles.commName}>
                          {comment.commName}
                        </span>
                        <span className={styles.commDate}>
                          {comment.commDate}
                        </span>
                      </div>
                      <p>{comment.commText}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {session?.user?.image ? (
              <div className={styles.newComment}>
                <div className={styles.commentAuthor}>
                  <img
                    src={
                      session?.user?.image !== null ? session?.user?.image : ""
                    }></img>
                  <p>{session?.user?.name}</p>
                </div>

                <textarea
                  maxLength={50}
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                />
                <button
                  onClick={handleAddComment}
                  disabled={!newCommentText.trim()}>
                  Send
                </button>
              </div>
            ) : (
              <div className={styles.newComment}>
                <p>Please login to leave comment</p>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>,
    document.body,
  );
}
