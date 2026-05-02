"use client";

import { FormSubmit } from "../components/formSubmit";
import { usePeople } from "@/app/api/usePeople";
import DeleteButton from "../components/deleteButton";
import EditButton from "../components/editButton";
import { useTranslations } from "next-intl";
import "../styles/postgresql.page.css"; 

export default function PostgresqlPage() {
  const { data: dbInfo = [], isLoading } = usePeople();
  const t = useTranslations("Examples");

  if (isLoading) {
    return <div className="pg-loading">{t("download")}</div>;
  }

  return (
    <div className="pg-page">
      <ul className="pg-list">
        {dbInfo.map((data: { id: number; name: string }) => (
          <li key={data.id} className="pg-list__item">
            <span className="pg-list__id">#{data.id}</span>
            <span className="pg-list__name">{data.name}</span>
            <DeleteButton data={data} />
            <EditButton data={data} />
          </li>
        ))}
      </ul>

      <FormSubmit />
    </div>
  );
}
