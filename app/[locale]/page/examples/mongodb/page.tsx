"use client";

import { mData } from "./config/data";
import { useMongopeople, MongoPerson } from "./api/useMPeople";

export default function MongoDBPage() {
  // const { data: people = [], isLoading, isError } = useMongopeople();

  // if (isLoading) return <div className="pg-loading">завантаження...</div>;
  // if (isError) return <div className="pg-loading">помилка підключення</div>;

  return (
    <div className="mainMPage">
      <ul className="itemsMList">
        {mData.map((person) => (
          <li key={person._id} className="listMItem">
            <span className="pID">#{person._id}</span>
            <>/</>
            <span className="pame">{person.name}</span>
            <img src={person.imgHref}></img>
            <div className="comms">
              {person.comments.map((comms) => (
                <>
                  <span>{comms.comment}</span>
                  <span>{comms.aId}</span>
                </>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
