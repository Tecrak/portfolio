"use client";
import { SKILLS_LIST, skillStage, skillLVL } from "@/app/config/skills";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function SkillsContent() {
  const t = useTranslations("SkillsList");
  const [fixedLi, setFixedLi] = useState<string | null>(null);

  return (
    <div className="skills_main">
      <div className="forHBlock">
        <h2>{t("title")}</h2>
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
                    {t("statusBalls.lvl." + lvl.text)}
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
                    {t("statusBalls.stage." + stage.text)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="skills_table">
        <ul>
          {SKILLS_LIST.map((skill) => (
            <li
              key={skill.skillName}
              onClick={() =>
                setFixedLi(fixedLi === skill.skillName ? null : skill.skillName)
              }
              className={fixedLi === skill.skillName ? "fixed" : ""}
            >
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
