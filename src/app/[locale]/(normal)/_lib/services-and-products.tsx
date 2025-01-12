import SectionHeader from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import { CircleDollarSign, Leaf, Recycle } from "lucide-react";
// import { getTranslations } from "@/i18n/get-translations";
import { getTranslations } from "@/i18n/get-translations";
import { Link } from "@/i18n/routing";
import Image from "next/image";

type Article = {
  title: string;
  description: string;
  btn: string | null;
  img: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
};

type TsectionData = Article[];

export default async function ServicesAndProducts() {
  const t = await getTranslations("home.servicesAndProducts");

  const sectionData: TsectionData = [
    {
      title: t("items.artisanCoffeeRoasting.title"),
      description: t("items.artisanCoffeeRoasting.description"),
      btn: "/artisan-coffee",
      img: {
        url: "/service-01.png",
        altText: t("items.artisanCoffeeRoasting.title"),
        width: 498,
        height: 650,
      },
    },
    {
      title: t("items.microlotCoffee.title"),
      description: t("items.microlotCoffee.description"),
      btn: "/microlot-coffee",
      img: {
        url: "/service-02.png",
        altText: t("items.microlotCoffee.title"),
        width: 498,
        height: 650,
      },
    },
    {
      title: t("items.packaging.title"),
      description: t("items.packaging.description"),
      btn: null,
      img: {
        url: "/service-03.png",
        altText: t("items.packaging.title"),
        width: 498,
        height: 650,
      },
    },
  ];

  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-screen-xl px-4 py-32">
        <SectionHeader title={t("secTitle")} />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3">
          {sectionData.map((item, i) => (
            <ServiceProductItem key={i} itemData={item} />
          ))}
        </div>

        {/* characteristics */}
        <div className="mx-12 grid grid-cols-1 gap-2 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex gap-4 rounded-xl bg-zinc-600 p-6 text-background">
            <Leaf className="h-8 w-8 text-secondary" />
            <div className="">
              <h4 className="font-serif text-xl font-semibold tracking-tight">
                {t("caracteristics.organic.title")}
              </h4>
              <p>{t("caracteristics.organic.description")}</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl bg-zinc-600 p-6 text-background">
            <CircleDollarSign className="h-8 w-8 text-secondary" />
            <div className="">
              <h4 className="font-serif text-xl font-semibold tracking-tight">
                {t("caracteristics.specialPrices.title")}
              </h4>
              <p>{t("caracteristics.specialPrices.description")}</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl bg-zinc-600 p-6 text-background">
            <Recycle className="h-8 w-8 text-secondary" />
            <div className="">
              <h4 className="font-serif text-xl font-semibold tracking-tight">
                {t("caracteristics.ecological.title")}
              </h4>
              <p>{t("caracteristics.ecological.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

async function ServiceProductItem({ itemData }: { itemData: Article }) {
  const t = await getTranslations(
    "home.servicesAndProducts.ServiceProductItem",
  );
  const { title, description, img, btn } = itemData;

  return (
    <div className="relative z-10 overflow-hidden rounded-xl border bg-background px-8 pb-32 pt-12 md:pb-44">
      <h3 className="scroll-m-20 pb-6 font-serif text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="leading-7 text-muted-foreground">{description}</p>
      <div className="py-6">
        {btn && (
          <Link href={btn} className={buttonVariants()}>
            {t("btn")}
          </Link>
        )}
      </div>
      <Image
        src={img.url}
        alt={img.altText}
        width={img.width}
        height={img.height}
        className="absolute bottom-0 right-2 -z-10 w-3/4 lg:w-4/5"
      />
    </div>
  );
}
