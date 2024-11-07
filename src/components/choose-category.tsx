"use client";

import { getProductCategories } from "@/lib/data-access/product-categories";
import { Category } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import SectionHeader from "./section-header";

function ChooseCategory() {
  const {
    data: categories,
    // error,
    isLoading,
  } = useSWR("product-categories", getProductCategories);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32">
      <SectionHeader title="Elige tu categoria favorita" />

      <div className="grid sm:grid-cols-3">
        {!isLoading &&
          categories.map((cat: Category) => (
            <Link
              href={"/category/" + cat.slug}
              key={cat.documentId}
              className="relative mx-auto max-w-xs overflow-hidden rounded-lg"
            >
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + cat.image.url}
                alt={cat.image.alternativeText || "product category image"}
                height={cat.image.height}
                width={cat.image.width}
                className="h-full rounded-lg object-cover transition duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute bottom-5 z-10 w-full py-2 text-center backdrop-blur-md">
                <p className="text-lg font-bold text-white">{cat.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ChooseCategory;
