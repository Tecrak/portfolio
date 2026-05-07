"use client";
import { useLocale } from "next-intl";
import { EXAMPLELINKS } from "../config/exampleLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ExpSideBar() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="sideBar">
      <h4>Навчики</h4>
      {EXAMPLELINKS.map((link) => (
        <ul>
          <Link
            key={link.label}
            href={`/${locale}${link.path === "/" ? "" : link.path}`}
            className={
              pathname == "/" + locale + link.path ? "expActivePath" : ""
            }>
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
  );
}
