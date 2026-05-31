// app/[locale]/components/authButton.tsx
"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <img
          src={session.user?.image ?? ""}
          width={32}
          style={{ borderRadius: "50%" }}
        />
        <span>{session.user?.name}</span>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <button onClick={() => signIn("google")}>Sign in with Google</button>;
}
