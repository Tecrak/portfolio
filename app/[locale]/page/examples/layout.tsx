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
  const [currentPath, setCurrentPath] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  return (
    <div className="mainBox">
      <div className="sideBar">
        <h4>Навчики</h4>
        {EXAMPLELINKS.map((link) => (
          <ul>
            <Link
              key={link.label}
              href={`/${locale}${link.path === "/" ? "" : link.path}`}
              className={
                pathname == "/" + locale + link.path ? "expActivePath" : ""
              }
              onClick={() => {
                setCurrentPath(link.label);
                setCurrentPage(link.path);
              }}>
              <li key={link.label} className="linkItem">
                <div className="sideBarText">
                  <p>{link.label}</p>
                </div>
                <div className="sideBarLed" style={{ background: link.led }}>
                  <span></span>
                </div>
              </li>
            </Link>
          </ul>
        ))}
      </div>
      <div className="mainArea">
        <div className="pathText">
          <h4>
            Skills / {""}
            <span className="pathTextPage">
              {pathname == "/" + locale + currentPage ? currentPath : ""}
            </span>
          </h4>
        </div>
        <div className="exmplDesc">
          <p></p>
        </div>
        <div className="testAreaBlock">
          <p>TEST AREA</p>
          <div className="testArea">{children}</div>
        </div>
      </div>
    </div>
  );
}
