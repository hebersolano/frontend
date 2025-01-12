import { getTranslations } from "@/i18n/get-translations";
import Image from "next/image";

async function BusinessBiography() {
  const t = await getTranslations("aboutUs.businessBiography");

  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-24">
      <div className="flex flex-col gap-6 px-2 lg:flex-row lg:gap-12">
        <div className="basis-1/2">
          <Image
            src="/herrera-family.webp"
            alt="herrera family"
            width={1365}
            height={1024}
            className="rounded-xl duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="basis-1/2 text-pretty leading-relaxed">
          <p className="my-6 leading-7">{t("paragraph1")}</p>
          <p className="leading-7">{t("paragraph2")}</p>
        </div>
      </div>
    </section>
  );
}

export default BusinessBiography;
