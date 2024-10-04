import { getProductCategoriesSlug } from "@/lib/data-access/product-categories";

type Cat = {
  id: number;
  documentId: string;
  slug: string;
};

export async function generateStaticParams() {
  const cats = await getProductCategoriesSlug();

  return cats.map((cat: Cat) => ({
    slug: cat.slug,
  }));
}
