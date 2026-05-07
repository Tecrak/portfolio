"use client";
import "./styles/layout.css";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EXAMPLELINKS } from "./config/exampleLinks";
import { useState } from "react";

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

  return (
    <div className="mainBox">
      {/* --- Side Bar --- */}
      <div className="sideBar">
        <h4>Навчики</h4>
        <ul>
          {EXAMPLELINKS.map((link) => (
            <Link
              key={link.label}
              href={`/${locale}${link.path === "/" ? "" : link.path}`}
              className={
                pathname == `/${locale}${link.path}` ? "skillsActivePath" : ""
              }>
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
            Skills / {""}
            <span className="pathTextPage">
              {!isRootPage && currentLink?.label}
            </span>
          </h4>
        </div>

        <div className="mainAreaContent">
          <div className="exmplDesc">
            {isRootPage ? <p>Оберіть навичку</p> : <p>{currentLink?.desc}</p>}
          </div>
          {!isRootPage ? (
            <div className="testAreaBlock">
              <p>TEST AREA</p>
              <div className="testArea">{children}</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {/* --- END Test Area --- */}
    </div>
  );
}
