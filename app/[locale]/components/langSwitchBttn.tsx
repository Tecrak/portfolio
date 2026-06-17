"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./styles/langSwtichBttn.css";
import { useLocale } from "next-intl";
import { routing } from "@/app/i18n/routing";

export default function LangSwitchBttn() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const otherLocales = routing.locales.filter((lang) => lang !== locale);

  useEffect(() => {
    const saved = sessionStorage.getItem("scrollPos");
    if (saved) {
      window.scrollTo({ top: parseInt(saved), behavior: "instant" });
      sessionStorage.removeItem("scrollPos");
    }
  }, [pathname]);

  const switchLocale = (locale: string) => {
    sessionStorage.setItem("scrollPos", String(window.scrollY));
    const newPath = pathname.replace(/^\/(gb|ua|de)/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="langSwitchBox">
      <span
        className={`fi fi-${locale}`}
        onClick={() => setIsLangOpen(!isLangOpen)}></span>
      <ul
        className="langSwitcher"
        style={!isLangOpen ? { display: "none" } : { display: "block" }}>
        {otherLocales.map((lang) => (
          <li key={lang} onClick={() => switchLocale(lang)}>
            <span className={`fi fi-${lang}`}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
