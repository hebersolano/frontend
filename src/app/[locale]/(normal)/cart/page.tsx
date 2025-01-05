"use client";

import { HeadingH1 } from "@/components/ui/typography";
import useCartStore from "@/hooks/use-cart-store";
import EmptyCart from "./_lib/empty-cart";
import ProductTable from "./_lib/product-table";
import { useTranslations } from "next-intl";

function CartPage() {
  const t = useTranslations("cart");
  const { items, cartLength } = useCartStore();

  return (
    <div className="min-h-noHeader bg-accent py-24">
      <div className="mx-auto w-full max-w-screen-xl bg-background px-4 py-12 sm:p-24">
        <div className="mb-8">
          <HeadingH1>{t("pageTitle")}</HeadingH1>
        </div>
        {cartLength <= 0 ? <EmptyCart /> : <ProductTable items={items} />}
      </div>
    </div>
  );
}

export default CartPage;
