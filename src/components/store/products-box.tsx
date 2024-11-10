"use client";

import useSWR from "swr";
import ProductItem from "./product-item";
import { getProductByCategory } from "@/lib/data-access/products";
import { useSearchParams } from "next/navigation";
import { filterProducts } from "@/app/category/[slug]/_lib/helpers";

function ProductsBox({ slug = "cafe-molido" }: { slug?: string }) {
  const params = Object.fromEntries(useSearchParams());
  const {
    data: products,
    // error,
    isLoading,
  } = useSWR(
    "products-" + params.cat,
    getProductByCategory.bind(null, params.cat || slug),
  );

  if (isLoading) return <p>Is loading...</p>;

  const filteredProducts = filterProducts(params, products!);

  return (
    <>
      {filteredProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductsBox;
