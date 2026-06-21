import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
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

export async function GET(req: NextRequest) {
  // req щоби отрмати проп
  try {
    const { searchParams } = new URL(req.url); // прийняти
    const gameId = searchParams.get("gameID"); // перекинути в проп
    const col = await getCollection();
    let query = {};

    if (gameId && ObjectId.isValid(gameId)) {
      query = { _id: new ObjectId(gameId) };
    }
    const data = await col.find(query).toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error("GET error", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
