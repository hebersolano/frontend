import Image from "next/image";

import useCartStore from "@/hooks/use-cart-store";
import { formatPrice, truncateString } from "@/lib/utils";
import { Product } from "@/types/product";
import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button, buttonVariants } from "../ui/button";

function ProductItem2({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const image = product.images?.[0];

  return (
    <div className="overflow-hidden rounded-xl border">
      <Link href={"/product/" + product.slug} className="cursor-pointer">
        <AspectRatio ratio={1 / 1} className="overflow-hidden">
          <Image
            className="h-full object-cover transition duration-500 hover:scale-110"
            src={process.env.NEXT_PUBLIC_API_URL + image.url}
            alt={image.alternativeText || "product image image"}
            height={image.height}
            width={image.width}
          />
        </AspectRatio>
      </Link>
      <div className="space-y-2 p-6">
        <div className="flex justify-between">
          <h3 className="font-medium">{product.productName}</h3>
          <p className="font-semibold">{formatPrice(product.price)}</p>
        </div>
        <p className="h-8 text-sm text-muted-foreground">
          {truncateString(product.description)}
        </p>
        <div className="flex justify-between pt-2">
          <Link
            href={"/product/" + product.slug}
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            Details
          </Link>
          <Button
            size="sm"
            onClick={() => addItem({ ...product, quantity: 1 })}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem2;
