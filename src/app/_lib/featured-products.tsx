"use client";

import { getFeaturedProducts } from "@/lib/data-access/products";
import useSWR from "swr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import ProductItem from "../../components/store/product-item";
import SkProductItem from "../../components/store/sk-product-item";

function FeaturedProducts() {
  const {
    data: products = Array.from({ length: 3 }),
    // error,
    isLoading,
  } = useSWR("featured-products", getFeaturedProducts);
  console.count("feature product render");
  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <div className="mt-24">
        <h3 className="text-center font-serif text-3xl font-semibold">
          Productos Destacados
        </h3>
        <Carousel className="mt-8">
          <CarouselContent className="">
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  {isLoading && <SkProductItem />}
                  {!isLoading && product !== undefined && (
                    <ProductItem product={product} />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
}

export default FeaturedProducts;
