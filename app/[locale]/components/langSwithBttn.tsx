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
      >
        <option value="en" onClick={() => switchLocale("en")}>
          🇬🇧
        </option>
        <option value="ua" onClick={() => switchLocale("ua")}>
          &#x1F1FA;&#x1F1E6;
        </option>
        <option value="de" onClick={() => switchLocale("de")}>
          &#x1F1E9;&#x1F1EA;
        </option>
      </select>
    </div>
  );
}
