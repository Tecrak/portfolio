"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <Image
          src={session.user?.image ?? ""}
          width={32}
          height={32}
          style={{ borderRadius: "50%" }}
          alt="avatar"
        />
        <span>{session.user?.name}</span>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <button onClick={() => signIn("google")}>Sign in with Google</button>;
}
