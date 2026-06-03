"use client";

import { useSession } from "next-auth/react";
import { useMongopeople } from "../../examples/mongodb/api/useMPeople";
import MongoDBPage from "../../examples/mongodb/page";

export default function AccountClient({ owner }: { owner: string }) {
  const { data: session } = useSession();
  const isOwner = session?.user?.name === owner;

  return (
    <div>
      {isOwner ? (
        <h2>Вітаємо, Власник {session?.user?.name}</h2>
      ) : (
        <h2>Ви переглядаєте пости користувача {owner}</h2>
      )}
      <p>Усі пости {owner}</p>
      <MongoDBPage isAccountPage={true} owner={owner} />
    </div>
  );
}
