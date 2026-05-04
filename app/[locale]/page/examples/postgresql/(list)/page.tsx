"use client";

import { FormSubmit } from "../components/formSubmit";
import { usePeople } from "@/app/api/usePeople";
import DeleteButton from "../components/deleteButton";
import EditButton from "../components/editButton";
import { useTranslations } from "next-intl";
import "../styles/postgresql.page.css";
import Link from "next/link";

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
          <Link
            key={data.id}
            href={`/page/examples/postgresql/${data.id}`}
            className="pg-list__name"
            style={{ color: "#8da8ff", textDecoration: "none" }}>
            <li className="pg-list__item">
              <span className="pg-list__id">#{data.id}</span>
              <span className="pg-list__name">{data.name}</span>
              <span className="pg-list_bait">Click me</span>
              <DeleteButton data={data} />
              <EditButton data={data} />
            </li>
          </Link>
        ))}
      </ul>

      <FormSubmit />
    </div>
  );
}
