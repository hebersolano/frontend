"use client";

import { getFeaturedProducts } from "@/lib/data-access/products";
import useSWR from "swr";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProductItem from "./product-item";
import SkProductItem from "./sk-product-item";

function FeaturedProducts() {
  const {
    data: products,
    // error,
    isLoading,
  } = useSWR("featured-products", getFeaturedProducts);

  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <h3 className="px-6 text-2xl"> Productos Destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                {isLoading && <SkProductItem />}
                {!isLoading && <ProductItem product={products[index]} />}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
}

export default FeaturedProducts;
