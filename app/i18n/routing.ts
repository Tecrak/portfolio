import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "gb", "ua"],
  defaultLocale: "gb",
});
