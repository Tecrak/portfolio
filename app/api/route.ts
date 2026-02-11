import { dbConnect } from "@/app/api/dbconnection";
import { NextResponse } from "next/server";

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
