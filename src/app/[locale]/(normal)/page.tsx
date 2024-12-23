import { getCurrentLocale } from "@/locales/server";
import CallToAction from "./_lib/call-to-action";
import FeaturedProducts from "./_lib/featured-products";
import Hero from "./_lib/hero";
import InHonduras from "./_lib/honduras-call-to-action";
import KnowAboutUs from "./_lib/know-about-us";
import ServicesAndProducts from "./_lib/services-and-products";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  console.log(await params);
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
