"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

export function FormSubmit() {
  const [name, setName] = useState("");
  const t = useTranslations("Examples.skills.PostgreSQL");
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: async (name: string) => {
      await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name.length <= 3) return;
    createMutation.mutate(name);
    setName("");
  }

  const isValid = name.length > 3;

  return (
    <form className="pg-add-form" onSubmit={handleSubmit}>
      <input
        className={`pg-add-input ${isValid ? "pg-add-input--valid" : "pg-add-input--invalid"}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("smthng")}
      />

      {!isValid && name.length > 0 && (
        <span className="pg-add-hint">{t("tooShort")}</span>
      )}

      <button
        className="pg-btn pg-btn--submit"
        type="submit"
        disabled={createMutation.isPending || !isValid}>
        {createMutation.isPending ? t("adding") : "+ " + t("addBttn")}
      </button>
    </form>
  );
}
