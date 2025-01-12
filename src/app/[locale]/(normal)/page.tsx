import { setCachedLocale } from "@/i18n/get-translations";
import { Page } from "../_lib/types";
import CallToAction from "./_lib/call-to-action";
import FeaturedProducts from "./_lib/featured-products";
import Hero from "./_lib/hero";
import InHonduras from "./_lib/honduras-call-to-action";
import KnowAboutUs from "./_lib/know-about-us";
import ServicesAndProducts from "./_lib/services-and-products";

async function Home({ params }: Page) {
  const locale = (await params).locale;
  setCachedLocale(locale);

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

export default Home;
