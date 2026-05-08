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
    <form className="peopleSF" onSubmit={handleSubmit}>
      <input
        className={`peopleSFInput ${isValid ? "PValid" : "PInvalid"}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("smthng")}
      />

      {!isValid && name.length > 0 && (
        <span className="peopleTooShort">{t("tooShort")}</span>
      )}

      <button
        className="peopleSubmitNew"
        type="submit"
        disabled={createMutation.isPending || !isValid}>
        {createMutation.isPending ? t("adding") : "+ " + t("addBttn")}
      </button>
    </form>
  );
}
