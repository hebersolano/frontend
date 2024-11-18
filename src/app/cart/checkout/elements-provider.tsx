"use client";

import useCartStore from "@/hooks/use-cart-store";
import { api } from "@/lib/axios";
import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe, PaymentIntent } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!);

function ElementsProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { items } = useCartStore();
  const totalPrice = items.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0,
  );

  const [clientSecret, setClientSecret] = useState<string | null>();

  useEffect(() => {
    api.post<PaymentIntent>("/payment", { amount: totalPrice }).then((res) => {
      console.log("elements provider payment int", res);
      setClientSecret(res.data.client_secret);
    });
  }, []);

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
