import { useQuery } from "@tanstack/react-query";
import { Game, Genre } from "../config/games";
import axios from "axios";

export function useGenredGames(selectedGenre?: Genre) {
  return useQuery({
    queryKey: ["games", selectedGenre],
    queryFn: async () => {
      const res = await axios.get("/page/examples/mongoShop/api");
      return res.data;
    },
    select: (data) =>
      selectedGenre && selectedGenre !== "All Games"
        ? data.filter((game: Game) => game.genres.includes(selectedGenre))
        : data,
  });
}
