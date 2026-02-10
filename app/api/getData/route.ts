import { dbConnect } from "@/app/dbconnection";

export async function GET() {
  const data = await dbConnect({
    query: `SELECT id, name FROM ${process.env.DB_TABLE}`,
  });
  return new Response(JSON.stringify(data), { status: 200 });
}
