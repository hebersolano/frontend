import Image from "next/image";

// import "./hero.css";
function Hero() {
  return (
    <div className="h-screen bg-secondary bg-[url(/bg-hero-torrecafhe.webp)] bg-cover bg-fixed bg-center">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-center gap-24 px-4">
        <div>
          <div className="rounded-md bg-background p-14 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <p className="text-5xl font-semibold leading-snug">
              Bienbenido
              <br />a esta comunidad
              <br />
              dedicada al café
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/logo-csl-circle.webp"
            alt="logo cafe san luis"
            height={400}
            width={400}
            className="transition-all duration-200 ease-in hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
