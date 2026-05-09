"use client";

import { FormSubmit } from "../components/formSubmit";
import { usePeople } from "../api/usePeople";
import DeleteButton from "../components/deleteButton";
import EditButton from "../components/editButton";
import { useTranslations } from "next-intl";
import "../styles/page.css";
import Link from "next/link";

export default function PostgresqlPage() {
  const { data: dbInfo = [], isLoading } = usePeople();
  const t = useTranslations("Examples");

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
        <FormSubmit />
      </div>
    );

  return (
    <div className="mainBlock">
      <ul className="peopleList">
        {dbInfo.map((data: { id: number; name: string }) => (
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
      </ul>
      <FormSubmit />
    </div>
  );
}
