"use client";

import { useMongopeople, MongoPerson } from "./api/useMPeople";

export default function MongoDBPage() {
  const { data: people = [], isLoading, isError } = useMongopeople();

  if (isLoading) return <div className="pg-loading">завантаження...</div>;
  if (isError) return <div className="pg-loading">помилка підключення</div>;

  return (
    <div className="mainMPage">
      <ul className="itemsMList">
        {people.map((person: MongoPerson) => (
          <li key={person._id} className="listMItem">
            <span className="pID">#{person._id.slice(-4)}</span>
            <span className="pame">{person.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
