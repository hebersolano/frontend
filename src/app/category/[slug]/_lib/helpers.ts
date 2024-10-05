import { getProductCategoriesSlug } from "@/lib/data-access/product-categories";
import { ReqSlug } from "@/types/content-type";
import { Product } from "@/types/Product";

export async function generateStaticParams() {
  const cats = await getProductCategoriesSlug();

  return cats.map((cat: ReqSlug) => ({
    slug: cat.slug,
  }));
}

export function filterProducts(
  { origin, roast }: Record<string, string>,
  products: Product[],
) {
  return !origin && !roast
    ? products
    : products?.filter((product) => {
        if (origin && roast)
          return product.origin === origin && product.roast === roast;
        if (origin) return product.origin === origin;
        if (roast) return product.roast === roast;
      });
}
