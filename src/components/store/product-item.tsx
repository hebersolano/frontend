import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { IconButton, IconLink } from "../icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import useCartStore from "@/hooks/use-cart-store";

function ProductItem({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const image = product.images?.[0];

  return (
    <Card className="border py-4">
      <CardContent className="relative flex items-center justify-center px-6 py-2">
        <Image
          className="border"
          src={process.env.NEXT_PUBLIC_API_URL + image.url}
          alt={image.alternativeText || "product image image"}
          height={image.height}
          width={image.width}
        />
        <div className="duration-20 absolute bottom-6 w-full px-6 transition">
          <div className="flex justify-center gap-x-6">
            <IconLink href={"/product/" + product.slug}>
              <Expand />
            </IconLink>
            <IconButton onClink={() => addItem(product)}>
              <ShoppingCart />
            </IconButton>
          </div>
        </div>
      </CardContent>
      <div className="px-8">
        <h3>{product.productName}</h3>
        <div className="flex justify-between gap-3">
          <p className="w-fit rounded-full bg-foreground px-2 py-1 text-sm text-background">
            {product.roast}
          </p>
          <p className="w-fit rounded-full bg-foreground px-2 py-1 text-sm text-background">
            {product.origin}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default ProductItem;
