import styles from "./layout.module.css";
import { ActivePathName } from "./activePathName";
import Providers from "./api/providers";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <Providers>
        <body className={styles.Main}>
          <div className={styles.Navigation}>
            <ActivePathName />
          </div>
          {children}
        </body>
      </Providers>
    </html>
  );
}
