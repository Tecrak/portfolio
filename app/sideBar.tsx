"use client";

import { useFetchDB } from "./api/useFetchDb";
import Link from "next/link";

export default function SideBar() {
  const { dbInfo } = useFetchDB();

  return (
    <ul>
      {dbInfo.map((data) => (
        <li key={data.id}>
          <Link href={`/component/${data.id}`}>
            {data.id}: {data.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
