import middleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";

export default middleware(routing);

export const config = {
  matcher: [
    // Всі шляхи крім api, _next, файлів
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
