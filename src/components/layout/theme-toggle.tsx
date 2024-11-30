"use client";

import { LoaderCircle, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoaderCircle className="h-4 w-4 animate-spin" />;
  }

  function handleTheme() {
    if (theme === "light") return setTheme("dark");
    if (theme === "dark") return setTheme("light");
  }

  return (
    <div onClick={handleTheme} className="flex w-full gap-2">
      {theme === "light" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}{" "}
      Tema
    </div>
  );
};

export default ThemeToggle;
