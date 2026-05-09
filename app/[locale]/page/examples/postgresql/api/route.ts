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
    host: process.env.PDB_HOST,
    port: Number(process.env.PDB_PORT),
    database: process.env.PDB_NAME,
    user: process.env.PDB_USER,
    password: process.env.PDB_PASSWORD,
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
      query: `INSERT INTO ${process.env.PDB_TABLE} ("name") VALUES ($1)`,
      values: [name],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  // якщо id передали — фільтруємо
  if (id) {
    const data = await dbConnect({
      query: `SELECT * FROM ${process.env.PDB_TABLE} WHERE id = $1`,
      values: [id],
    });

    return NextResponse.json(data);
  }

  // якщо ні — повертаємо все (опційно)
  const data = await dbConnect({
    query: `SELECT * FROM ${process.env.PDB_TABLE}`,
  });

  return NextResponse.json(data);
}
export async function PUT(req: Request) {
  const { id, name } = await req.json();

  const data = await dbConnect({
    query: `UPDATE ${process.env.PDB_TABLE} SET name=$1 WHERE id=$2`,
    values: [name, id],
  });
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const data = await dbConnect({
    query: `DELETE FROM ${process.env.PDB_TABLE} WHERE id=$1`,
    values: [id],
  });
  return new Response(JSON.stringify(data), { status: 200 });
}
