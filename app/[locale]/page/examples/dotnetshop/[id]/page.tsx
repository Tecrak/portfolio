import GameContent from "./gameContent";

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  // Треба буде щоб тут викликалася функція яка візьме дані з ДБ
  return <GameContent gameId={id} />;
}
