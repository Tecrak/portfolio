"use client";
import { useState } from "react";
import { Person } from "../config/data";
import "./styles/imgCard.css";

export default function ImgCard({
  mData,
  setImgOpened,
  imgOpened,
  selectedImg,
}: {
  mData: Person[];
  setImgOpened: (v: number) => void;
  imgOpened: number;
  selectedImg: (imgID: number) => boolean;
}) {
  const current = mData.find((item) => item._id === imgOpened);

  if (!current) return null;
  return (
    <ul className="imgList">
      <li key={current._id}>
        <div className="comOpenned imgBox">
          <img
            src={current.imgSrc}
            onClick={() =>
              imgOpened <= 0 ? setImgOpened(current._id) : setImgOpened(0)
            }></img>
          {/* <div className="deleteBox"> */}
          <div className="bttnSection">
            <div className="likeBox">
              <button className="likeBttn notLiked">❤️ Like</button>
              <span className="commsCount">{current.likeCount}</span>
            </div>
            <ul className="commentsBttn">
              <span>💬</span>
              {current.comments.map((cData) => (
                <li
                  key={`${cData.aId}+"a"`}
                  className="commentBlock"
                  style={
                    selectedImg(current._id)
                      ? { display: "block" }
                      : { display: "none" }
                  }>
                  <div className="commentTopPart">
                    <img src={current.imgSrc}></img>
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
                  selectedImg(current._id)
                    ? { display: "block" }
                    : { display: "none" }
                }>
                <input type="text"></input>
              </div>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
}
