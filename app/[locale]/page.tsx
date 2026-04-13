import "./styles/page.css";
import ContactsList from "./components/contactsList";
import SkillsContent from "./components/skillsContent";
import AboutMe from "./components/aboutMe";
import WelcomeWindow from "./components/welcomeWindow";
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="main">
      <section className="main_content">
        <div className="aboutInfoContainer">
          <div className="aboutImage">
            <img src="https://imgs.search.brave.com/Ev4_obH611_BnAFAAjqlcnMldOvlwQtOibG5JJCaDMY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL2Nj/OHlOR2tjZDQ2N2lm/OUoxTDdpcFVNQThH/bGtFcDhRY3ljZ21N/MC1vaTlOdVg3dmM4/VWVVNW1jNFZIdS1K/NTlKdmwtQTN2TTY4/UjFNQVNiVFZyTTh0/X3NjQmRwN29VcEFj/Q2hSdzQ5MDJFYV9j/M1g9dzE0NDAtaDgx/MC1uLW51"></img>
          </div>
          <div className="shortInfoAbout">
            <AboutMe />
            <div className="contactInfo">
              <ContactsList />
            </div>
          </div>
        </div>
      </section>
      <section className="skills_content">
        <h2>My skills</h2>
        <SkillsContent />
      </section>
      <section className="experience_content"></section>
      <section className="end_content"></section>
      <WelcomeWindow />
    </div>
  );
}
