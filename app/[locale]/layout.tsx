import "./styles/layout.css";
import { ActivePathName } from "./components/activePathName";
import Providers from "../api/providers";
import "./styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../i18n/routing";
import { notFound } from "next/navigation";
import PageTransition from "./components/pageLoad";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="Main">
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="Navigation">
              <ActivePathName />
            </div>
            <main className="pageWrapper">
              <PageTransition>{children}</PageTransition>
            </main>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
