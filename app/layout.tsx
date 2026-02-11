import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.Main}>
        <div className={styles.Navigation}>
          <nav className={styles.navigationItems}>
            <Link href="/about">About</Link>
            <Link href="./">Home</Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
