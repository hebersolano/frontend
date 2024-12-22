"use client";

import { useTheme } from "next-themes";
import { MouseEventHandler, useEffect, useRef } from "react";

function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const divRef = useRef<HTMLDivElement | null>(null);
  const btnsRef = useRef<HTMLButtonElement[] | null>(null);

  useEffect(
    function () {
      if (!divRef.current) return;
      btnsRef.current = Array.from(
        divRef.current.children,
      ) as HTMLButtonElement[];

      const themeBtns = Array.from(
        divRef.current.querySelectorAll<HTMLButtonElement>(".theme-selector"),
      );

      for (const btn of themeBtns) {
        if (btn.value === theme) btn.dataset.state = "checked";
        else btn.dataset.state = "";
      }
    },
    [theme],
  );

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as Element;
    const button = target.closest("button");
    if (!button) return;
    if (button.value === "dark") return setTheme("dark");
    if (button.value === "light") return setTheme("light");
  };

  return (
    <div ref={divRef} className="grid max-w-md grid-cols-2 gap-8 pt-2">
      {/* light theme */}
      <div className="">
        <button
          onClick={handleClick}
          value="light"
          className="theme-selector w-full items-center rounded-md border-2 border-muted p-1 hover:border-accent data-[state=checked]:border-primary"
        >
          <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
            <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
              <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
            </div>
          </div>
        </button>
        <span className="block w-full p-2 text-center font-normal">Light</span>
      </div>

      {/* dark theme */}
      <div className="">
        <button
          value="dark"
          onClick={handleClick}
          className="theme-selector w-full items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground data-[state=checked]:border-primary"
        >
          <div className="space-y-2 rounded-sm bg-slate-950 p-2">
            <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
              <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
              <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-slate-400" />
              <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
              <div className="h-4 w-4 rounded-full bg-slate-400" />
              <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
            </div>
          </div>
        </button>
        <span className="block w-full p-2 text-center font-normal">Dark</span>
      </div>
    </div>
  );
}

export default ThemeSelector;
