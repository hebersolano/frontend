/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { getI18n, getScopedI18n } from "@/intl/server";
import Image from "next/image";

async function CallToAction() {
  const t = await getScopedI18n("home.callToAction");

  return (
    <section className="relative">
      <Image
        src="bg-leaves-img.webp"
        alt="green leaves"
        width={315}
        height={182}
        className="absolute bottom-0 right-0 -z-10 opacity-20"
      />
      <div className="mx-auto my-16 max-w-screen-xl px-4">
        <div className="flex flex-col gap-8 md:flex-row-reverse">
          <div className="flex items-center justify-center md:w-1/2 md:justify-start">
            <div className="space-y-6 text-center md:text-left">
              <img src="logo-leaf-new.webp" className="mb-4 inline" alt="" />
              <p className="font-semibold md:text-xl">{t("subtitle")}</p>
              <h2 className="scroll-m-20 font-serif text-4xl font-semibold leading-loose tracking-tight lg:text-5xl">
                {t("title")}
              </h2>
              <p className="leading-7">{t("description")}</p>
              <Button size="lg" className="md:text-lg">
                {t("button")}
              </Button>
            </div>
          </div>

          {/* images */}
          <div className="flex flex-col items-center justify-center md:w-1/2 md:px-16">
            <Image
              src="logo-csl.webp"
              alt="logo csl"
              width={315}
              height={182}
              className="inline w-full translate-y-4 px-8 md:px-16"
            />
            <Image
              src="primera-promo-cafe-600x514.webp"
              alt="image of coffee"
              width={600}
              height={514}
              className="inline w-full transition-all duration-200 ease-in hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
