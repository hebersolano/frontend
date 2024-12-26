import { getCurrentLocale } from "@/locales/server";
import CallToAction from "./_lib/call-to-action";
import FeaturedProducts from "./_lib/featured-products";
import Hero from "./_lib/hero";
import InHonduras from "./_lib/honduras-call-to-action";
import KnowAboutUs from "./_lib/know-about-us";
import ServicesAndProducts from "./_lib/services-and-products";
import { setStaticParamsLocale } from "next-international/server";

export default async function Home() {
  const locale = await getCurrentLocale();
  setStaticParamsLocale(locale);
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
