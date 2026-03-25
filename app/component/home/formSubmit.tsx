"use client";
import { useState } from "react";

export function FormSubmit({ onNewEntry }: { onNewEntry: () => void }) {
  const [name, setName] = useState("");
  const [nameLenght, setNameLeght] = useState(4);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    setName(""); // очищаємо поле
    onNewEntry(); // оновлюємо список
  }

  return (
    <form
      onSubmit={
        name.length <= 3 || name === ""
          ? (e) => {
              e.preventDefault();
            }
          : handleSubmit
      }
      className="mt-4 flex gap-2"
    >
      <input
        style={{
          border: name.length <= 3 ? "1px red solid" : "1px green solid",
          outline: "none",
        }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNameLeght(e.target.value.length);
        }}
      />
      <p>{nameLenght <= 3 ? "Name is too short" : ""}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
