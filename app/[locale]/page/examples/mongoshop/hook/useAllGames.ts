import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAllGames() {
  return useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const res = await axios.get("/page/examples/mongoshop/api");
      return res.data;
    },
  });
}
