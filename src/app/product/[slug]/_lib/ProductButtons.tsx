"use client";
import { Button } from "@/components/ui/button";
import useCartStore from "@/hooks/use-cart-store";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import type { Product } from "@/types/product";
import { Heart } from "lucide-react";

function ProductButtons({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const { addFavoriteItem } = useFavoriteStore();

  return (
    <>
      <Button className="w-full" onClick={() => addItem(product)}>
        Add to cart
      </Button>
      <Heart
        onClick={addFavoriteItem.bind(null, product)}
        width={30}
        strokeWidth={1}
        className="cursor-pointer transition duration-300 hover:fill-primary"
      />
    </>
  );
}

export default ProductButtons;
