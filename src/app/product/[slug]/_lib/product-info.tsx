import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import ProductButtons from "./ProductButtons";
import type { Product } from "@/types/product";

function ProductInfo({ product }: { product: Product }) {
  return (
    <div className="px-4">
      <div className="mb-3 justify-between sm:flex">
        <h1 className="text-2xl">{product.productName}</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="w-fit rounded-full bg-foreground px-2 py-1 text-xs text-background">
            {product.roast}
          </p>
          <p className="rounded-full bg-primary px-2 py-1 text-xs">
            {product.origin}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <p>{product.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
      <div className="flex items-center gap-5">
        <ProductButtons product={product}/>
      </div>
    </div>
  );
}

export default ProductInfo;
