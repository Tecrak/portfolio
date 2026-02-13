import { NextResponse } from "next/server";
import { Client } from "pg";

export type DbItem = {
  id: number;
  name: string;
};

export async function dbConnect({
  query,
  values = [],
}: {
  query: string;
  values?: any[];
}): Promise<DbItem[]> {
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();

  const res = await client.query(query, values);

  await client.end();

  return res.rows; //
}

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    await dbConnect({
      query: `INSERT INTO ${process.env.DB_TABLE} ("name") VALUES ($1)`,
      values: [name],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const data = await dbConnect({
    query: `SELECT * FROM ${process.env.DB_TABLE}`,
  });
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function PUT(req: Request) {
  const { id, name } = await req.json();

  const data = await dbConnect({
    query: `UPDATE ${process.env.DB_TABLE} SET name=$1 WHERE id=$2`,
    values: [name, id],
  });
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const data = await dbConnect({
    query: `DELETE FROM ${process.env.DB_TABLE} WHERE id=$1`,
    values: [id],
  });
  return new Response(JSON.stringify(data), { status: 200 });
}
