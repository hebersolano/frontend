import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HeadingH3 } from "@/components/ui/typography";
import { getTotalPrice } from "@/hooks/little-hooks";
import { formatPrice } from "@/lib/utils";
import { ProductCartItem } from "@/types/product";
import Link from "next/link";
import ProductTableRow from "./product-table-row";

function ProductTable({ items }: { items: ProductCartItem[] }) {
  const totalPrice = getTotalPrice(items);

  return (
    <div>
      {" "}
      <div className="my-12 sm:overflow-hidden sm:rounded-md sm:border-x sm:border-t">
        <Table className="">
          {/* <TableCaption>A list of your chosen products.</TableCaption> */}
          <TableHeader className="hidden py-4 sm:table-header-group">
            <TableRow className="bg-muted hover:bg-muted data-[state=selected]:bg-muted sm:text-lg">
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
              <Link
                href="/cart/checkout"
                className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-secondary px-8 text-xl font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
              >
                Finalizar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
