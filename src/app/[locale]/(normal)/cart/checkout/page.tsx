import { HeadingH2 } from "@/components/ui/typography";
import { getTranslations } from "next-intl/server";
import CheckoutForm from "./_lib/checkout-form";
import ElementsProvider from "./_lib/elements-provider";
import OrderContent from "./_lib/order-content";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.cart.checkout");
  return {
    title: t("title"),
  };
}

async function CheckoutPage() {
  const t = await getTranslations("cart.checkout");

  return (
    <div className="grow bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr]">
          <div>
            <div className="basis-2/3 border p-8">
              <HeadingH2>{t("pageTitle")}</HeadingH2>
              <OrderContent />
            </div>
          </div>
          <div className="basis-1/3">
            <ElementsProvider>
              <CheckoutForm />
            </ElementsProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
