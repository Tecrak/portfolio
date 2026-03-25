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

export function useFilterFetchDB(id: string) {
  const [data, setData] = useState<{ id: number; name: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const res = await fetch(`/api?id=${id}`);
        const result = await res.json();
        setData(result[0] || null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return { data, loading };
}
// async function fetchData() {
//   setLoading(true);
//   const res = await fetch("/api");
//   const data = await res.json();
//   setDbInfo(data);
//   setLoading(false);
// }
