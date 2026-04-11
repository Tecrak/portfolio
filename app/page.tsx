"use client";
import { useState, useEffect } from "react";
import "./page.css";
import { CONTACT_INFO } from "./config/contactInfo";
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
        <div className="aboutInfoContainer">
          <div className="aboutImage">
            <img src="https://imgs.search.brave.com/Ev4_obH611_BnAFAAjqlcnMldOvlwQtOibG5JJCaDMY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL2Nj/OHlOR2tjZDQ2N2lm/OUoxTDdpcFVNQThH/bGtFcDhRY3ljZ21N/MC1vaTlOdVg3dmM4/VWVVNW1jNFZIdS1K/NTlKdmwtQTN2TTY4/UjFNQVNiVFZyTTh0/X3NjQmRwN29VcEFj/Q2hSdzQ5MDJFYV9j/M1g9dzE0NDAtaDgx/MC1uLW51"></img>
          </div>
          <div className="shortInfoAbout">
            <div className="detailedInfo">
              <div className="aboutMe">
                <h4>Shortly about me</h4>
                <p>
                  Einstieg als Junior-Webentwickler (Frontend / Full-Stack) in
                  einem Unternehmen, in dem ich meine Kenntnisse in JavaScript,
                  React, HTML und CSS einsetzen und meine Fähigkeiten in der
                  modernen Webentwicklung weiterentwickeln kann.
                </p>
              </div>
              <div className="languageSkills">
                <h4>Languages</h4>
                <p>
                  Ukrainisch | Muttersprache
                  <br></br>
                  Englisch | Fortgeschritten. Ich hatte Kurse am College, die
                  dazu beitrugen, mein Sprachniveau zu verbessern
                  <br></br>
                  Deutch | Grundkenntnisse. Derzeit studiere ich die Sprache und
                  besuche aktiv Deutschkurse.
                </p>
              </div>
            </div>
            <div className="contactInfo">
              <ul className="contactsList">
                {CONTACT_INFO.map((contact, index) =>
                  contact.isLink ? (
                    <a
                      href={`https://${contact.label}`}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li key={index} className="contactItem">
                        <div className="contactIcon">
                          <img src={contact.icon} alt={contact.label} />
                        </div>
                        <span>{contact.label}</span>
                      </li>
                    </a>
                  ) : (
                    <li key={index} className="contactItem">
                      <div className="contactIcon">
                        <img src={contact.icon} alt={contact.label} />
                      </div>
                      <span>{contact.label}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
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
