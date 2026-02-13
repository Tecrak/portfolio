import "./globals.css";
import styles from "./layout.module.css";
import { ActivePathName } from "./activePathName";
import SideBar from "./sideBar";

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
        <SideBar />
        {children}
      </body>
    </html>
  );
}
