import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useMPeopleDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await fetch("/page/examples/mongoimages/api", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mongopeople"] });
    },
  });
}
