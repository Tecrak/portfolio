"use client";

import { FormSubmit } from "../components/formSubmit";
import { usePeople } from "../api/usePeople";
import DeleteButton from "../components/deleteButton";
import EditButton from "../components/editButton";
import { useTranslations } from "next-intl";
import "../styles/page.css";
import { useState } from "react";

export default function PostgresqlPage() {
  type DbItem = { id: number; name: string };
  const { data: dbInfo = [], isLoading } = usePeople();
  const t = useTranslations("Examples");
  const [page, setPage] = useState(1);
  const perPage = 7;
  const totalPages = Math.ceil(dbInfo.length / perPage);
  const paginated = dbInfo
    .slice()
    .sort((a: DbItem, b: DbItem) => a.id - b.id)
    .slice((page - 1) * perPage, page * perPage);
  const isDbFull = dbInfo.length === 15;
  if (isLoading)
    return (
      <div className="mainBlock">
        <ul className="peopleList">
          {Array.from({ length: 4 }).map((_, i) => (
            <li key={i} className="listItem">
              <div className="spansBlock">
                <span className="listID"></span>
                <span className="listName"></span>
              </div>
              <div className="bttnsBlock">
                <button></button>
                <button></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <div className="mainBlock">
      <ul className="peopleList">
        {paginated.map((data: { id: number; name: string }) => (
          <li key={data.id} className="listItem">
            <div className="spansBlock">
              <span className="listID">#{data.id}</span>
              <span className="listName">{data.name}</span>{" "}
            </div>
            <div className="bttnsBlock">
              <DeleteButton data={data} />
              <EditButton data={data} />
            </div>
          </li>
        ))}
        <div className="pagination">
          <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
            ⬅️
          </button>
          <p>
            {page} / {totalPages}
          </p>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}>
            ➡️
          </button>
        </div>
      </ul>
      <FormSubmit isDbFull={isDbFull} />
    </div>
  );
}
