"use client";

import { FormSubmit } from "../components/formSubmit";
import { usePeople } from "../api/usePeople";
import DeleteButton from "../components/deleteButton";
import EditButton from "../components/editButton";
import { useTranslations } from "next-intl";
import "../styles/postgresql.page.css";
import Link from "next/link";

export default function PostgresqlPage() {
  const { data: dbInfo = [] } = usePeople();
  const t = useTranslations("Examples");

  return (
    <div className="pg-page">
      <ul className="pg-list">
        {dbInfo.map((data: { id: number; name: string }) => (
          <li key={data.id} className="pg-list__item">
            <span className="pg-list__id">#{data.id}</span>
            <span className="pg-list__name">{data.name}</span>{" "}
            {/* <Link
              key={data.id}
              href={`/page/examples/postgresql/${data.id}`}
              className="pg-list__name"
              style={{ color: "#8da8ff", textDecoration: "none" }}>
              <span className="pg-list_bait">
                {t("skills.PostgreSQL.clickMe")}
              </span>
            </Link> */}
            <DeleteButton data={data} />
            <EditButton data={data} />
          </li>
        ))}
      </ul>

      <FormSubmit />
    </div>
  );
}
