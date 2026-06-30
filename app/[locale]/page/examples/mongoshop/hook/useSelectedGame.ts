import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useSelectedGame(gameId: string | null) {
  return useQuery({
    queryKey: ["games", gameId],
    queryFn: async () => {
      const res = await axios.get("/page/examples/mongoshop/api", {
        params: { gameID: gameId },
      });
      return res.data;
    },
  });
}
