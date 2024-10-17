import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";

import { Product } from "@/types/product";
import useCartStore from "@/hooks/use-cart-store";
import { formatPrice, truncateString } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

function ProductItem2({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const image = product.images?.[0];

  return (
    <Card className="border">
      <CardContent className="w-full">
        <Link href={"/product/" + product.slug} className="cursor-pointer">
          <Image
            className=""
            src={process.env.NEXT_PUBLIC_API_URL + image.url}
            alt={image.alternativeText || "product image image"}
            height={image.height}
            width={image.width}
          />
        </Link>
      </CardContent>
      <CardFooter className="space-y-2">
        <div className="flex justify-between">
          <h3 className="font-medium">{product.productName}</h3>
          <p className="font-semibold">{formatPrice(product.price)}</p>
        </div>
        <p className="text-sm">{truncateString(product.description)}</p>
        <div className="flex justify-between pt-2">
          <Link
            href={"/product/" + product.slug}
            className={buttonVariants({ size: "sm" })}
          >
            Details
          </Link>
          <Button size="sm" variant="outline" onClick={() => addItem(product)}>
            Add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductItem2;
