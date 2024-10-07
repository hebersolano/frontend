"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCartStore from "@/hooks/use-cart-store";
import { formatPrice } from "@/lib/utils";
import CartItem from "./_lib/cart-item";

function CartPage() {
  const { items, cartLength } = useCartStore();
  const totalPrice = items.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
      <div className="sm: grid gap-5 sm:grid-cols-2">
        <div>
          {cartLength <= 0
            ? "No productos en el carrito"
            : items.map((item) => (
                <ul key={item.id}>
                  <CartItem product={item} />
                </ul>
              ))}
        </div>
        <div className="max-w-xl">
          <div className="rounded-lg bg-muted p-6">
            <p className="mb-3 text-lg font-semibold">Order Summary</p>
            <Separator />
            <div className="my-4 flex justify-between gap-5">
              <p>Order total</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="my-4 flex justify-between gap-5">
              <Button
                className="w-full"
                onClick={() => console.log("comprar btn")}
              >
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
