import SectionHeader from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import { CircleDollarSign, Leaf, Recycle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  const t = await getScopedI18n("home.servicesAndProducts");
  const sectionData: TsectionData = [
    {
      title: t("items.artisanalCoffeeRoasting.title"),
      description: t("items.artisanalCoffeeRoasting.description"),
      btn: "#",
      img: {
        url: "/service-01.png",
        altText: t("items.artisanalCoffeeRoasting.title"),
        width: 498,
        height: 650,
      },
    },
    {
      title: t("items.microlots.title"),
      description: t("items.microlots.description"),
      btn: "#",
      img: {
        url: "/service-02.png",
        altText: t("items.microlots.title"),
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
        <SectionHeader title={t("title")} description={t("description")} />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3">
          {/* item 01 */}
          {sectionData.map((item, i) => (
            <ItemCard key={i} itemData={item} />
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

function ItemCard({ itemData }: { itemData: Article }) {
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
            Saber más
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
