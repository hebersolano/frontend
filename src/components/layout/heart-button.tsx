"use client";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { Link } from "@/i18n/routing";
import { buttonVariants } from "../ui/button";
import useFavoriteStore from "@/hooks/use-favorite-products-store";

function HeartButton() {
  const { favoriteLength } = useFavoriteStore();
  return (
    <Link href="/favorites">
      <div
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "h-8 w-8 px-0",
        )}
      >
        <Heart
          className={cn("h-4 w-4", favoriteLength > 0 && "fill-foreground")}
        />
        <span className="sr-only">Liked Products</span>
      </div>
    </Link>
  );
}

export default HeartButton;
