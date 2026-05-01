import "./styles/page.css";
import ContactsList from "./components/contactsList";
import SkillsContent from "./components/skillsContent";
import AboutMe from "./components/aboutMe";
import ExpList from "./components/ExpList";
import WelcomeWindow from "./components/welcomeWindow";
export const dynamic = "force-dynamic";
import { useTranslations } from "next-intl";
import Education from "./components/education";

export default function Page() {
  const t = useTranslations("SkillsList");
  const tEXP = useTranslations("WorkEXP");
  const tED = useTranslations("Education");
  return (
    <div className="main">
      <WelcomeWindow />
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
        <h2>{t("title")}</h2>
        <SkillsContent />
      </section>
      <section className="experience_content">
        <h2>{tEXP("title")}</h2>
        <ExpList />
      </section>
      <section className="education">
        <h2>{tED("title")}</h2>
        <Education />
      </section>
    </div>
  );
}
