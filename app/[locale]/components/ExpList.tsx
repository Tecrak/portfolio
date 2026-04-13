import { EXP_LIST } from "@/app/config/exp";
import { useTranslations } from "next-intl";

export default function ExpList() {
  const t = useTranslations("WorkEXP");
  return (
    <>
      {EXP_LIST.map((list) => (
        <div className="exp_content">
          <div className="exp_header">
            <div className="exp_title_date">
              <div className="exp_title">
                <p>{t("position")}</p>
              </div>
              <div className="exp_date">{t("date")}</div>
            </div>
            <div className="exp_place">
              <p>{t("place")}</p>
            </div>
          </div>
          <div className="exp_main">
            <div className="exp_about">
              <p>{t("about")}</p>
            </div>
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
