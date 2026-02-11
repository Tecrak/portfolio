import "./globals.css";
import styles from "./layout.module.css";
import { ActivePathName } from "./activePathName";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.Main}>
        <div className={styles.Navigation}>
          <ActivePathName />
        </div>
        {children}
      </body>
    </html>
  );
}
