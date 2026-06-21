export type Genre = "All Games" | "Action" | "RPG" | "Strat" | "MOBA" | "Story";
export type Genres = Genre[];

export interface GameItemProps {
  game: Game;
}
export interface GamePrice {
  price: number;
  discountPer: number;
}

export interface Game {
  id: number;
  gameName: string;
  gamePrice: GamePrice;
  genres: Genre[];
  imgSrc: string;
  description: string;
  isCommingSoon: boolean;
}

export interface ShareVars {
  games: Game[];
  styles: Record<string, string>;
  genres: Genres;
}

export const genres: Genres = ["All Games", "Action", "RPG", "Strat", "MOBA"];
