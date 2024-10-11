import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/app/_lib/featured-products";
import Hero from "./_lib/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </>
  );
}
