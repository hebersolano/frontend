import ProductsBox from "@/components/store/products-box";
import CategoryTabMenu from "./_lib/category-tabmenu";
import { Suspense } from "react";

function ShopPage() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-6 mt-12">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Tienda
          </h1>
          <p className="text-muted-foreground">
            Encuentrá todo lo relacionado al café
          </p>
        </div>
        {/* filter menu */}
        <div className="flex w-full justify-between">
          <CategoryTabMenu />
          <div>other menu</div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-10">
          <Suspense>
            <ProductsBox />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
