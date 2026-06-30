import { Game } from "../config/games";

export function getBestDealGame(games: Game[]): Game | null {
  const discounted = games.filter((g) => g.gamePrice.discountPer > 0);
  if (discounted.length === 0) return null;

  return discounted.reduce((best, current) => {
    const bestSavings = best.gamePrice.price * best.gamePrice.discountPer;
    const currentSavings =
      current.gamePrice.price * current.gamePrice.discountPer;
    return currentSavings > bestSavings ? current : best;
  });
}
