"use client";

import useCartStore from "@/hooks/use-cart-store";
import { getCookie } from "@/lib/cookie";
import { getPaymentIntent } from "@/lib/stripe";
import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!);

function ElementsProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { items } = useCartStore();
  const totalPrice =
    items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0) * 100;

  const [clientSecret, setClientSecret] = useState<string | null>();

  useEffect(() => {
    const cs = getCookie("stripe_cs");
    if (cs) {
      const payIntCk = JSON.parse(cs);
      if (payIntCk.amount !== totalPrice) {
        // update payment intent if total price change
        getPaymentIntent(totalPrice).then((data) => setClientSecret(data));
        return;
      }
      // get client_secret form cookie
      return setClientSecret(payIntCk.cs);
    }

    // create payment intent
    getPaymentIntent(totalPrice).then((data) => setClientSecret(data));
  }, [totalPrice]);

  const appearance: Appearance = {
    theme: "stripe",
  };
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  if (!clientSecret) return null;

  return (
    <Elements
      options={{ clientSecret, appearance, loader }}
      stripe={stripePromise}
    >
      {children}
    </Elements>
  );
}

export default ElementsProvider;
