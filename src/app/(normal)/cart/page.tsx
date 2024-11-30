"use client";

import { HeadingH1 } from "@/components/ui/typography";
import useCartStore from "@/hooks/use-cart-store";
import ProductTable from "./_lib/product-table";

function CartPage() {
  const { items, cartLength } = useCartStore();

  if (cartLength <= 0) return <div>Empty cart</div>;

  return (
    <div className="bg-accent py-24">
      <div className="mx-auto w-full max-w-screen-xl bg-background px-4 sm:p-24">
        <div className="mb-8">
          <HeadingH1>Carrito</HeadingH1>
          {cartLength <= 0 ? "" : <ProductTable items={items} />}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
