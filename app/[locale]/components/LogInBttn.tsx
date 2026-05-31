"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import "./styles/LogInBttn.css";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="loggedInBlock">
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

  return (
    <button className="logInBttn" onClick={() => signIn("google")}>
      <img
        alt="noLogin"
        src="https://img.icons8.com/?size=100&id=118880&format=png&color=000000"
        width={32}
        height={32}
      />
    </button>
  );
}
