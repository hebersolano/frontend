import SectionHeader from "@/components/section-header";
import { buttonVariants } from "@/components/ui/button";
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

const sectionData: TsectionData = [
  {
    title: "Tostado Artesanal de Café",
    description:
      "El método de tostado es tan importante como el café mismo, un tostado artesanal expone las características del café de una manera única e inigualable.",
    btn: "#",
    img: {
      url: "/service-01.webp",
      altText: "servicio de café tostado",
      width: 498,
      height: 650,
    },
  },
  {
    title: "Microlotes de café",
    description:
      "Junto a nuestra red de productores a lo largo de Honduras te brindamos una amplia variedad café con las mejores características de la región.",
    btn: "#",
    img: {
      url: "/service-02.webp",
      altText: "microlotes de café",
      width: 498,
      height: 650,
    },
  },
  {
    title: "Empaques",
    description:
      "Te brindamos una amplia variedad de empaques para tus productos. Mantén tus productos lo más frescos posible y destaca entre la competencia.",
    btn: null,
    img: {
      url: "/service-03.webp",
      altText: "empaques image",
      width: 498,
      height: 650,
    },
  },
];

export default function ServicesAndProducts() {
  return (
    <section className="bg-muted px-4">
      <div className="mx-auto max-w-screen-xl py-16">
        <SectionHeader title="Más productos y servicios" />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3">
          {/* item 01 */}
          {sectionData.map((item, i) => (
            <ItemCard key={i} itemData={item} />
          ))}
        </div>
        <div className="mx-12 grid grid-cols-1 gap-2 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex gap-4 rounded-xl bg-zinc-600 p-6 text-background">
            <Leaf className="h-8 w-8 text-secondary" />
            <div className="">
              <p className="font-serif text-xl font-bold">Orgánicos</p>
              <p>Sin aditivos preservantes</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl bg-zinc-600 p-6 text-background">
            <CircleDollarSign className="h-8 w-8 text-secondary" />
            <div className="">
              <p className="font-serif text-xl font-bold">Precios especiales</p>
              <p>Para mayoristas</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-xl bg-zinc-600 p-6 text-background">
            <Recycle className="h-8 w-8 text-secondary" />
            <div className="">
              <p className="font-serif text-xl font-bold">Ecológico</p>
              <p>Con responsabilidad</p>
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
      <h3 className="pb-6 font-serif text-xl font-bold">{title}</h3>
      <p>{description}</p>
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
