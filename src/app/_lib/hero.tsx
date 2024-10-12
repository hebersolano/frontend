import Image from "next/image";

// import "./hero.css";
function Hero() {
  return (
    <div className="h-1/2 bg-secondary bg-[url(/bg-hero-torrecafhe.webp)] bg-center md:h-screen md:bg-cover md:bg-fixed">
      <div className="relative flex h-screen max-w-screen-xl flex-col-reverse items-center justify-center md:mx-auto md:flex-row md:gap-24">
        <div className="h-2/3 w-full flex-1 bg-background p-14 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:rounded-md">
          <p className="text-2xl font-semibold md:text-5xl md:leading-snug">
            Bienbenido
            <br />a esta comunidad
            <br />
            dedicada al café
          </p>
        </div>
        <div className="h-1/3">
          <Image
            src="/logo-csl-circle.webp"
            alt="logo cafe san luis"
            height={1}
            width={1}
            className="absolute inset-1/2 top-0 w-[400px] -translate-x-1/2 translate-y-1/3 transition-all duration-200 ease-in hover:scale-110 md:static"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
