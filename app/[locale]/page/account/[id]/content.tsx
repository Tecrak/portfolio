"use client";

import { useSession } from "next-auth/react";

export default function AccountClient({ person }: { person: any }) {
  const { data: session } = useSession();

  const isOwner = session?.user?.name === person;
  console.log(person);
  return (
    <div>
      {isOwner ? (
        <p>Hi owner {session?.user?.name}</p>
      ) : (
        <p>Hi visitor — profile of {person}</p>
      )}
    </div>
  );
}
