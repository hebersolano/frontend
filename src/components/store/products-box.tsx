"use client";

import { getProductByCategory } from "@/lib/data-access/products";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import ProductItem2 from "./product-item-02";
import SkProductItem from "./sk-product-item";
import { Product } from "@/types/product";
import { filterProducts } from "@/app/(normal)/shop/_lib/helpers";

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

  const filteredProducts = filterProducts(params, products);

  return filteredProducts.map((product: Product) => (
    <ProductItem2 key={product.id} product={product} />
  ));
}

export default ProductsBox;
