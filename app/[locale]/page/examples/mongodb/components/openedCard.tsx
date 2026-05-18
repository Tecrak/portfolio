"use client";
import { useState } from "react";
import { Person } from "../config/data";

export default function OpenedCard() {
  const [imgOpened, setImgOpened] = useState(0);
  function selectedImg(imgID: number) {
    const valid = imgID === imgOpened;
    return valid;
  }
  return (
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
                      selectedImg(data._id)
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
                  </li>
                ))}
                <div
                  className="newCommentBox"
                  style={
                    selectedImg(data._id)
                      ? { display: "block" }
                      : { display: "none" }
                  }>
                  <input type="text"></input>
                </div>
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
