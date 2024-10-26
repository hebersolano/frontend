import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/app/_lib/featured-products";
import Hero from "./_lib/hero";
import CallToAction from "./_lib/call-to-action";
import ServicesAndProducts from "./_lib/services-and-products";

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <FeaturedProducts />
      <ServicesAndProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </>
  );
}
