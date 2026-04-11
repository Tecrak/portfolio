"use client";
import { useState } from "react";
import { FormSubmit } from "./components/formSubmit";
import {
  usePeople,
  useDeletePerson,
  useUpdatePerson,
} from "../../../api/usePeople";

export default function postgresqlPage() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newName, setNewName] = useState("");

  const { data: dbInfo = [], isLoading } = usePeople();
  const deleteMutation = useDeletePerson();
  const updateMutation = useUpdatePerson();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ul>
        {dbInfo.map((data: { id: number; name: string }) => (
          <li key={data.id}>
            {data.name}

            <button
              onClick={() => deleteMutation.mutate(data.id)}
              style={{ background: "red", marginLeft: "15px" }}
            >
              Delete
            </button>

            <button
              style={{ background: "green" }}
              onClick={() =>
                setEditingId(editingId === data.id ? null : data.id)
              }
            >
              {editingId === data.id ? "Stop" : "Edit"}
            </button>

            {editingId === data.id && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  updateMutation.mutate({
                    id: data.id,
                    name: newName,
                  });

                  setEditingId(null);
                  setNewName("");
                }}
              >
                <input
                  type="text"
                  onChange={(e) => setNewName(e.target.value)}
                  style={{ background: "blue", marginLeft: "15px" }}
                />
                <button type="submit">Edit</button>
              </form>
            )}
          </li>
        ))}
      </ul>
      <FormSubmit />
    </div>
  );
}
