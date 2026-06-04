import { useQuery } from "@tanstack/react-query";

const API = "/page/examples/mongoimages/api";

export type MongoPerson = {
  _id: string;
  ownerName: string;
  ownerEmail: string;
  ownerImage: string;
  imgSrc: string;
  authComment?: string;
  date: string;
  likes: string[];
  comments: any[];
};

// ─── GET ─────────────────────────────────────────────

export function useMongopeople(ownerName?: string | null) {
  return useQuery({
    queryKey: ["mongopeople"],
    queryFn: async () => {
      const res = await fetch(API);
      if (!res.ok) throw new Error("Помилка при завантаженні");
      return res.json() as Promise<MongoPerson[]>;
    },

    select: (data) =>
      ownerName
        ? data.filter((person) => person.ownerName === ownerName)
        : data,
  });
}
