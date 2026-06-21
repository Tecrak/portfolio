import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";
// Спочатку треба підключитися до дб
const uri = `mongodb+srv://${process.env.GDB_USER}:${process.env.GDB_PASSWORD}@portfolioclaster.aagfjag.mongodb.net/?appName=portfolioclaster`;

let client: MongoClient;

// Взяти дані з бд

async function getCollection() {
  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
  }
  return client.db("games").collection("gamesCollection");
}

// GET HTML запит

export async function GET() {
  try {
    const col = await getCollection();
    const data = await col.find({}).toArray();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET error", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
