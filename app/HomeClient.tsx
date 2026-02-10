"use client";
import { useState, useEffect } from "react";
import { FormSubmit } from "./formSubmit";

export function HomeClient() {
  const [dbInfo, setDbInfo] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const res = await fetch("/api/getData");
    const data = await res.json();
    setDbInfo(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {loading && <p>Loading...</p>}
      <ul>
        {dbInfo.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
      <FormSubmit onNewEntry={fetchData} />
    </div>
  );
}
