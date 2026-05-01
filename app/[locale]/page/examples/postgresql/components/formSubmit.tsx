"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function FormSubmit() {
  const [name, setName] = useState("");
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
        placeholder="ім'я нового запису..."
      />

      {!isValid && name.length > 0 && (
        <span className="pg-add-hint">надто коротко</span>
      )}

      <button
        className="pg-btn pg-btn--submit"
        type="submit"
        disabled={createMutation.isPending || !isValid}
      >
        {createMutation.isPending ? "Adding..." : "+ Add"}
      </button>
    </form>
  );
}
