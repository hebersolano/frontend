"use client";

import { getTotalPrice } from "@/hooks/little-hooks";
import useCartStore from "@/hooks/use-cart-store";
import { getCookie } from "@/lib/cookie";
import { getPaymentIntent } from "@/lib/stripe";
import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { useTheme } from "next-themes";
import { useEffect, useState, type JSX } from "react";

function getTheme(themeSystem: string | undefined) {
  if (!themeSystem) return "stripe";
  if (themeSystem === "dark") return "night";
  return "stripe";
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!);

function ElementsProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { theme } = useTheme();
  const { items } = useCartStore();
  console.log(items);

  const [clientSecret, setClientSecret] = useState<string | null>();

  useEffect(() => {
    if (items.length < 1) return;
    const totalPrice = getTotalPrice(items);
    const cs = getCookie("stripe_cs");
    if (cs) {
      const payIntCk = JSON.parse(cs);
      if (payIntCk.amount && payIntCk.amount !== totalPrice) {
        // update payment intent if total price change
        console.log("total price changed", payIntCk.amount, totalPrice);
        getPaymentIntent(totalPrice).then((data) => setClientSecret(data));
        return;
      }
      // get client_secret from cookie
      return setClientSecret(payIntCk.cs);
    } else {
      // create payment intent
      getPaymentIntent(totalPrice).then((data) => setClientSecret(data));
    }
  }, [items]);

  console.log("theme:", theme);
  const appearance: Appearance = {
    theme: getTheme(theme),
    variables: {
      colorPrimary: "#8BC34B",
    },
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
