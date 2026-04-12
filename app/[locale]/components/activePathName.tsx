"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/layout.css";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "../../config/navigation";
import { useTranslations } from "next-intl";
import ThemeSwitchBttn from "./themeSwitchBttn";
import LangSwithBttn from "./langSwithBttn";

export function ActivePathName() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Navigation");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="navigationItems">
      {NAVIGATION.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={pathname === link.path ? "activePath" : ""}
        >
          {t(link.label)}
        </Link>
      ))}
      <div className="switchers">
        <ThemeSwitchBttn />
        <LangSwithBttn />
      </div>
    </nav>
  );
}
