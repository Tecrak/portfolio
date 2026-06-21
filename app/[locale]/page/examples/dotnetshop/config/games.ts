export type Genre = "All Games" | "Action" | "RPG" | "Strat" | "MOBA" | "Story";
export type Genres = Genre[];

export interface GameItemProps {
  game: Game;
  isBestDeal: boolean;
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
export const games: Game[] = [
  {
    id: 1,
    gameName: "Shadow",
    gamePrice: {
      price: 10.99,
      discountPer: 0.25,
    },
    genres: ["RPG", "Action"],
    imgSrc:
      "https://imgs.search.brave.com/gxS2bibOZzDvKigxNrFkMByIDJCsLhBDZY99aDGRr5M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FjL2Rj/LzIwL2FjZGMyMDIy/N2ExNjIxN2NmZTA2/OWNiODcwNzIxODE1/LmpwZw",
    description: "Cool game",
    isCommingSoon: false,
  },
  {
    id: 2,
    gameName: "DOTA 2",
    gamePrice: {
      price: 0,
      discountPer: 0,
    },
    genres: ["MOBA", "Strat"],
    imgSrc:
      "https://imgs.search.brave.com/5KBMrcOTlh4yLfQo5eW4qgyG6RB4xYv-MdNuoEdnvIg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYxL2E0/LzhmLzYxYTQ4ZjUx/ZWU0YWI5NjlkZTcx/YzAzYjgyM2EzMjg4/LmpwZw",
    description:
      "Щодня мільйони гравців у всьому світі вступають у бій за одного з понад сотні героїв Dota. І немає значення, буде це 10-та година гри чи 1000-на, завжди знайдеться щось нове для відкриття. Dota 2 живе своїм життям завдяки постійній еволюції ігроладу, можливостей і героїв.",
    isCommingSoon: false,
  },
  {
    id: 3,
    gameName: "Deadlock",
    gamePrice: {
      price: 20,
      discountPer: 0,
    },
    genres: ["MOBA", "Strat", "Action"],
    imgSrc:
      "https://imgs.search.brave.com/eRPtjSiR2OEiD82b57VXOaZ3v2CwxEKb-6cTD8MaT04/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvZGVh/ZGxvY2stZ2FtZXBs/YXktdXBkYXRlLTA1/LTIyLTIwMjYtdjAt/UUVpQWFsTElfT2lz/WGJaUHJUaFZqMmpa/ajZmRVpYeUx0NUs2/alNSSXlway5wbmc_/d2lkdGg9NjQwJmNy/b3A9c21hcnQmYXV0/bz13ZWJwJnM9NzBh/NGEyYjgxNGEzNjcx/MWE2NDY1ZDVmZmM4/YjRiYWM5ODJiNWE4/Yw",
    description:
      "Deadlock — це багатокористувацька гра на ранньому етапі розробки.",
    isCommingSoon: true,
  },
  {
    id: 4,
    gameName: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    gamePrice: {
      price: 49.99,
      discountPer: 0.4,
    },
    genres: ["Action", "RPG", "Strat"],
    imgSrc:
      "https://imgs.search.brave.com/Y4pD06dOrzZpQ2j_q8SzSrHWpTw3mZJjNZMpvjtYLRs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnF1/YWxiZXJ0LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/MS9TdGFsa2VyLTIt/dGl0bGUuanBnP3Jl/c2l6ZT0xMTcwLDcy/MCZzc2w9MQ",
    description:
      "Відкрийте для себе Чорнобильську Зону Відчуження сповнену небезпечних ворогів, смертельних аномалій та потужних артефактів. Напишіть свою власну епічну історію, прокладаючи свій шлях до Серця Чорнобиля!",
    isCommingSoon: false,
  },
  {
    id: 5,
    gameName: "Kikikaka",
    gamePrice: {
      price: 10.99,
      discountPer: 0.0,
    },
    genres: ["RPG", "Story"],
    imgSrc:
      "https://imgs.search.brave.com/OF4Ny4Uw6va6GuwVUJPczIbiiZve9e4GgsZzsXCQ4zM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBhL0x1eG9yVGVt/cGxlMy5qcGc",
    description: "Beatiful game",
    isCommingSoon: false,
  },
];
