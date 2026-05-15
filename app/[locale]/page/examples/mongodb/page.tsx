"use client";

import "./styles/page.css";
import { mData } from "./config/data";
import { useMongopeople, MongoPerson } from "./api/useMPeople";

export default function MongoDBPage() {
  // const { data: people = [], isLoading, isError } = useMongopeople();

  // if (isLoading) return <div className="pg-loading">завантаження...</div>;
  // if (isError) return <div className="pg-loading">помилка підключення</div>;

  return (
    <div className="mainMPage">
      <button className="newPhotoBttn">Add new</button>
      <ul className="imgList">
        <li>
          <div className="imgBox">
            <img src="https://i.pravatar.cc/150?img=1"></img>
            <div className="bttnSection">
              <div className="likeBox">
                <button className="likeBttn notLiked">❤️ Like</button>
                <span className="commsCount">10</span>
              </div>
              <ul className="commentsBttn">
                comms
                <li className="commentBlock">
                  <div className="commentTopPart">
                    <p className="commentName">Stas</p>
                    <p className="commentDate">22.2.2222</p>
                  </div>
                  <div className="commentContent">
                    <p>dsadasd</p>
                  </div>
                  <div className="newCommentBox">
                    <input type="text"></input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="imgBox">
            <img src="https://i.pravatar.cc/150?img=1"></img>
            <div className="bttnSection">
              <div className="likeBox">
                <button className="likeBttn notLiked">❤️ Like</button>
                <span className="commsCount">10</span>
              </div>
              <ul className="commentsBttn">
                comms
                <li className="commentBlock">
                  <div className="commentTopPart">
                    <p className="commentName">Stas</p>
                    <p className="commentDate">22.2.2222</p>
                  </div>
                  <div className="commentContent">
                    <p>dsadasd</p>
                  </div>
                  <div className="newCommentBox">
                    <input type="text"></input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="imgBox">
            <img src="https://i.pravatar.cc/150?img=1"></img>
            <div className="bttnSection">
              <div className="likeBox">
                <button className="likeBttn notLiked">❤️ Like</button>
                <span className="commsCount">10</span>
              </div>
              <ul className="commentsBttn">
                comms
                <li className="commentBlock">
                  <div className="commentTopPart">
                    <p className="commentName">Stas</p>
                    <p className="commentDate">22.2.2222</p>
                  </div>
                  <div className="commentContent">
                    <p>dsadasd</p>
                  </div>
                  <div className="newCommentBox">
                    <input type="text"></input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="imgBox">
            <img src="https://i.pravatar.cc/150?img=1"></img>
            <div className="bttnSection">
              <div className="likeBox">
                <button className="likeBttn notLiked">❤️ Like</button>
                <span className="commsCount">10</span>
              </div>
              <ul className="commentsBttn">
                comms
                <li className="commentBlock">
                  <div className="commentTopPart">
                    <p className="commentName">Stas</p>
                    <p className="commentDate">22.2.2222</p>
                  </div>
                  <div className="commentContent">
                    <p>dsadasd</p>
                  </div>
                  <div className="newCommentBox">
                    <input type="text"></input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="imgBox">
            <img src="https://i.pravatar.cc/150?img=1"></img>
            <div className="bttnSection">
              <div className="likeBox">
                <button className="likeBttn notLiked">❤️ Like</button>
                <span className="commsCount">10</span>
              </div>
              <ul className="commentsBttn">
                comms
                <li className="commentBlock">
                  <div className="commentTopPart">
                    <p className="commentName">Stas</p>
                    <p className="commentDate">22.2.2222</p>
                  </div>
                  <div className="commentContent">
                    <p>dsadasd</p>
                  </div>
                  <div className="newCommentBox">
                    <input type="text"></input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="imgBox">
            <img src="https://i.pravatar.cc/150?img=1"></img>
            <div className="bttnSection">
              <div className="likeBox">
                <button className="likeBttn notLiked">❤️ Like</button>
                <span className="commsCount">10</span>
              </div>
              <ul className="commentsBttn">
                comms
                <li className="commentBlock ">
                  <div className="commentTopPart">
                    <p className="commentName">Stas</p>
                    <p className="commentDate">22.2.2222</p>
                  </div>
                  <div className="commentContent">
                    <p>dsadasd</p>
                  </div>
                  <div className="newCommentBox">
                    <input type="text"></input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="imgBox">
            <img src="https://i.pravatar.cc/150?img=1"></img>
            <div className="bttnSection">
              <div className="likeBox">
                <button className="notLiked likeBttn">❤️ Like</button>
                <span className="commsCount">10</span>
              </div>
              <ul className="commentsBttn">
                comms
                <li className="commentBlock">
                  <div className="commentTopPart">
                    <p className="commentName">Stas</p>
                    <p className="commentDate">22.2.2222</p>
                  </div>
                  <div className="commentContent">
                    <p>dsadasd</p>
                  </div>
                  <div className="newCommentBox">
                    <input type="text"></input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
