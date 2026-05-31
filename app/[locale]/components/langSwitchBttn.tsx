"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import "./styles/langSwtichBttn.css";
import { useLocale } from "next-intl";
import { routing } from "@/app/i18n/routing";

export default function LangSwitchBttn() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
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
    const newPath = pathname.replace(/^\/(en|ua|de)/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div>
      {/* <select
        defaultValue={pathname.split("/")[1]}
        onChange={(e) => switchLocale(e.target.value)}
        className="langSwitcher">
        <option value="en">EN</option>
        <option value="ua" className="fi fi-ua"></option>
        <option value="de">DE</option>
      </select> */}
      <ul className="langSwitcher">
        <span className={`fi fi-${locale}`}></span>
        {otherLocales.map((lang) => (
          <li key={lang}>
            <span className={`fi fi-${lang}`}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
