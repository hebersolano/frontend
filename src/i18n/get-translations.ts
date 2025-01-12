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

export async function getMessages(locale: string) {
  const messageModule = await import(`../../messages/${locale}.json`);

  return messageModule.default;
}

export const getTranslations = async (
  namespace: string,
  localeParam?: string,
) => {
  const locale = getCachedLocale() || localeParam || routing.defaultLocale;
  const messages = await getMessages(locale);

  const translator = createTranslator({
    locale,
    messages,
    namespace,
  });

  return translator;
};
