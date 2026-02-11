"use client";
import { useState, useEffect } from "react";
import { FormSubmit } from "./formSubmit";
export function HomeClient() {
  const [dbInfo, setDbInfo] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  async function fetchData() {
    setLoading(true);
    const res = await fetch("/api");
    const data = await res.json();
    setDbInfo(data);
    setLoading(false);
  }
  async function deleteUser(id: number) {
    await fetch("/api", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchData();
  }
  async function changeUser(id: number, name: string) {
    await fetch("/api", {
      method: "PUT",
      body: JSON.stringify({ id, name }),
    });
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {loading && <p>Loading...</p>}
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
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Stop" : "Edit"}
            </button>
            {isEditing && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  changeUser(data.id, newName);
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
