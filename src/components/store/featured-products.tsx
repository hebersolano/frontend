"use client";

import { getFeaturedProducts } from "@/lib/data-access/products";
import type { Product } from "@/types/Product";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import useSWR from "swr";
import { IconButton, IconLink } from "../icon-button";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Skeleton } from "../ui/skeleton";

function FeaturedProducts() {
  const {
    data: products,
    // error,
    isLoading,
  } = useSWR("featured-products", getFeaturedProducts);

  // console.log(products);
  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <h3 className="px-6 text-2xl"> Productos Destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                {isLoading && (
                  <div className="rounded-xl border bg-card py-4 text-card-foreground shadow">
                    <div className="relative flex items-center justify-center p-6 px-6 py-2 pt-0">
                      <Skeleton className="aspect-square min-w-full border" />
                    </div>
                  </div>
                )}
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

function ProductItem({ product }: { product: Product }) {
  const image = product.images?.[0];
  return (
    <Card className="border py-4">
      <CardContent className="relative flex items-center justify-center px-6 py-2">
        <Image
          className="border"
          src={process.env.NEXT_PUBLIC_API_URL + image.url}
          alt={image.alternativeText || "product image image"}
          height={image.height}
          width={image.width}
        />
        <div className="duration-20 absolute bottom-6 w-full px-6 transition">
          <div className="flex justify-center gap-x-6">
            <IconLink href={"/product/" + product.slug}>
              <Expand />
            </IconLink>
            <IconButton onClink={() => console.log("adding to cart")}>
              <ShoppingCart />
            </IconButton>
          </div>
        </div>
      </CardContent>
      <div className="px-8">
        <h3>{product.productName}</h3>
        <div className="flex justify-between gap-3">
          <p className="w-fit rounded-full bg-foreground px-2 py-1 text-sm text-background">
            {product.tostado}
          </p>
          <p className="w-fit rounded-full bg-foreground px-2 py-1 text-sm text-background">
            {product.origin}
          </p>
        </div>
      </div>
    </Card>
  );
}
