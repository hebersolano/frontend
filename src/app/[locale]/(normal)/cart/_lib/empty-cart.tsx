import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";

function EmptyCart() {
  const t = useTranslations("cart.emptyCart");

  return (
    <div className="space-y-4">
      <Alert className="border-primary">
        <ShoppingCart className="h-4 w-4" />
        <AlertTitle>{t("title")})</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          {t("description")}
        </AlertDescription>
      </Alert>
      <Link href="/shop" className={buttonVariants()}>
        {t("btn")}
      </Link>
    </div>
  );
}

export default EmptyCart;
