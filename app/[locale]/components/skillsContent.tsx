import { SKILLS_LIST, skillStage, skillLVL } from "@/app/config/skills";
import { useTranslations } from "next-intl";

export default function SkillsContent() {
  const t = useTranslations("SkillsList");
  return (
    <div className="skills_main">
      <div className="skills_lvl_stage">
        <div className="skills_lvl ">
          <div className="skills_lvl_title">
            <h3>{t("lvlTitle")}</h3>
          </div>
          <div className="skills_lvl_list skills_shareStyles">
            <ul>
              {Object.values(skillLVL).map((lvl) => (
                <li key={lvl.text}>
                  <span
                    className="statusBall"
                    style={{ background: lvl.color }}
                  ></span>
                  {lvl.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="skills_stage ">
          <div className="skills_stage_title">
            <h3>{t("stageTitle")}</h3>
          </div>
          <div className="skills_stage_list skills_shareStyles">
            <ul>
              {Object.values(skillStage).map((stage) => (
                <li key={stage.text}>
                  <span
                    className="statusBall"
                    style={{ background: stage.color }}
                  ></span>
                  {stage.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="skills_table">
        <ul>
          {SKILLS_LIST.map((skill) => (
            <li key={skill.skillName}>
              <p>{skill.skillName}</p>
              <div className="ballsContainer">
                <p>{t("ballsText.lvl")}</p>
                <span
                  className="skillStatusBall"
                  style={{ background: skill.lvl.color }}
                ></span>
                <p>{t("ballsText.stage")}</p>
                <span
                  className="skillStatusBall"
                  style={{ background: skill.stage.color }}
                ></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
