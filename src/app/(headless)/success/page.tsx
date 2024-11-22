"use client";

import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import useCartStore from "@/hooks/use-cart-store";
import { getCookie, setCookie } from "@/lib/cookie";
import SuccessMessage from "./_lib/success-message";
import LoadingPage from "@/app/loading";

// http://localhost:3000/success?payment_intent=pi_3QNL5QJ5QluLMJOg0LfUKYut&payment_intent_client_secret=pi_3QNJOlJ5QluLMJOg0LR8humA_secret_SRgDBeiuG2WKaq6hzxzCLk51V&redirect_status=succeeded

function SuccessPage() {
  const isSucceeded = useRef(false);
  const searchParams = useSearchParams();
  const { removeAll } = useCartStore();

  const redirectStatus = searchParams.get("redirect_status");
  const paymentIntent = searchParams.get("payment_intent");

  useEffect(() => {
    if (
      !redirectStatus ||
      redirectStatus !== "succeeded" ||
      isSucceeded.current
    )
      return;

    const payIntCk = JSON.parse(getCookie("stripe_cs") || "{}");

    console.log(redirectStatus, "status");
    //TODO: handle redirect status error

    if (payIntCk.id !== paymentIntent) {
      setCookie("stripe_cs", "", 0);
      notFound();
    }

    isSucceeded.current = true;
    console.log("succeed authentication");
    setCookie("stripe_cs", "", 0);
    removeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!redirectStatus || !paymentIntent) notFound();

  if (redirectStatus !== "succeeded") return <p>There was an error</p>;

  if (isSucceeded.current)
    return (
      <div className="mx-auto max-w-screen-xl px-4">
        {isSucceeded.current && <SuccessMessage />}
      </div>
    );

  return <LoadingPage text="Procesando" />;
}

export default SuccessPage;
