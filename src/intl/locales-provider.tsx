"use client";
import { I18nProviderClient } from "@/intl/client";

function LocalesProvider({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return <I18nProviderClient locale={locale}>{children};</I18nProviderClient>;
}

export default LocalesProvider;
