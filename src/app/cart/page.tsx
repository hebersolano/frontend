"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCartStore from "@/hooks/use-cart-store";
import { formatPrice } from "@/lib/utils";
import CartItem from "./_lib/cart-item";
import { loadStripe } from "@stripe/stripe-js";
import { api } from "@/lib/axios";
import { HeadingH1 } from "@/components/ui/typography";

function CartPage() {
  const { items, cartLength } = useCartStore();
  const totalPrice = items.reduce((prev, curr) => prev + curr.price, 0);
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!);

  async function buyStripe() {
    try {
      const stripe = await stripePromise;
      const res = await api.post(
        "/orders",
        {
          products: items.map((item) => ({
            id: item.id,
            documentId: item.documentId,
            productName: item.productName,
          })),
        },
        {
          headers: {
            Authorization: "bearer" + process.env.NEXT_PUBLIC_STRIPE_PUBLIC!,
          },
        },
      );

      console.log("res stripe", res);
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (e) {
      console.error("buyStripe", e);
    }
  }

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4">
      <div className="mt-10">
        <HeadingH1>Carrito de compras</HeadingH1>
      </div>
      <Separator className="my-6 h-px" />
      <div className="gap-32 sm:grid sm:grid-cols-2">
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
              <Button className="w-full" onClick={buyStripe}>
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
