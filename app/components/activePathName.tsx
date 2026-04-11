"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import "../styles/layout.css";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "../config/navigation";

export function ActivePathName() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
          {link.label}
        </Link>
      ))}
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <span className="slider round"></span>
      </label>
    </nav>
  );
}
