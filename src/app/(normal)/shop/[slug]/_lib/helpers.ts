import { getProductsSlug } from "@/lib/data-access/static-data-access";
import { Slug } from "@/types/content-type";

export async function generateStaticParams() {
  const products = await getProductsSlug();

  return products.map((product: Slug) => ({
    slug: product.slug,
  }));
}
