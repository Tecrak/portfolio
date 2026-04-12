import { useDeletePerson } from "@/app/api/usePeople";
export default function DeleteButton({ data }: { data: { id: number } }) {
  const deleteMutation = useDeletePerson();

  return (
    <button
      onClick={() => deleteMutation.mutate(data.id)}
      style={{ background: "red", marginLeft: "15px" }}
    >
      Delete
    </button>
  );
}
