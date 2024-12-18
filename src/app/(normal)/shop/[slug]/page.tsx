import { getProductBySlug } from "@/lib/data-access/static-data-access";
import CarouselProduct from "./_lib/carousel-product";
import ProductInfo from "./_lib/product-info";
import { TooltipProvider } from "@/components/ui/tooltip";

// static params for Static Side Generation
export { generateStaticParams } from "./_lib/helpers";

async function ProductPage({ params }: { params: Record<string, string> }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  return (
    <div className="mx-auto flex h-screen max-w-screen-xl items-center">
      <div className="grid sm:grid-cols-2">
        <div>
          <CarouselProduct images={product.images} />
        </div>
        <div className="sm:px-12">
          <TooltipProvider>
            <ProductInfo product={product} />
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
