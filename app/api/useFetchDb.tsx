"use client";
import { useEffect, useState } from "react";

// export async function fetchData() {
//   const res = await fetch("/api");
//   return res.json();
// }

export function useFetchDB() {
  const [dbInfo, setDbInfo] = useState<{ id: number; name: string }[]>([]);

  async function fetchData() {
    const res = await fetch("/api");
    const data = await res.json();
    setDbInfo(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { dbInfo, fetchData };
}

// async function fetchData() {
//   setLoading(true);
//   const res = await fetch("/api");
//   const data = await res.json();
//   setDbInfo(data);
//   setLoading(false);
// }
