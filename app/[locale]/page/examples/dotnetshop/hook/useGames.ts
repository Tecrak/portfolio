import { useQuery } from "@tanstack/react-query";
import { Game, Genre } from "../config/games";
import axios from "axios";

export function useGames(selectedGenre?: Genre) {
  return useQuery({
    queryKey: ["games", selectedGenre],
    queryFn: async () => {
      const res = await axios.get("/page/examples/dotnetshop/api");
      return res.data;
    },
    // Викликало баг з isBestDeal, тому вирішив зробити через .filter
    // select: (data) =>
    //   selectedGenre && selectedGenre !== "All Games"
    //     ? data.filter((game: Game) => game.genres.includes(selectedGenre))
    //     : data,
  });
}
