import { Skeleton } from "./ui/skeleton";

function SkeletonSchema({ grid = 1 }: { grid: number }) {
  return Array.from({ length: grid }).map((_, index) => {
    return (
      <div key={index} className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  });
}

export default SkeletonSchema;
