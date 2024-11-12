import FeaturedProducts from "@/app/_lib/featured-products";
import KnowAboutUs from "@/app/_lib/know-about-us";
import CallToAction from "./_lib/call-to-action";
import Hero from "./_lib/hero";
import InHonduras from "./_lib/honduras-call-to-action";
import ServicesAndProducts from "./_lib/services-and-products";

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <FeaturedProducts />
      <ServicesAndProducts />
      <KnowAboutUs />
      <InHonduras />
    </>
  );
}
