"use client";

import { useState } from "react";
import { useUpdatePerson } from "@/app/api/usePeople";
import { useTranslations } from "next-intl";

interface Props {
  data: { id: number };
}

export default function EditButton({ data }: Props) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newName, setNewName] = useState("");
  const updateMutation = useUpdatePerson();
  const t = useTranslations("Examples.skills.PostgreSQL");
  const isEditing = editingId === data.id;

  function toggle() {
    setEditingId(isEditing ? null : data.id);
    setNewName("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newName.trim()) return;
    updateMutation.mutate({ id: data.id, name: newName });
    setEditingId(null);
    setNewName("");
  }

  return (
    <>
      <button
        className={`pg-btn ${isEditing ? "pg-btn--stop" : "pg-btn--edit"}`}
        onClick={toggle}>
        {isEditing ? t("stopBttn") : t("editBttn")}
      </button>

      {isEditing && (
        <form className="pg-edit-form" onSubmit={handleSubmit}>
          <input
            className="pg-edit-input"
            type="text"
            placeholder={t("smthng")}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            autoFocus
          />
          <button
            className="pg-btn pg-btn--submit"
            type="submit"
            disabled={updateMutation.isPending || !newName.trim()}>
            {updateMutation.isPending ? "..." : t("saveBttn")}
          </button>
        </form>
      )}
    </>
  );
}
