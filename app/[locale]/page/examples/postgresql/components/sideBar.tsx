"use client";

import { usePeople } from "..//api/usePeople";
import Link from "next/link";

export default function SideBar() {
  const { data: people = [], isLoading } = usePeople();

  if (isLoading) return <div className="pg-loading">завантаження...</div>;

  return (
    <ul className="pg-list" style={{ padding: "12px 16px" }}>
      {people.map((data: { id: number; name: string }) => (
        <li key={data.id} className="pg-list__item">
          <span className="pg-list__id">#{data.id}</span>
          <Link
            href={`/page/examples/postgresql/${data.id}`}
            className="pg-list__name"
            style={{ color: "#8da8ff", textDecoration: "none" }}>
            {data.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
