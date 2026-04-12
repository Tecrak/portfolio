import { useUpdatePerson } from "@/app/api/usePeople";
import { useState } from "react";

export default function EditButton({ data }: { data: { id: number } }) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newName, setNewName] = useState("");
  const updateMutation = useUpdatePerson();

  return (
    <>
      <button
        style={{ background: "green" }}
        onClick={() => setEditingId(editingId === data.id ? null : data.id)}
      >
        {editingId === data.id ? "Stop" : "Edit"}
      </button>
      {editingId === data.id && (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            updateMutation.mutate({
              id: data.id,
              name: newName,
            });

            setEditingId(null);
            setNewName("");
          }}
        >
          <input
            type="text"
            onChange={(e) => setNewName(e.target.value)}
            style={{ background: "blue", marginLeft: "15px" }}
          />
          <button type="submit">Edit</button>
        </form>
      )}
    </>
  );
}
