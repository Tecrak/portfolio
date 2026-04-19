"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/layout.css";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "../../config/navigation";
import { useTranslations, useLocale } from "next-intl";
import ThemeSwitchBttn from "./themeSwitchBttn";
import LangSwitchBttn from "./langSwitchBttn";

function stripLocale(pathname: string) {
  return pathname.replace(/^\/(en|ua|de)/, "") || "/";
}

export function ActivePathName() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Navigation");
  const locale = useLocale();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentPath = stripLocale(pathname);

  return (
    <nav className="navigationItems">
      {NAVIGATION.map((link) => (
        <Link
          key={link.path}
          href={`/${locale}${link.path === "/" ? "" : link.path}`}
          className={currentPath === link.path ? "activePath" : ""}
        >
          {t(link.label)}
        </Link>
      ))}
      <div className="switchers">
        <ThemeSwitchBttn />
        <LangSwitchBttn />
      </div>
    </nav>
  );
}
