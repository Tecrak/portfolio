"use client";

import { useDeletePerson } from "@/app/api/usePeople";

interface Props {
  data: { id: number };
}

export default function DeleteButton({ data }: Props) {
  const deleteMutation = useDeletePerson();

  return (
    <button
      className="pg-btn pg-btn--delete"
      onClick={() => deleteMutation.mutate(data.id)}
      disabled={deleteMutation.isPending}
    >
      {deleteMutation.isPending ? "..." : "Delete"}
    </button>
  );
}
