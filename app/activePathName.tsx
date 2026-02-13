"use client";
import Link from "next/link";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";

export function ActivePathName() {
  const pathname = usePathname();

  return (
    <nav className={styles.navigationItems}>
      <Link
        className={`${pathname === "/about" ? styles.activePath : ""}`}
        href="/about"
      >
        About
      </Link>
      <Link href="/" className={`${pathname === "/" ? styles.activePath : ""}`}>
        Home
      </Link>
    </nav>
  );
}
