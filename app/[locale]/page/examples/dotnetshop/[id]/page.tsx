import GameContent from "./gameContent";

export default async function GamePage({
  params,
}: {
  params: Promise<{ _id: any }>;
}) {
  const { _id } = await params;
  // Треба буде щоб тут викликалася функція яка візьме дані з ДБ
  return <GameContent gameId={_id} />;
}
