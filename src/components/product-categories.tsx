"use client";

import { getProductCategories } from "@/lib/data-access/product-categories";
import { Category } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { Skeleton } from "./ui/skeleton";
import { Separator } from "./ui/separator";

function ProductCategories() {
  const {
    data: categories = Array.from({ length: 3 }),
    error,
    isLoading,
  } = useSWR("product-categories", getProductCategories);

  return (
    <div className="my-8 space-y-4">
      <h3 className="scroll-m-20 font-serif text-2xl font-semibold tracking-tight">
        Categories
      </h3>
      <Separator />
      <div className="flex flex-wrap gap-3 md:gap-6">
        {categories.map((cat: Category, i: number) =>
          isLoading || error ? (
            <SkProductCategoryItem key={i} />
          ) : (
            <ProductCategoryItem key={cat.id} cat={cat} />
          ),
        )}
      </div>
    </div>
  );
}

export default ProductCategories;

function ProductCategoryItem({ cat }: { cat: Category }) {
  return (
    <div key={cat.documentId} className="w-[180px] space-y-2">
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
    <div className="w-[180px] space-y-2">
      <Skeleton className="h-[180px] w-[180px] rounded-md" />
      <Skeleton className="h-4" />
      <Skeleton className="h-" />
    </div>
  );
}
