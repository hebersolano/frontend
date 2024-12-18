"use client";

import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import useCartStore from "@/hooks/use-cart-store";
import { getCookie, setCookie } from "@/lib/cookie";
import SuccessMessage from "./_lib/success-message";
import LoadingPage from "@/app/loading";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

// http://localhost:3000/success?payment_intent=pi_3QNL5QJ5QluLMJOg0LfUKYut&payment_intent_client_secret=pi_3QNJOlJ5QluLMJOg0LR8humA_secret_SRgDBeiuG2WKaq6hzxzCLk51V&redirect_status=succeeded

function SuccessPage() {
  const isSucceeded = useRef(false);
  const searchParams = useSearchParams();
  const { removeAll } = useCartStore();

  const redirectStatus = searchParams.get("redirect_status");
  const paymentIntent = searchParams.get("payment_intent");

  console.log(redirectStatus, "status");
  useEffect(() => {
    if (
      !redirectStatus ||
      redirectStatus !== "succeeded" ||
      isSucceeded.current
    )
      return;

    const payIntCk = JSON.parse(getCookie("stripe_cs") || "{}");

    if (payIntCk.id !== paymentIntent) {
      setCookie("stripe_cs", "", 0);
      notFound();
    }

    isSucceeded.current = true;
    setCookie("stripe_cs", "", 0);
    removeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!redirectStatus && !paymentIntent) notFound();

  //TODO: look up possible stripe error payments
  if (redirectStatus !== "succeeded")
    return (
      <div className="h-noHeader bg-accent py-24">
        <div className="mx-auto w-full max-w-screen-xl bg-background">
          <div className="p-12 sm:p-24">
            <h1 className="mb-6 scroll-m-20 font-serif text-2xl font-semibold tracking-tight lg:text-5xl">
              There was a problem processing your payment
            </h1>
            <p className="mb-6 text-muted-foreground">
              Check your records, no discharge was made. Please try again or
              contact us for help.
            </p>
            <Link className={buttonVariants()} href="/">
              Return to cart
            </Link>
          </div>
        </div>
      </div>
    );

  if (isSucceeded.current)
    return (
      <div className="mx-auto max-w-screen-xl px-4">
        {isSucceeded.current && <SuccessMessage />}
      </div>
    );

  return <LoadingPage text="Procesando" />;
}

export default SuccessPage;
