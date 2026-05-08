import { useQuery } from "@tanstack/react-query";

const API = "/page/examples/mongodb/api";

export type MongoPerson = {
  _id: string;
  name: string;
};

// ─── GET ─────────────────────────────────────────────
export function useMongopeople() {
  return useQuery({
    queryKey: ["mongopeople"],
    queryFn: async () => {
      const res = await fetch(API);
      return res.json();
    },
  });
}
