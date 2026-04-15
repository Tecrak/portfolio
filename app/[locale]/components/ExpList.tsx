import { EXP_LIST } from "@/app/config/exp";
import { useTranslations } from "next-intl";

export default function ExpList() {
  const t = useTranslations("WorkEXP");

  return (
    <>
      {EXP_LIST.map((list) => (
        <div key={list.id} className="exp_content">
          <div className="exp_header">
            <div className="exp_title_date">
              <div className="exp_title">
                <h3>{t(`${list.id}.title`)}</h3>
              </div>
              <div className="exp_date">{t(`${list.id}.date`)}</div>
            </div>
            <div className="exp_place">
              <p>{t(`${list.id}.place`)}</p>
            </div>
          </div>
          <div className="exp_main">
            <div className="exp_about">
              <p>{t(`${list.id}.description`)}</p>
            </div>
            <h2>I've learned or improved those skills:</h2>
            <div className="exp_list">
              <ul>
                {list.earnedExp.map((exp) => (
                  <li key={exp}>{exp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
