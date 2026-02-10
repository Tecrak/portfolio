import { dbConnect } from "./dbconnection";

export const dynamic = "force-dynamic";

export default async function Home() {
  const dbInfo = await dbConnect();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <ul>
        {dbInfo.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}
