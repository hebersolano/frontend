"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "h-8 w-8 px-0",
        )}
      >
        <SunIcon className="h-4 w-4" />
      </button>
    );
  }

  function handleTheme() {
    if (theme === "light") return setTheme("dark");
    if (theme === "dark") return setTheme("light");
  }

  return (
    <button
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "h-8 w-8 px-0",
      )}
      onClick={handleTheme}
    >
      {theme === "light" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
