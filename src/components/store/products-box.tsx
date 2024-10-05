"use client";

import useSWR from "swr";
import ProductItem from "./product-item";
import { getProductByCategory } from "@/lib/data-access/products";
import { useSearchParams } from "next/navigation";
import { filterProducts } from "@/app/category/[slug]/_lib/helpers";

function ProductsBox({ slug }: { slug: string }) {
  const params = Object.fromEntries(useSearchParams());
  const {
    data: products,
    // error,
    isLoading,
  } = useSWR("products-" + slug, getProductByCategory.bind(null, slug));

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
