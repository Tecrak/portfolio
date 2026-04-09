"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "./config/navigation";

export function ActivePathName() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className={styles.navigationItems}>
      {NAVIGATION.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={pathname === link.path ? styles.activePath : ""}
        >
          {link.label}
        </Link>
      ))}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-white text-black dark:bg-gray-900 dark:text-white"
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}
