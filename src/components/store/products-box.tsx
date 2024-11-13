"use client";

import { filterProducts } from "@/app/category/[slug]/_lib/helpers";
import { getProductByCategory } from "@/lib/data-access/products";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import ProductItem2 from "./product-item-02";
import SkProductItem from "./sk-product-item";

function ProductsBox({ slug = "cafe-molido" }: { slug?: string }) {
  const params = Object.fromEntries(useSearchParams());
  const {
    data: products = Array.from({ length: 6 }),
    // error,
    isLoading,
  } = useSWR(
    "products-" + params.cat,
    getProductByCategory.bind(null, params.cat || slug),
  );

  if (isLoading)
    return Array.from({ length: 3 }).map((_, idx) => (
      <SkProductItem key={idx} />
    ));

  const filteredProducts = filterProducts(params, products);

  return filteredProducts.map((product) => (
    <ProductItem2 key={product.id} product={product} />
  ));
}

export default ProductsBox;
