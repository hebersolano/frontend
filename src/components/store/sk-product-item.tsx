import { Skeleton } from "../ui/skeleton";

function SkProductItem() {
  return (
    <div className="space-y-2 rounded-xl border">
      <div className="relative flex items-center justify-center p-6">
        <Skeleton className="aspect-square w-full" />
      </div>
      <div className="space-y-2 p-6 pt-0">
        <div className="flex justify-between gap-24">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <Skeleton className="h-8 w-full" />
        <div className="flex justify-between gap-24">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
}

export default SkProductItem;
