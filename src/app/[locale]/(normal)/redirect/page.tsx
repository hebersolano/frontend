"use client";

import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

import useCartStore from "@/hooks/use-cart-store";
import { getCookie, setCookie } from "@/lib/cookie";
import LoadingPage from "@/app/[locale]/loading";
import ErrorMessage from "./_lib/error-message";
import SuccessMessage from "./_lib/success-message";

// http://localhost:3000/es/redirect?payment_intent=pi_3QNL5QJ5QluLMJOg0LfUKYut&payment_intent_client_secret=pi_3QNJOlJ5QluLMJOg0LR8humA_secret_SRgDBeiuG2WKaq6hzxzCLk51V&redirect_status=succeeded

function SuccessPage() {
  const t = useTranslations("redirect");
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

  if (redirectStatus !== "succeeded") return <ErrorMessage />;

  if (isSucceeded.current) return <SuccessMessage />;

  return <LoadingPage text={t("loadingPage")} />;
}

export default SuccessPage;
