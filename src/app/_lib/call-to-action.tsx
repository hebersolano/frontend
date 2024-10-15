import { Button } from "@/components/ui/button";
import Image from "next/image";

function CallToAction() {
  return (
    <section className="mx-auto max-w-screen-xl px-4">
      <div className="my-24 flex flex-col gap-8 md:flex-row">
        <div className="flex items-center justify-center">
          <div className="space-y-4 text-center md:w-1/2">
            <img src="logo-leaf-new.webp" className="mb-4 inline" alt="" />
            <p className="font-semibold">Un compromiso con la calidad</p>
            <h2 className="text-3xl">¡Disfruta de muestra variedad en café!</h2>
            <p>
              Café San Luis es una línea de cafés proveniente de la hermosa
              región de San Luis, Comayagua, Honduras y que busca satisfacer los
              gustos mas variados y exiges. Explora toda la variedad que tenemos
              para ti.
            </p>
            <Button>Tienda</Button>
          </div>
        </div>
        <div className="text-center md:w-1/2">
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
    </section>
  );
}

export default CallToAction;
