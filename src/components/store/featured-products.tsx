"use client";

import { getFeaturedProducts } from "@/lib/data-access/products";
import useSWR from "swr";

function FeaturedProducts() {
  const { data, error, isLoading } = useSWR(
    "featured-products",
    getFeaturedProducts,
  );

  if (isLoading) return <p>loading...</p>;
  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <h3 className="px-6 text-2xl"> Productos Destacados</h3>
    </section>
  );
}

export default FeaturedProducts;
