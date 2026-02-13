"use client";
import { useEffect } from "react";
import { useFetchDB } from "../../api/useFetchDb";

export default function InfoFun({ id }: { id: string }) {
  const { dbInfo, fetchData } = useFetchDB();
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {dbInfo.map((data) => {
        if (data.id === parseInt(id)) {
          return <div key={data.id}>HIII:{data.name}</div>;
        }
      })}
    </div>
  );
}
