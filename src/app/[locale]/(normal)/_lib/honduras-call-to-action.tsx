import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "@/i18n/get-translations";

async function InHonduras() {
  const t = await getTranslations("home.inHonduras");

  return (
    <div className="bg-accent pt-44 lg:pb-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative flex justify-center rounded-lg border bg-background lg:flex-row lg:justify-start lg:gap-16 lg:p-12">
          <div className="absolute top-0 w-full -translate-y-1/2 lg:w-64">
            <Image
              src="/img/logo-csl-circle.webp"
              alt="logo cafe san luis"
              height={400}
              width={400}
              className="mx-auto w-64 transition-all duration-200 ease-in hover:scale-110"
            />
          </div>

          <div className="lg:w-64"></div>

          <div className="mb-16 mt-36 flex flex-col items-center justify-center gap-8 text-center lg:my-0 lg:flex-row lg:text-start">
            <div className="space-y-3">
              <h2 className="font-serif text-3xl font-semibold tracking-tight lg:text-4xl">
                {t("title")}
              </h2>
              <p className="leading-7">{t("description")}</p>
            </div>
            <div className="text-center lg:w-1/3 lg:text-start">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                {t("btn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InHonduras;
