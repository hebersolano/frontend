import ProductsBox from "@/components/store/products-box";
import CategoryTabMenu from "./_lib/category-tabmenu";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { ProductFilter } from "./_lib/product-filter";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.shop");
  return {
    title: t("title"),
  };
}

async function ShopPage() {
  const t = await getTranslations("shop");
  return (
    <div>
      <div className="mx-auto mb-24 max-w-screen-xl px-4 pt-16">
        {/* header */}
        <div className="mb-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t("pageTitle")}
          </h1>
          <p className="text-muted-foreground">{t("pageDescription")}</p>
        </div>

        {/* filter menu */}
        <div className="flex w-full justify-between">
          <Suspense>
            <CategoryTabMenu />
            <ProductFilter />
          </Suspense>
        </div>
        <Separator className="my-6" />
        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          <Suspense>
            <ProductsBox />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
