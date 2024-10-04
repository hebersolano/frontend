import Link from "next/link";
import { buttonVariants } from "./ui/button";

function BannerProduct() {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Sumérgete en una experiencia única</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Café Exquisito
        </h4>
        <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
    </>
  );
}

export default BannerProduct;
