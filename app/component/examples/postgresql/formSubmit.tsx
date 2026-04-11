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

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          border: name.length <= 3 ? "1px red solid" : "1px green solid",
          outline: "none",
        }}
      />

      {name.length <= 3 && <p>Name is too short</p>}

      <button type="submit" disabled={createMutation.isPending}>
        {createMutation.isPending ? "Adding..." : "Submit"}
      </button>
    </form>
  );
}
