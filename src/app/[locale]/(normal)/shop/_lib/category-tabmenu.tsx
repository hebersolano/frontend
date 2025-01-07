"use client";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, type MouseEventHandler } from "react";

function CategoryTabMenu() {
  const t = useTranslations("shop.categoryMenu");
  const divRef = useRef<HTMLDivElement | null>(null);
  const btnsRef = useRef<HTMLButtonElement[] | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("cat");

  const addSearchParam = useCallback(
    function (name: string, value: string) {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      router.push(pathname + "?" + params.toString());
    },
    [pathname, router, searchParams],
  );

  useEffect(
    function () {
      btnsRef.current = Array.from(
        divRef.current!.children,
      ) as HTMLButtonElement[];

      if (!category) {
        addSearchParam("cat", "all");
      } else {
        for (const btn of btnsRef.current) {
          btn.dataset.state = "";
          if (btn.value === category) btn.dataset.state = "active";
        }
      }
    },
    [category, addSearchParam],
  );

  const handleClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = (
    e,
  ) => {
    const target = e.target as HTMLButtonElement;
    if (
      !btnsRef.current ||
      target.nodeName !== "BUTTON" ||
      target.dataset.state === "active"
    )
      return;

    for (const btn of btnsRef.current) {
      btn.dataset.state = "";
    }
    target.dataset.state = "active";

    // update search param
    addSearchParam("cat", target.value);
  };

  return (
    <div
      ref={divRef}
      id="category-tab"
      onClick={handleClick}
      className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground"
    >
      <button
        value="all"
        data-state="active"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
      >
        {t("all")}
      </button>
      <button
        value="cafe-molido"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
      >
        {t("groundRoastedCoffee")}
      </button>
      <button
        value="cafe-verde"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
      >
        {t("roastedCoffeeBeans")}
      </button>
    </div>
  );
}

export default CategoryTabMenu;
