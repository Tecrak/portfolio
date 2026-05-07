"use client";

import { useDeletePerson } from "@/app/api/usePeople";
import { useTranslations } from "next-intl";

interface Props {
  data: { id: number };
}

export default function DeleteButton({ data }: Props) {
  const deleteMutation = useDeletePerson();
  const t = useTranslations("Examples.skills.PostgreSQL");

  return (
    <button
      className="pg-btn pg-btn--delete"
      onClick={() => deleteMutation.mutate(data.id)}
      disabled={deleteMutation.isPending}>
      {deleteMutation.isPending ? "..." : t("deleteBttn")}
    </button>
  );
}
