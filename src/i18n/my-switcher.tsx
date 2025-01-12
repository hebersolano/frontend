"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { routing, usePathname, useRouter } from "./routing";

function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locales = routing.locales;
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const onChange = function (value: string) {
    router.replace(pathname, { locale: value });
  };

  return (
    <Select onValueChange={onChange} defaultValue={locale}>
      <SelectTrigger className="gap-1 border-none shadow-none">
        <SelectValue placeholder="ES" className="" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          {locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {t(loc + ".label")}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LocaleSwitcher;
