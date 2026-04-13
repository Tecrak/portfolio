import { SKILLS_LIST, skillStage, skillLVL } from "@/app/config/skills";

export default function SkillsContent() {
  return (
    <div className="skills_main">
      <div className="skills_lvl_stage">
        <div className="skills_lvl ">
          <div className="skills_lvl_title">
            <h3>Skills LVL</h3>
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
            <h3>Skills Stage</h3>
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
            <li>
              <p>{skill.skillName}</p>
              <div className="ballsContainer">
                <p>L</p>
                <span
                  className="skillStatusBall"
                  style={{ background: skill.lvl.color }}
                ></span>
                <p>S</p>
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
