"use client";
import { useState, useEffect } from "react";

export default function WelcomeWindow() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const wasOpened = sessionStorage.getItem("modalShown");
    if (!wasOpened) {
      setModalOpen(true);
    }
  }, []);

  return (
    <div
      className="welcomeWindow"
      style={modalOpen ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
    >
      <div className="welcomeBackScrn">
        <h2>Small Disclaimer</h2>
        <p>
          Im not proffesion UI-UX Designer, I've tried to make this website
          looking not bad at all and yes i know it looks like Excel table in
          some cases(most) XD. But mainly I was focused to demonstrate my skills
          and what I learned and going to learn
        </p>
        <button
          onClick={() => {
            setModalOpen(false);
            sessionStorage.setItem("modalShown", "true");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
