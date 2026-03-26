"use client";
import Link from "next/link";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "./config/navigation";

export function ActivePathName() {
  const pathname = usePathname();

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
    </nav>
  );
}
