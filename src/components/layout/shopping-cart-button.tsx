"use client";

import { Link } from "@/i18n/routing";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/hooks/use-cart-store";

function ShoppingCartButton() {
  const { cartLength } = useCartStore();
  return (
    <Link href="/cart" className="relative">
      <div
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "relative h-8 w-8 px-0",
        )}
      >
        <ShoppingCart className="h-4 w-4" />
        <span className="sr-only">Shopping Cart</span>
      </div>
      {cartLength > 0 && (
        <span className="absolute right-1 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-primary px-2 py-1 text-xs font-bold leading-none text-white">
          {cartLength}
        </span>
      )}
    </Link>
  );
}

export default ShoppingCartButton;
