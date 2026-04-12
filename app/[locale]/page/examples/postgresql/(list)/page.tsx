"use client";
import { FormSubmit } from "../components/formSubmit";
import { usePeople } from "@/app/api/usePeople";
import DeleteButton from "../components/deleteButton";
import EditButton from "../components/editButton";

export default function postgresqlPage() {
  const { data: dbInfo = [], isLoading } = usePeople();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ul>
        {dbInfo.map((data: { id: number; name: string }) => (
          <li key={data.id}>
            {data.name}
            <DeleteButton data={data} />
            <EditButton data={data} />
          </li>
        ))}
      </ul>
      <FormSubmit />
    </div>
  );
}
