import { loadStripe } from "@stripe/stripe-js";
import { api } from "./axios";
import { ProductCartItem } from "@/types/product";

export async function checkoutStripe(items: ProductCartItem[]) {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!);

  try {
    const stripe = await stripePromise;
    const res = await api.post(
      "/orders",
      {
        products: items.map((item) => ({
          id: item.id,
          documentId: item.documentId,
          productName: item.productName,
          quantity: item.quantity,
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
