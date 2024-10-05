import { getProductBySlug } from "@/lib/data-access/products";
import CarouselProduct from "./_lib/carousel-product";
import ProductInfo from "./_lib/product-info";

// static params for Static Side Generation
export { generateStaticParams } from "./_lib/helpers";

async function ProductPage({ params }: { params: Record<string, string> }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  console.log("product", product);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="grid sm:grid-cols-2">
        <div>
          <CarouselProduct images={product.images} />
        </div>
        <div className="sm:px-12">
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
