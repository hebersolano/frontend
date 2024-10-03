"use client";

import { getFeaturedProducts } from "@/lib/data-access/products";
import { notFound } from "next/navigation";
import useSWR from "swr";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import type { Product } from "@/types/Product";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

function FeaturedProducts() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("featured-products", getFeaturedProducts);

  if (isLoading) return <p>loading...</p>;
  if (error) notFound();

  console.log(products);
  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <h3 className="px-6 text-2xl"> Productos Destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product: Product) => {
            const image = product.images?.[0];

            return (
              <CarouselItem key={product.id} className="basis-1/3">
                <div className="p-1">
                  <Card className="border py-4">
                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                      <Image
                        src={process.env.NEXT_PUBLIC_API_URL + image.url}
                        alt={image.alternativeText || "product image image"}
                        height={image.height}
                        width={image.width}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default FeaturedProducts;
