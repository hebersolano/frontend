"use client";

import { getProductCategories } from "@/lib/data-access/product-categories";
import { Category } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

function ChooseCategory() {
  const {
    data: categories,
    // error,
    isLoading,
  } = useSWR("product-categories", getProductCategories);

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <h3>Elige tu categoria favorita</h3>
      <div className="grid gap-5 sm:grid-cols-3">
        {!isLoading &&
          categories.map((cat: Category) => (
            <Link
              href={"/category/" + cat.slug}
              key={cat.documentId}
              className="relative mx-auto max-w-xs overflow-hidden rounded-lg bg-cover bg-no-repeat"
            >
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + cat.image.url}
                alt={cat.image.alternativeText || "product category image"}
                height={cat.image.height}
                width={cat.image.width}
                className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
              />
              <p className="absolute bottom-5 z-10 w-full py-2 text-center text-lg font-bold text-white backdrop-blur-md">
                {cat.name}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ChooseCategory;
