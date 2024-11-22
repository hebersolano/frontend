"use client";

import { HeadingH1 } from "@/components/ui/typography";
import { useTotalPrice } from "@/hooks/little-hooks";
import useCartStore from "@/hooks/use-cart-store";
import { useRouter } from "next/navigation";
import ProductTable from "./_lib/product-table";

function CartPage() {
  const router = useRouter();
  const { items, cartLength } = useCartStore();
  const totalPrice = useTotalPrice(items);

  if (cartLength <= 0) return <div>Empty cart</div>;

  return (
    <div className="grow bg-accent">
      <div className="mx-auto w-full max-w-screen-xl bg-background px-4 py-16 sm:my-16 sm:p-24">
        <div className="mb-8">
          <HeadingH1>Carrito</HeadingH1>
          {cartLength <= 0 ? "" : <ProductTable items={items} />}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
