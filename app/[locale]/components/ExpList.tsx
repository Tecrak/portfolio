"use client";
import { EXP_LIST } from "@/app/config/exp";
import { useTranslations } from "next-intl";
import "./styles/ExpList.css";
import BlockToClose from "./closingButton";

export default function ExpList() {
  const t = useTranslations("WorkEXP");

  return (
    <>
      <BlockToClose id="expToClose">
        <div className="exp_timeline">
          {EXP_LIST.map((list) => (
            <div key={list.id} className="exp_timeline_item">
              <div className="exp_timeline_line" />
              <div className="exp_timeline_content">
                <div className="exp_header">
                  <div className="exp_title_date">
                    <h3>{t(`${list.id}.title`)}</h3>
                    <span className="exp_date">{t(`${list.id}.date`)}</span>
                  </div>
                  <p className="exp_place">{t(`${list.id}.place`)}</p>
                </div>
                <div className="exp_main">
                  <p className="exp_about">{t(`${list.id}.description`)}</p>
                  <p className="exp_skills_label">{t("h2")}</p>
                  <ul className="exp_list">
                    {list.earnedExp.map((exp) => (
                      <li key={exp}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BlockToClose>
    </>
  );
}
