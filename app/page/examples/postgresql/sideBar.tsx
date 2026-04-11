"use client";

import { usePeople } from "@/app/api/usePeople";
import Link from "next/link";

export default function SideBar() {
  const { data: people = [], isLoading } = usePeople();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {people.map((data: { id: number; name: string }) => (
        <li key={data.id}>
          <Link href={`/page/${data.id}`}>
            {data.id}: {data.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
