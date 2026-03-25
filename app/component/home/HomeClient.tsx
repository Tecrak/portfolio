"use client";
import { useState, useEffect } from "react";
import { FormSubmit } from "./formSubmit";
import { useFetchDB } from "../../api/useFetchDb";
export function HomeClient() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newName, setNewName] = useState("");
  const { dbInfo, fetchData } = useFetchDB();

  async function deleteUser(id: number) {
    await fetch("/api", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    await fetchData();
  }
  async function changeUser(id: number, name: string) {
    await fetch("/api", {
      method: "PUT",
      body: JSON.stringify({ id, name }),
    });
    await fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ul>
        {dbInfo.map((data) => (
          <li key={data.id}>
            {data.name}
            <button
              onClick={() => deleteUser(data.id)}
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
                  changeUser(data.id, newName);
                  setEditingId(null);
                  setNewName("");
                }}
              >
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setNewName(e.target.value)}
                  style={{ background: "blue", marginLeft: "15px" }}
                ></input>
                <button type="submit">Edit</button>
              </form>
            )}
          </li>
        ))}
      </ul>
      <FormSubmit onNewEntry={fetchData} />
    </div>
  );
}
