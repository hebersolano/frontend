"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListFilter } from "lucide-react";
import { useTranslations } from "next-intl";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function ProductFilter() {
  const t = useTranslations("shop.productFilter");
  const [position, setPosition] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function addSearchParam(name: string, value: string) {
    const params = new URLSearchParams(searchParams);
    if (!value) {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    replace(pathname + "?" + params.toString());
  }

  function onValueChange(value: string) {
    setPosition(value);
    addSearchParam("roast", value);
  }

  return (
    <Select onValueChange={onValueChange} value={position}>
      <SelectTrigger className="w-[130px]">
        <div className="flex items-center gap-1">
          <ListFilter className="h-4" />
          <SelectValue placeholder={t("label")} />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("label")}</SelectLabel>
          <SelectSeparator />
          <SelectItem value="Oscuro">{t("dark")}</SelectItem>
          <SelectItem value="Mediano">{t("medium")}</SelectItem>
          <SelectItem value="Claro">{t("light")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
