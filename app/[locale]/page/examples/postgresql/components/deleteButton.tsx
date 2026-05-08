"use client";

import { useDeletePerson } from "../api/usePeople";
import { useTranslations } from "next-intl";

interface Props {
  data: { id: number };
}

export default function DeleteButton({ data }: Props) {
  const deleteMutation = useDeletePerson();
  const t = useTranslations("Examples.skills.PostgreSQL");

  return (
    <button
      className="deletePeople"
      onClick={() => deleteMutation.mutate(data.id)}
      disabled={deleteMutation.isPending}>
      {deleteMutation.isPending ? "..." : t("deleteBttn")}
    </button>
  );
}
