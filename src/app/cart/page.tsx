"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HeadingH1, HeadingH3 } from "@/components/ui/typography";
import useCartStore from "@/hooks/use-cart-store";
import { formatPrice } from "@/lib/utils";
import ProductTableRow from "./_lib/ProductTableRow";

function CartPage() {
  console.count("cart page");

  const { items, cartLength } = useCartStore();
  const totalPrice = items.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0,
  );
  // const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC!)

  return (
    <div className="grow bg-accent">
      <div className="mx-auto w-full max-w-screen-xl bg-background px-4 py-16 sm:my-16 sm:p-24">
        <div className="mb-8">
          <HeadingH1>Carrito</HeadingH1>
        </div>
        <div className="my-12 sm:overflow-hidden sm:rounded-md sm:border-x sm:border-t">
          <Table className="">
            {/* <TableCaption>A list of your chosen products.</TableCaption> */}
            <TableHeader className="hidden bg-muted/50 py-4 sm:table-header-group">
              <TableRow className="sm:text-lg">
                <TableHead className="px-0"></TableHead>
                <TableHead></TableHead>
                <TableHead>Producto</TableHead>
                <TableHead className="">Precio</TableHead>
                <TableHead className="">Cantidad</TableHead>
                <TableHead className="">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="flex flex-col gap-8 border-0 text-base sm:table-row-group">
              {items.map((product) => (
                <ProductTableRow key={product.id} product={product} />
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </div>
        <div className="flex justify-end">
          {/* cart totals */}
          <div className="w-full min-w-fit rounded-md border sm:w-[40%]">
            <div className="border-b bg-muted/50 p-4">
              <HeadingH3>Totales</HeadingH3>
            </div>
            <div className="divide-y px-4">
              <div className="flex justify-between p-4 text-lg font-medium">
                <p>Subtotal:</p>
                <p>{formatPrice(totalPrice)}</p>
              </div>
              <div className="p-4">
                <Button
                  size="lg"
                  className="w-full bg-secondary text-xl hover:bg-secondary/90"
                >
                  Finalizar Compra
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
