"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LangSwitchBttn() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const saved = sessionStorage.getItem("scrollPos");
    console.log("mount, saved scrollPos:", saved, "scrollY:", window.scrollY);
    if (saved) {
      window.scrollTo({ top: parseInt(saved), behavior: "instant" });
      sessionStorage.removeItem("scrollPos");
    }
  }, [pathname]);

  const switchLocale = (locale: string) => {
    console.log("saving scrollY:", window.scrollY);
    sessionStorage.setItem("scrollPos", String(window.scrollY));
    const newPath = pathname.replace(/^\/(en|ua|de)/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div>
      <select
        defaultValue={pathname.split("/")[1]}
        onChange={(e) => switchLocale(e.target.value)}
        className="langSwitcher"
      >
        <option value="en">EN</option>
        <option value="ua">UA</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
}