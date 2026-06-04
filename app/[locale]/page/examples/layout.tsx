"use client";
import "./styles/layout.css";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EXAMPLELINKS } from "./config/exampleLinks";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const currentLink = EXAMPLELINKS.find(
    (link) => pathname === `/${locale}${link.path}`,
  );
  const isRootPage = pathname === `/${locale}/page/examples`;
  const t = useTranslations("Examples");
  return (
    <div className="mainBox">
      {/* --- Side Bar --- */}
      <div className="sideBar">
        <h4>{t("label")}</h4>
        <ul>
          {EXAMPLELINKS.map((link) => (
            <Link
              key={link.label}
              href={`/${locale}${link.path === "/" ? "" : link.path}`}
              className={
                pathname === `/${locale}${link.path}` ? "skillsActivePath" : ""
              }
              style={link.disabled ? { pointerEvents: "none" } : undefined}>
              <li className="linkItem">
                <div className="sideBarText">
                  <p>{link.label}</p>
                </div>
                <div className="sideBarLed" style={{ background: link.led }}>
                  <span></span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* --- END Side Bar --- */}

      {/* --- Test Area --- */}
      <div className="mainArea">
        <div className="pathText">
          <h4>
            {t("label")} / {""}
            <span className="pathTextPage">
              {!isRootPage && currentLink?.label}
            </span>
          </h4>
        </div>

        <div className="mainAreaContent">
          <div className="exmplDesc">
            {isRootPage ? (
              <p>{t("chooseSkill")}</p>
            ) : (
              <p>{t(`skills.${currentLink?.forDB}.description`)}</p>
            )}
          </div>
          {!isRootPage ? (
            <div className="testAreaBlock">
              <p>TEST AREA</p>
              <div className="testArea">{children}</div>
            </div>
          ) : null}
        </div>
      </div>
      {/* --- END Test Area --- */}
    </div>
  );
}
