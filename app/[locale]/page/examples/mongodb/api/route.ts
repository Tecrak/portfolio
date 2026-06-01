import { NextResponse } from "next/server";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

// ─── Types ───────────────────────────────────────────
export type DbItem = {
  _id?: ObjectId;
  name: string;
};

// ─── Singleton client (не створюємо новий на кожен запит) ───
const uri = `mongodb+srv://${process.env.MDB_USER}:${process.env.MDB_PASSWORD}@portfolioclaster.aagfjag.mongodb.net/?appName=portfolioclaster`;

let client: MongoClient;

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

  return client
    .db(process.env.MDB_DB) // "people"
    .collection(process.env.MDB_COLLECTION ?? "peopleColl");
}

// ─── GET ─────────────────────────────────────────────
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const col = await getCollection();

    if (id) {
      const item = await col.findOne({ _id: new ObjectId(id) });
      return NextResponse.json(item ? [item] : []);
    }

    const data = await col.find({}).toArray();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
// ─── PATCH ────────────────────────────────────
export async function PATCH(req: Request) {
  try {
    const { id, action, userEmail, increment, comment } = await req.json();
    const col = await getCollection();

    if (action === "like") {
      await col.updateOne(
        { _id: new ObjectId(id) },
        { $addToSet: { likes: userEmail } },
      );
    } else if (action === "unlike") {
      await col.updateOne(
        { _id: new ObjectId(id) },
        { $pull: { likes: userEmail } },
      );
    } else if (action === "comment") {
      await col.updateOne(
        { _id: new ObjectId(id) },
        { $push: { comments: comment } },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
// ─── POST ─────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const {
      imgSrc,
      authComment,
      ownerEmail,
      ownerName,
      ownerImage,
      date,
      likes,
      comments,
    } = await req.json();
    const col = await getCollection();

    await col.insertOne({
      imgSrc,
      authComment: authComment ?? "",
      ownerEmail,
      ownerName,
      ownerImage,
      date,
      likes,
      comments,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// ─── PUT ──────────────────────────────────────────────
export async function PUT(req: Request) {
  try {
    const { id, name } = await req.json();
    const col = await getCollection();

    await col.updateOne({ _id: new ObjectId(id) }, { $set: { name } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// ─── DELETE ───────────────────────────────────────────
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const col = await getCollection();

    await col.deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
