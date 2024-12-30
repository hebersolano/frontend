"use client";

import { getProductCategories } from "@/lib/data-access/product-categories";
import { Category } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { Skeleton } from "./ui/skeleton";
import { Separator } from "./ui/separator";
import { useScopedI18n } from "@/intl/client";

export default function ProductCategories() {
  const t = useScopedI18n("home.featuredProducts.productCategories");
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR("product-categories", getProductCategories);

  console.log("error swr product categories:", error);

  return (
    <div className="my-8 space-y-4">
      <h3 className="scroll-m-20 font-serif text-2xl font-semibold tracking-tight">
        {t("title")}
      </h3>
      <Separator />
      <div className="flex flex-wrap gap-3 md:gap-6">
        {(isLoading || error) &&
          Array.from({ length: 4 }).map((_, i) => (
            <SkProductCategoryItem key={i} />
          ))}
        {categories !== undefined &&
          categories.map((cat: Category) => (
            <ProductCategoryItem key={cat.id} cat={cat} />
          ))}
      </div>
    </div>
  );
}

function ProductCategoryItem({ cat }: { cat: Category }) {
  return (
    <div key={cat.documentId} className="w-[140px] space-y-2 md:w-[180px]">
      <Link
        href={"/shop?cat=" + cat.slug}
        className="block aspect-square h-[140px] w-[140px] cursor-pointer overflow-hidden rounded-md md:h-[180px] md:w-[180px]"
      >
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + cat.image.url}
          alt={cat.image.alternativeText || "product category image"}
          height={cat.image.height}
          width={cat.image.width}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </Link>

      <p>{cat.name}</p>
      <p className="text-wrap text-sm text-muted-foreground">
        {cat.shortDescription}
      </p>
    </div>
  );
}

function SkProductCategoryItem() {
  return (
    <div className="w-[140px] space-y-2 md:w-[180px]">
      <Skeleton className="aspect-square h-[140px] w-[140px] rounded-md md:h-[180px] md:w-[180px]" />
      <Skeleton className="h-6" />
      <Skeleton className="" />
      <Skeleton className="h-10" />
    </div>
  );
}
