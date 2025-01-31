import { routing } from "@/i18n/routing";
import { getProductsSlug } from "@/lib/data-access/static-data-access";

export async function generateStaticParams() {
  const params = [];

  for (const locale of routing.locales) {
    const products = await getProductsSlug(locale);
    for (const product of products) {
      params.push({
        slug: product.slug,
        locale,
      });
    }
  }

  return params;
}
