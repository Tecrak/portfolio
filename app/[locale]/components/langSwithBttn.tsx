"use client";
import { useRouter, usePathname } from "next/navigation";

export default function LangSwithBttn() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (locale: string) => {
    // Замінюємо поточну локаль у URL
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
        <option value="en" onClick={() => switchLocale("en")}>
          EN
        </option>
        <option value="ua" onClick={() => switchLocale("ua")}>
          UA
        </option>
        <option value="de" onClick={() => switchLocale("de")}>
          DE
        </option>
      </select>
    </div>
  );
}
