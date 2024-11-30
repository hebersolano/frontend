import { loadStripe, PaymentIntent } from "@stripe/stripe-js";
import { api } from "./axios";
import { ProductCartItem } from "@/types/product";

export function getPaymentIntent(totalPrice: number) {
  return api
    .post<PaymentIntent>(
      "/payment",
      { amount: totalPrice },
      {
        withCredentials: true,
      },
    )
    .then((res) => {
      return res.data.client_secret;
    });
}

export async function checkoutStripe(items: ProductCartItem[]) {
  try {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!);
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

    await stripe?.redirectToCheckout({
      sessionId: res.data.stripeSession.id,
    });
  } catch (e) {
    console.error("buyStripe", e);
  }
}
