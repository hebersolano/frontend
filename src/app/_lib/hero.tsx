import Image from "next/image";

// import "./hero.css";
function Hero() {
  return (
    <section className="relative bg-[url(/bg-hero-torrecafhe.webp)] bg-contain bg-no-repeat p-5">
      <div className="flex min-h-[100vh] flex-col gap-12">
        <div className="order-2 mx-auto">
          <p className="flex text-center text-4xl font-semibold">
            Bienbenido
            <br />a esta comunidad
            <br />
            dedicada al café
          </p>
        </div>
        <div className="order-1 h-fit pt-24">
          <Image
            src="/logo-csl-circle.webp"
            alt="logo cafe san luis"
            height={1}
            width={1}
            className="w-full transition-all duration-200 ease-in hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
