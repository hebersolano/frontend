import { getProductsSlug } from "@/lib/data-access/products";
import { ReqSlug } from "@/types/content-type";

export async function generateStaticParams() {
  const products = await getProductsSlug();

  return products.map((product: ReqSlug) => ({
    slug: product.slug,
  }));
}
