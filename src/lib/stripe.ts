import { loadStripe, PaymentIntent } from "@stripe/stripe-js";
import { api } from "./axios";
import { ProductCartItem } from "@/types/product";
import { toastAlert } from "./error-utils";

export async function getPaymentIntent(totalPrice: number) {
  try {
    const res = await api.post<PaymentIntent>(
      "/payment",
      { amount: totalPrice },
      {
        withCredentials: true,
      },
    );

    return res.data.client_secret;
  } catch (error) {
    toastAlert("An error occurred loading checkout");
    console.error("error requesting payment intent:", error);
  }
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
  } catch (error) {
    toastAlert("An error occurred creating checkout");
    console.error("checkout stripe error:", error);
  }
}
