import Image from "next/image";

// import "./hero.css";
function Hero() {
  return (
    <section className="bg-[url(/bg-hero-torrecafhe.webp)] bg-contain bg-no-repeat p-5 sm:bg-cover">
      <div className="flex min-h-[calc(100vh_-_4rem)] flex-col gap-12 sm:flex-row sm:justify-center sm:gap-32">
        <div className="order-2 flex items-center justify-center">
          <p className="flex shrink-0 text-center text-4xl font-semibold lg:text-6xl">
            Bienbenido
            <br />a esta comunidad
            <br />
            dedicada al café
          </p>
        </div>
        <div className="order-1 flex pt-24 sm:items-center sm:justify-center sm:pt-0">
          <Image
            src="/logo-csl-circle.webp"
            alt="logo cafe san luis"
            height={400}
            width={400}
            className="w-full transition-all duration-200 ease-in hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
