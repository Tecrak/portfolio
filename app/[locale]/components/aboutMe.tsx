import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("AboutMe");
  return (
    <div className="detailedInfo">
      <div className="aboutMe">
        <h4>{t("aboutTitle")}</h4>
        <p>{t("aboutText")}</p>
      </div>
      <div className="languageSkills">
        <h4>{t("languagesMy")}</h4>
        <p>{t("languageLevel")}</p>
      </div>
    </div>
  );
}
