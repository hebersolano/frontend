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

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function ProductFilter() {
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
          <ListFilter className="h-4" /> <SelectValue placeholder="Tostado" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tostado</SelectLabel>
          <SelectSeparator />
          <SelectItem value="Oscuro">Oscuro</SelectItem>
          <SelectItem value="Mediano">Mediano</SelectItem>
          <SelectItem value="Claro">Claro</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
