import { Metadata } from "next";
import { getTranslations } from "@/i18n/get-translations";
import CartContainer from "./_lib/cart-container";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.cart");
  return {
    title: t("title"),
  };
}

async function CartPage() {
  return (
    <div className="min-h-noHeader bg-accent py-24">
      <div className="mx-auto w-full max-w-screen-xl bg-background px-4 py-12 sm:p-24">
        <CartContainer />
      </div>
    </div>
  );
}

export default CartPage;
