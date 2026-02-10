import { dbConnect } from "./dbconnect";

export default async function Home() {
  const dbInfo = await dbConnect();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <ul>
        {dbInfo.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
}
