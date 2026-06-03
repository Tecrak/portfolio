import AccountClient from "./content";
export default async function AccountPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const decoded = decodeURIComponent(id);

  return <AccountClient owner={decoded} />;
}
