"use client";
import styles from "./styles/imgCard.module.css";
import LikeBttn from "./likeBttn";
import { useMPeopleDelete } from "../hooks/useMPeopleDelete";
import { useSession } from "next-auth/react";
import AuthorDetails from "./authorDetails";
import { ShareVarsType } from "../../types";

export default function ImgCard({
  mData,
  setImgOpened,
  likes,
  handleLike,
  likedIds,
}: ShareVarsType) {
  const deleteMutation = useMPeopleDelete();
  const { data: session } = useSession();

  return (
    <ul className={styles.imgList}>
      {mData?.map((data) => (
        <li key={data._id}>
          {session?.user?.email === data.ownerEmail && (
            <div
              className={styles.deleteBttn}
              onClick={() => deleteMutation.mutate(data._id)}>
              {deleteMutation.isPending ? "..." : "X"}
            </div>
          )}
          <AuthorDetails data={data} person={data.ownerName} />
          <div className={`${styles.comOpenned} ${styles.imgBox}`}>
            <img src={data.imgSrc} onClick={() => setImgOpened(data._id)}></img>
            <div className={styles.authCommentBLock}>
              <p className={styles.authComment}>{data.authComment}</p>
            </div>

            <div className={styles.bttnSection}>
              <LikeBttn
                lCount={likes[data._id] ?? data.likes?.length ?? 0}
                id={data._id}
                onLike={handleLike}
                isLiked={likedIds[data._id] ?? false}
              />
              <div
                className={styles.commentsBttn}
                onClick={() => setImgOpened(data._id)}>
                <span>{data.comments.length}💬</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
