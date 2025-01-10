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
    console.log(pathname, value);
    console.log(value);
    router.replace("/", { locale: value });
  };

  console.log(locale);

  return (
    <Select onValueChange={onChange}>
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
