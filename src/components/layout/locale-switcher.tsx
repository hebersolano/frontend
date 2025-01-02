"use client";

import { useCurrentLocale, useScopedI18n } from "@/intl/client";
import { usePathname, useRouter } from "next/navigation";

// import { useLocale, useTranslations } from 'next-intl';
// import { usePathname, useRouter } from 'next-intl/client';

export default function LocaleSwitcher() {
  // const t = useTranslations("LocaleSwitcher");
  const locale = useCurrentLocale();
  const router = useRouter();
  const pathname = usePathname();
  // const t = useScopedI18n("localeSwitcher");

  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select defaultValue={locale} onCange={onLocaleChange}>
      {["en", "es"].map((lang) => (
        <option key={lang} value={lang}>
          {/* {t("locale", { locale: lang })} */}
        </option>
      ))}
    </select>
  );
}
