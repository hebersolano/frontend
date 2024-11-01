/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Image from "next/image";

function CallToAction() {
  return (
    <section className="relative">
      <Image
        src="bg-leaves-img.webp"
        alt="logo csl"
        width={315}
        height={182}
        className="absolute bottom-0 right-0 -z-10 opacity-20"
      />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="my-12 flex flex-col gap-8 md:flex-row-reverse">
          <div className="flex items-center justify-center md:w-1/2 md:justify-start">
            <div className="space-y-6 text-center md:text-left">
              <img src="logo-leaf-new.webp" className="mb-4 inline" alt="" />
              <p className="font-semibold md:text-xl">
                Un compromiso con la calidad
              </p>
              <h2 className="font-serif text-3xl font-semibold md:text-5xl">
                ¡Disfruta de muestra variedad en café!
              </h2>
              <p className="text-balance">
                Café San Luis es una línea de cafés proveniente de la hermosa
                región de San Luis, Comayagua, Honduras y que busca satisfacer
                los gustos mas variados y exiges. Explora toda la variedad que
                tenemos para ti.
              </p>
              <Button size="lg" className="md:text-lg">
                Tienda
              </Button>
            </div>
          </div>
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
              alt="logo csl"
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
