"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import "./styles/LogInBttn.css";
import { useState } from "react";

export default function AuthButton() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (session) {
    return (
      <div
        className="loggedInBlock"
        style={isMenuOpen ? { background: "var(--nav-bttn-hover)" } : {}}>
        <div
          className="loggedInUser"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            console.log(isMenuOpen);
          }}
          style={{ userSelect: "none" }}>
          <Image
            src={session.user?.image ?? ""}
            width={32}
            height={32}
            style={{ borderRadius: "50%" }}
            alt="avatar"
          />
          <span>{session.user?.name}</span>
        </div>
        <ul className="loggInMenu">
          <li style={isMenuOpen ? { display: "block" } : { display: "none" }}>
            <button
              className="badBoy"
              onClick={() => {
                signOut();
              }}>
              Sign out
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <button
      className="logInBttn"
      onClick={() => signIn("google", undefined, { prompt: "select_account" })}>
      <img
        alt="noLogin"
        src="https://img.icons8.com/?size=100&id=118880&format=png&color=000000"
        width={32}
        height={32}
      />
    </button>
  );
}
