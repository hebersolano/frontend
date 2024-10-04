import { Skeleton } from "../ui/skeleton";

function SkProductItem() {
  return (
    <div className="rounded-xl border bg-card py-4 text-card-foreground shadow">
      <div className="relative flex items-center justify-center p-6 px-6 py-2 pt-0">
        <Skeleton className="aspect-square min-w-full border" />
      </div>
    </div>
  );
}

export default SkProductItem;
