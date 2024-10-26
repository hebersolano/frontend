"use client";

import { getFeaturedProducts } from "@/lib/data-access/products";
import useSWR from "swr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import SkProductItem from "../../components/store/sk-product-item";
import ProductItem2 from "@/components/store/product-item-02";
import SectionHeader from "@/components/section-header";

function FeaturedProducts() {
  const {
    data: products = Array.from({ length: 3 }),
    // error,
    isLoading,
  } = useSWR("featured-products", getFeaturedProducts);

  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <div className="my-16">
        <SectionHeader
          title="Productos Destacados"
          description="Lo que la gente más compra"
        />

        <Carousel className="mt-8">
          <CarouselContent className="">
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  {isLoading && <SkProductItem />}
                  {!isLoading && product !== undefined && (
                    <ProductItem2 product={product} />
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
