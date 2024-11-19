"use client";
import { HeadingH2 } from "@/components/ui/typography";
import CheckoutForm from "./_lib/checkout-form";
import ElementsProvider from "./_lib/elements-provider";
import OrderContent from "./_lib/order-content";

function CheckoutPage() {
  return (
    <div className="grow bg-accent">
      <div className="mx-auto bg-background px-4 py-16 sm:my-16 sm:p-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr]">
          <div>
            <div className="basis-2/3 border p-8">
              <HeadingH2>Tu pedido</HeadingH2>
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
