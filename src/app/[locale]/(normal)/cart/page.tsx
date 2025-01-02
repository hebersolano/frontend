"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HeadingH1 } from "@/components/ui/typography";
import useCartStore from "@/hooks/use-cart-store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import ProductTable from "./_lib/product-table";
import { buttonVariants } from "@/components/ui/button";

function EmptyCart() {
  return (
    <div className="space-y-4">
      <Alert className="border-primary">
        <ShoppingCart className="h-4 w-4" />
        <AlertTitle>Tu carrito está vacio</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          Puedes agregar productos al carrito desde nuestra tienda
        </AlertDescription>
      </Alert>
      <Link href="/shop" className={buttonVariants()}>
        Ir a la tienda
      </Link>
    </div>
  );
}

function CartPage() {
  const { items, cartLength } = useCartStore();

  return (
    <div className="min-h-noHeader bg-accent py-24">
      <div className="mx-auto w-full max-w-screen-xl bg-background px-4 py-12 sm:p-24">
        <div className="mb-8">
          <HeadingH1>Carrito</HeadingH1>
        </div>
        {cartLength <= 0 ? <EmptyCart /> : <ProductTable items={items} />}
      </div>
    </div>
  );
}

export default CartPage;
