"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTotalPrice } from "@/hooks/little-hooks";
import useCartStore from "@/hooks/use-cart-store";
import { formatPrice } from "@/lib/utils";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";

function OrderContent() {
  const t = useTranslations("cart.checkout.orderContent");
  const { items } = useCartStore();
  const totalPrice = getTotalPrice(items);

  return (
    <Table className="text-base">
      <TableHeader>
        <TableRow>
          <TableHead className="text-foreground">
            {t("tableHeader.0")}
          </TableHead>
          <TableHead className="text-foreground">
            {t("tableHeader.1")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              {item.productName}{" "}
              <X className="inline h-4 w-4 stroke-muted-foreground" />{" "}
              <span>{item.quantity}</span>
            </TableCell>
            <TableCell>{formatPrice(item.quantity * item.price)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="text-muted-foreground">
            {t("tableFooter.0")}
          </TableCell>
          <TableCell className="text-muted-foreground">
            {formatPrice(totalPrice)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default OrderContent;
