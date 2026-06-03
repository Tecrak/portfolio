"use client";

import { useSession } from "next-auth/react";
import { useMongopeople } from "../../examples/mongodb/api/useMPeople";

export default function AccountClient({ owner }: { owner: string }) {
  const { data: session } = useSession();
  const isOwner = session?.user?.name === owner;

  const { data: ownerPosts = [], isLoading } = useMongopeople(owner);

  if (isLoading) return <div>Завантаження...</div>;

  return (
    <div>
      {isOwner ? (
        <h2>Вітаємо, Власник {session?.user?.name}</h2>
      ) : (
        <h2>Ви переглядаєте пости користувача {owner}</h2>
      )}

      <h3>Усі пости {owner}:</h3>
      <ul>
        {ownerPosts.length > 0 ? (
          ownerPosts.map((mPost) => (
            <li key={mPost._id} style={{ listStyle: "none" }}>
              <img src={mPost.imgSrc} alt="Post content" />
            </li>
          ))
        ) : (
          <p>Постів поки немає.</p>
        )}
      </ul>
    </div>
  );
}
