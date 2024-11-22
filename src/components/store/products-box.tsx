"use client";

import { filterProducts } from "@/app/(normal)/category/[slug]/_lib/helpers";
import { getProductByCategory } from "@/lib/data-access/products";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import ProductItem2 from "./product-item-02";
import SkProductItem from "./sk-product-item";

function ProductsBox({ slug }: { slug?: string }) {
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

  console.log(products);

  const filteredProducts = filterProducts(params, products);

  return filteredProducts.map((product) => (
    <ProductItem2 key={product.id} product={product} />
  ));
}

export default ProductsBox;
