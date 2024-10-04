"use client";

import useSWR from "swr";
import ProductItem from "./product-item";
import { getProductByCategory } from "@/lib/data-access/products";
import { useSearchParams } from "next/navigation";

function ProductsBox({ slug }: { slug: string }) {
  const { origin, roast } = Object.fromEntries(useSearchParams());
  const {
    data: products,
    // error,
    isLoading,
  } = useSWR("products-" + slug, getProductByCategory.bind(null, slug));

  if (isLoading) return <p>Is loading...</p>;

  const filteredProducts =
    !origin && !roast
      ? products
      : products?.filter((product) => {
          if (origin && roast)
            return product.origin === origin && product.roast === roast;
          if (origin) return product.origin === origin;
          if (roast) return product.roast === roast;
        });

  return (
    <>
      {filteredProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductsBox;
