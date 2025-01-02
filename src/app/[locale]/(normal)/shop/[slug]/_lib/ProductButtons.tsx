"use client";
import { Button } from "@/components/ui/button";
import useCartStore from "@/hooks/use-cart-store";
import type { Product } from "@/types/product";
import { useState } from "react";
import QuantitySelector from "../../../../../../components/store/quantity-selector";
import BookmarkProduct from "./bookmark-product";

function ProductButtons({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCartStore();

  function handleAddToCart() {
    addItem({ ...product, quantity });
  }

  return (
    <div className="flex items-center gap-4">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button className="w-full md:w-fit" onClick={handleAddToCart}>
        Add to cart
      </Button>
      <BookmarkProduct product={product} />
    </div>
  );
}

export default ProductButtons;
