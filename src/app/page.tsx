import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/store/featured-products";

export default function Home() {
  return (
    <>
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </>
  );
}
