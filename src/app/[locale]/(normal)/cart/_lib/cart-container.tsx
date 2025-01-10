"use client";

import { HeadingH1 } from "@/components/ui/typography";
import useCartStore from "@/hooks/use-cart-store";

import { useTranslations } from "next-intl";
import EmptyCart from "./empty-cart";
import ProductTable from "./product-table";

function CartContainer() {
  const t = useTranslations("cart");
  const { items, cartLength } = useCartStore();

  return (
    <>
      <div className="mb-8">
        <HeadingH1>{t("pageTitle")}</HeadingH1>
      </div>
      {cartLength <= 0 ? <EmptyCart /> : <ProductTable items={items} />}
    </>
  );
}

export default CartContainer;
