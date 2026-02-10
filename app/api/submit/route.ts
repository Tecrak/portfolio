import { dbConnect } from "@/app/dbconnection";
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
