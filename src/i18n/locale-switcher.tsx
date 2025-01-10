"use client";

import { useLocale, useTranslations } from "next-intl";
import {} from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { routing } from "./routing";

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locales = routing.locales;
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={locales.map((loc) => ({
        value: loc,
        label: t(loc),
      }))}
      label={"Language"}
    />
  );
}
