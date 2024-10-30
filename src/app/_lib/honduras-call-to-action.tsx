import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function InHonduras() {
  return (
    <div className="bg-muted pt-44 lg:pb-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative flex justify-center rounded-lg bg-background lg:flex-row lg:justify-start lg:gap-16 lg:p-12">
          <div className="absolute top-0 w-full -translate-y-1/2 lg:w-64">
            <Image
              src="/logo-csl-circle.webp"
              alt="logo cafe san luis"
              height={400}
              width={400}
              className="mx-auto w-64 transition-all duration-200 ease-in hover:scale-110"
            />
          </div>

          <div className="lg:w-64"></div>

          <div className="mb-16 mt-36 flex flex-col items-center justify-center gap-8 text-center lg:my-0 lg:flex-row lg:text-start">
            <div className="space-y-3">
              <h3 className="font-serif text-3xl font-bold">
                Está en Honduras
              </h3>
              <p className="text-balance lg:text-base">
                ¿Está buscando un café de un perfil específico? Nosotros lo
                encontramos y te lo enviamos a cualquier parte del mundo.
              </p>
            </div>
            <div className="text-center lg:w-1/3 lg:text-start">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InHonduras;
