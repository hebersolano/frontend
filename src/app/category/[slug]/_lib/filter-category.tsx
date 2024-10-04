"use client";
import type { Enum } from "@/types/content-type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Filter from "@/components/filter-origin";
import { buttonVariants } from "@/components/ui/button";

function FilterCategory({
  options,
}: {
  options: { origin: Enum; roast: Enum };
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilter = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(pathname + "?" + params.toString());
  };

  return (
    <div className="sm:mt-5 sm:w-[450px]">
      {Object.entries(options).map(([key, value]) => (
        <Filter key={key} name={key} options={value} onChange={handleFilter} />
      ))}

      <button onClick={() => replace(pathname)} className={buttonVariants()}>
        Clear
      </button>
    </div>
  );
}

export default FilterCategory;
