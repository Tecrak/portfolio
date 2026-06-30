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

    const data = gameId
      ? await col.find(query).toArray()
      : await col
          .find(query, {
            projection: {
              // projection щоби витягти  конкретні данні, хочу потім у [id] щоби всі данні про гру витягалися
              _id: 1,
              gameName: 1,
              gamePrice: 1,
              genres: 1,
              description: 1,
              imgSrc: 1,
              isCommingSoon: 1,
            },
          })
          .toArray();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET error", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
