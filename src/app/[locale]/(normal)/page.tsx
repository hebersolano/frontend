import { setRequestLocale } from "next-intl/server";
import CallToAction from "./_lib/call-to-action";
import FeaturedProducts from "./_lib/featured-products";
import Hero from "./_lib/hero";
import InHonduras from "./_lib/honduras-call-to-action";
import KnowAboutUs from "./_lib/know-about-us";
import ServicesAndProducts from "./_lib/services-and-products";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  console.log("HOME LOCALE", locale);
  setRequestLocale(locale);
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
