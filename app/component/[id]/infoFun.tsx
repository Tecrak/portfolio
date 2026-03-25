"use client";
import { useFilterFetchDB } from "../../api/useFilterFetchDB";

export default function InfoFun({ id }: { id: string }) {
  const { data, loading } = useFilterFetchDB(id);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Not found</div>;

  return <div>HIII: {data.name}</div>;
}
