import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function SuccessPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="mt-36 flex flex-col-reverse gap-16 sm:flex-row">
        <div className="flex w-1/2 justify-center sm:min-w-[400px]">
          <Image
            src="/doodles/DrawKit-onlineshopping-Illustration-09.svg"
            alt="success"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl">Gracias por tu compra</h1>
          <p className="my-3">
            En breve, nuestro equipo se pondrá en contácto con tigo para
            informarte de los detalles del envio.
          </p>
          <p className="my-3">Gracias por confiar en nuestros productos</p>
          <p className="my-3">¡Disfruta del café!</p>
          <Link href="/" className={buttonVariants()}>
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
