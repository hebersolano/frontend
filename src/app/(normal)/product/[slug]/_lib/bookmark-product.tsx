"use client";

import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useFavoriteStore from "@/hooks/use-favorite-products-store";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

function BookmarkProduct({ product }: { product: Product }) {
  const [mounted, setMounted] = useState(false);
  const { addFavoriteItem, removeFavoriteItem, isFavoriteItem } =
    useFavoriteStore();

  const isFavorite = isFavoriteItem(product.documentId);
  console.log("is favorite", isFavorite);

  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted)
  //   return <Icons.spinner className="h-9 w-10 animate-spin stroke-1 p-1" />;

  if (!mounted)
    return (
      <Icons.bookmark className="h-9 w-10 shrink-0 animate-pulse cursor-none fill-muted-foreground stroke-muted-foreground drop-shadow-sm" />
    );

  function onHandleFavorite() {
    if (isFavorite) return removeFavoriteItem(product.documentId);
    addFavoriteItem(product);
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        {!isFavorite ? (
          <Icons.bookmark
            onClick={onHandleFavorite}
            className="h-9 w-10 shrink-0 cursor-pointer stroke-primary drop-shadow-sm transition duration-300 hover:fill-primary"
          />
        ) : (
          <Icons.bookmarkChecked onClick={onHandleFavorite} />
        )}
      </TooltipTrigger>
      <TooltipContent>
        {isFavorite ? <p>Remove from favorites</p> : <p>Add to favorites</p>}
      </TooltipContent>
    </Tooltip>
  );
}

export default BookmarkProduct;
