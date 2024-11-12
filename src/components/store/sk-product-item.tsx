import { Skeleton } from "../ui/skeleton";

function SkProductItem() {
  return (
    <div className="space-y-2 rounded-xl border">
      <Skeleton className="aspect-square w-full" />
      <div className="space-y-2 p-6">
        <div className="flex justify-between gap-24">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <Skeleton className="h-8 w-full" />
        <div className="flex justify-between gap-24">
          <Skeleton className="h-8 w-[6ch] rounded-md px-3" />
          <Skeleton className="h-8 w-[10ch] rounded-md px-3" />
        </div>
      </div>
    </div>
  );
}

export default SkProductItem;
