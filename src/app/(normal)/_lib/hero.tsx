"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const lngs: { [key: string]: { nativeName: string } } = {
  en: { nativeName: "English" },
  es: { nativeName: "Spanish" },
};

function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-[url(/bg-hero-torrecafhe.webp)] bg-contain bg-no-repeat md:bg-cover md:bg-fixed">
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <div className="flex min-h-[calc(100vh_-_4rem)] flex-col gap-14 p-5 sm:justify-center sm:p-16 md:flex-row md:gap-16">
        <div className="order-2 flex items-center justify-center">
          <p className="flex rounded-md border-border/40 bg-background/95 text-center font-serif text-4xl font-semibold sm:text-5xl md:p-12 md:backdrop-blur md:supports-[backdrop-filter]:bg-background/60 lg:text-6xl">
            {/* Bienbenido
            <br />a esta comunidad
            <br />
            dedicada al café */}
            {t("hero.title")}
          </p>
        </div>
        <div className="order-1 mt-24 flex sm:items-center sm:justify-center md:pt-0">
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
