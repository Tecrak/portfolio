import InfoFun from "./infoFun";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <InfoFun id={id} />
    </div>
  );
}
