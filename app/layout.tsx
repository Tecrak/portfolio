import "./styles/layout.css";
import { ActivePathName } from "./components/activePathName";
import Providers from "./api/providers";
import "./styles/globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="Main">
        <Providers>
          <div className="Navigation">
            <ActivePathName />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
