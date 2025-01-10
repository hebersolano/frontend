import { getRequestConfig } from "next-intl/server";
import { cache as e } from "react";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  console.log("i18n params", e().locale);

  const locale = "es";

  return {
    locale,

    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
