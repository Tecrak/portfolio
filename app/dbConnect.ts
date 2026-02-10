import { Client } from "pg";

export type DbItem = {
  id: number;
  name: string;
};

export async function dbConnect(): Promise<DbItem[]> {
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

  const res = await client.query("SELECT id, name FROM products");

  await client.end();

  return res.rows; //
}
