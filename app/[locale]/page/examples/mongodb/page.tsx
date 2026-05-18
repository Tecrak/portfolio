"use client";

import "./styles/page.css";
import { useMongopeople, MongoPerson } from "./api/useMPeople";
import ImgCard from "./components/imgCard";

export default function MongoDBPage() {
  // const { data: people = [], isLoading, isError } = useMongopeople();

  // if (isLoading) return <div className="pg-loading">завантаження...</div>;
  // if (isError) return <div className="pg-loading">помилка підключення</div>;

  return (
    <div className="mainMPage">
      <button className="newPhotoBttn">Add new</button>
      <ImgCard />
    </div>
  );
}
