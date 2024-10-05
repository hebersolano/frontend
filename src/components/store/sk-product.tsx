import { Skeleton } from "../ui/skeleton";

function SkProduct() {
  return (
    <div className="grid sm:grid-cols-2 sm:px-40 sm:py-16">
      <Skeleton className="h-200px w-[350px] rounded-xl" />
      <div className="space-x-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
}

export default SkProduct;
