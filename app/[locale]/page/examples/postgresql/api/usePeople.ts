import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function usePeople() {
  return useQuery({
    queryKey: ["people"],
    queryFn: async () => {
      const res = await fetch("/page/examples/postgresql/api");
      return res.json();
    },
  });
}

// DELETE
export function useDeletePerson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await fetch("/page/examples/postgresql/api", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });
}

// UPDATE
export function useUpdatePerson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, name }: { id: number; name: string }) => {
      await fetch("/page/examples/postgresql/api", {
        method: "PUT",
        body: JSON.stringify({ id, name }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });
}
