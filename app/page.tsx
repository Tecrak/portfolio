"use client";
import { useState, useEffect } from "react";
import "./page.css";

export const dynamic = "force-dynamic";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const wasOpened = sessionStorage.getItem("modalShown");
    if (!wasOpened) {
      setModalOpen(true);
    }
  }, []);

  const handleClose = () => {
    setModalOpen(false);
    sessionStorage.setItem("modalShown", "true");
  };

  return (
    <div className="main">
      <div className="main_content">
        <h1>About me</h1>
        <div className=""></div>
      </div>
      <div
        className="welcomeWindow"
        style={
          modalOpen ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }
        }
      >
        <div className="welcomeBackScrn">
          <h2>Small Disclaimer</h2>
          <p>
            Im not proffesion UI-UX Designer, I've tried to make this website
            looking not bad at all, but mainly I was focused to demonstrate my
            skills and what I learned and going to learn
          </p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
