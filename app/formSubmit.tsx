"use client";
import { useState } from "react";

export function FormSubmit({ onNewEntry }: { onNewEntry: () => void }) {
  const [name, setName] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    setName(""); // очищаємо поле
    onNewEntry(); // оновлюємо список
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
