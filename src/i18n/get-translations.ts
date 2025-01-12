import { createTranslator } from "next-intl";
import { cache } from "react";
import { routing } from "./routing";

function getCacheImpl() {
  const value: { locale?: string } = { locale: undefined };
  return value;
}

const getCache = cache(getCacheImpl);

export function getCachedLocale() {
  return getCache().locale;
}

export function setCachedLocale(locale: string) {
  getCache().locale = locale;
}

export const getTranslations = async (
  namespace: string,
  localeParam?: string,
) => {
  const locale = getCachedLocale() || localeParam || routing.defaultLocale;
  console.log("get trans locale", locale);
  const messagesModule = await import(`../../messages/${locale}.json`);

  const translator = createTranslator({
    locale,
    messages: messagesModule.default,
    namespace,
  });

  return translator;
};
