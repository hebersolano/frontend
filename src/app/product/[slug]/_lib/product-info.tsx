import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import ProductButtons from "./ProductButtons";
import type { Product } from "@/types/product";

function ProductInfo({ product }: { product: Product }) {
  return (
    <div className="my-8 space-y-6 px-4">
      <div className="">
        <h1 className="scroll-m-20 font-serif text-4xl font-extrabold tracking-tight lg:text-5xl">
          {product.productName}
        </h1>
        {/* <div className="flex items-center justify-between gap-3">
          <p className="w-fit rounded-full bg-foreground px-2 py-1 text-xs text-background">
            {product.roast}
          </p>
          <p className="rounded-full bg-primary px-2 py-1 text-xs">
            {product.origin}
          </p>
        </div> */}
      </div>
      <p className="text-pretty leading-7 text-muted-foreground">
        {product.description}
      </p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
      <Separator className="my-4" />

      <ProductButtons product={product} />
    </div>
  );
}

export default ProductInfo;
