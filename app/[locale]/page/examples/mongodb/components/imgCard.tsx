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
              <div
                className="commentsBttn"
                onClick={() =>
                  imgOpened <= 0 ? setImgOpened(data._id) : setImgOpened(0)
                }>
                <span>💬</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
