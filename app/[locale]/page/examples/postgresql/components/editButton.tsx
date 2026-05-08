"use client";

import { useState } from "react";
import { useUpdatePerson } from "../api/usePeople";
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
  const isValid = newName.length > 3 && newName.length < 10;

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
        className={`editPeople ${isEditing ? "editStop" : "editStart"}`}
        onClick={toggle}>
        {isEditing ? t("stopBttn") : t("editBttn")}
      </button>

      {isEditing && (
        <form className="peopleForm" onSubmit={handleSubmit}>
          <input
            className="peopleEditInput"
            type="text"
            placeholder={t("smthng")}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            autoFocus
          />
          <button
            className="peopleUpdate"
            type="submit"
            disabled={updateMutation.isPending || !newName.trim() || !isValid}>
            {updateMutation.isPending ? "..." : "✓"}
          </button>
          <p>{}</p>
        </form>
      )}
    </>
  );
}
