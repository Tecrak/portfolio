"use client";

import "./styles/page.css";
import { mData } from "./config/data";
import { useMongopeople, MongoPerson } from "./api/useMPeople";
import { useState } from "react";

export default function MongoDBPage() {
  // const { data: people = [], isLoading, isError } = useMongopeople();

  // if (isLoading) return <div className="pg-loading">завантаження...</div>;
  // if (isError) return <div className="pg-loading">помилка підключення</div>;
  const [imgOpened, setImgOpened] = useState(0);

  return (
    <div className="mainMPage">
      <button className="newPhotoBttn">Add new</button>
      <ul className="imgList">
        {mData.map((data) => (
          <li key={data._id}>
            <div className="comOpenned imgBox">
              <img
                src={data.imgSrc}
                onClick={() =>
                  imgOpened <= 0 ? setImgOpened(data._id) : setImgOpened(0)
                }></img>
              {/* <div className="deleteBox"> */}
              <div className="bttnSection">
                <div className="likeBox">
                  <button className="likeBttn notLiked">❤️ Like</button>
                  <span className="commsCount">{data.likeCount}</span>
                </div>
                <ul className="commentsBttn">
                  <span>💬</span>
                  {data.comments.map((cData) => (
                    <li
                      key={`${cData.aId}+"a"`}
                      className="commentBlock"
                      style={
                        data._id === imgOpened
                          ? { display: "block" }
                          : { display: "none" }
                      }>
                      <div className="commentTopPart">
                        <img src={data.imgSrc}></img>
                        <p className="commentName">{}</p>
                        <p className="commentDate">22.2.2222</p>
                      </div>
                      <div className="commentContent">
                        <p>{cData.comment}</p>
                      </div>
                      <div className="newCommentBox">
                        <input type="text"></input>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
