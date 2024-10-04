import { Separator } from "@/components/ui/separator";
import { getProductCategoryBySlug } from "@/lib/data-access/product-categories";
import FilterCategory from "./_lib/filter-category";
import ProductsBox from "@/components/store/products-box";
import { getProductFields } from "@/lib/data-access/products";

export { generateStaticParams } from "./_lib/helpers";

async function CategoriesPage({ params }: { params: Record<string, string> }) {
  const { slug } = params;
  const category = await getProductCategoryBySlug(slug);
  const filterOpts = await getProductFields();

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <h1 className="text-3xl font-medium">{category.name}</h1>
      <Separator />
      <div className="flex">
        <FilterCategory options={filterOpts} />
        <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-10">
          <ProductsBox slug={slug} />
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
