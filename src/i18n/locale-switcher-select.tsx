"use client";

import { Flag } from "lucide-react";
import { useState } from "react";
import { useRouter } from "./routing";
import { setCookie } from "@/lib/cookie";

type Props = {
  defaultValue: string;
  items: { label: string; value: string }[];
  label: string;
};
export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function onChange(value: string) {
    setCookie("NEXT_LOCALE", value, 1);
    router.replace("/", { locale: value });
    setIsOpen(false);
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative inline-block text-left">
      <button
        aria-label={label}
        className="rounded-sm p-2 transition-colors hover:bg-slate-200"
        onClick={toggleDropdown}
      >
        <Flag className="h-6 w-6 text-slate-600" />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <button
                key={item.value}
                onClick={() => onChange(item.value)}
                className={`flex w-full items-center px-4 py-2 text-left text-sm ${
                  item.value === defaultValue
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700"
                }`}
              >
                {item.value === defaultValue && (
                  <Flag className="h-6 w-6 text-slate-600" />
                )}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
