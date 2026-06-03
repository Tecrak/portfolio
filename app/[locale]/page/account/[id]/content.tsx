"use client";

import { useSession } from "next-auth/react";

export default function AccountClient({ person }: { person: string }) {
  const { data: session } = useSession();
  const isOwner = session?.user?.name === person;

  return (
    <div>
      {isOwner ? (
        <div>Hi Owner {session.user?.name}</div>
      ) : (
        <div>Hi visitor of {person}</div>
      )}
    </div>
  );
}
