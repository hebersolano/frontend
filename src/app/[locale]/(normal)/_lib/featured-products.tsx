"use client";

import { getFeaturedProducts } from "@/lib/data-access/products";
import useSWR from "swr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";
import SkProductItem from "../../../../components/store/sk-product-item";
import ProductItem from "@/components/store/product-item";
import SectionHeader from "@/components/section-header";
import ProductCategories from "@/components/product-categories";
import { useTranslations } from "next-intl";

function FeaturedProducts() {
  const t = useTranslations("home.featuredProducts");

  const {
    data: products = Array.from({ length: 3 }),
    error,
    isLoading,
  } = useSWR("featured-products", getFeaturedProducts);

  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <div className="my-32">
        <SectionHeader
          title={t("secTitle")}
          description={t("secDescription")}
        />

        <Carousel className="mt-8">
          <CarouselContent className="">
            {products.map((product, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  {isLoading || error ? (
                    <SkProductItem />
                  ) : (
                    !isLoading &&
                    product !== undefined && <ProductItem product={product} />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* categories */}
        <ProductCategories />
      </div>
    </section>
  );
}

export default FeaturedProducts;
