import styles from "./layout.module.css";
import { ActivePathName } from "./activePathName";
import Providers from "./api/providers";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={styles.Main}>
        <Providers>
          <div className={styles.Navigation}>
            <ActivePathName />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
