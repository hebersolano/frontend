"use client";

import { getProductByCategory } from "@/lib/data-access/products";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import ProductItem from "./product-item";
import SkProductItem from "./sk-product-item";
import { Product } from "@/types/product";
import { filterProducts } from "@/app/[locale]/(normal)/shop/_lib/helpers";
import { useLocale } from "next-intl";

function ProductsBox({ slug }: { slug?: string }) {
  const locale = useLocale();
  const params = Object.fromEntries(useSearchParams());
  const {
    data: products = Array.from({ length: 6 }),
    error,
    isLoading,
  } = useSWR("products-" + params.cat, () =>
    getProductByCategory(params.cat || slug, locale),
  );

  if (isLoading || error)
    return Array.from({ length: 3 }).map((_, idx) => (
      <SkProductItem key={idx} />
    ));

  const filteredProducts = filterProducts(params, products);

  return filteredProducts.map((product: Product) => (
    <ProductItem key={product.id} product={product} />
  ));
}

export default ProductsBox;
