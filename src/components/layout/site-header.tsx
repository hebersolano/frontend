import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Icons } from "../icons";
import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";
import { DesktopNav } from "./desktop-nav";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center">
        <DesktopNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
            Search
          </div>
          <nav className="flex items-center">
            <Link
              href="/cart"
              target="_blank"
              // rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0",
                )}
              >
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">Shopping Cart</span>
              </div>
            </Link>
            <Link
              href="likes"
              target="_blank"
              // rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0",
                )}
              >
                <Heart className="h-4 w-4" />
                <span className="sr-only">Liked Products</span>
              </div>
            </Link>
            <Link
              href="likes"
              target="_blank"
              // rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0",
                )}
              >
                <User className="h-4 w-4" />
                <span className="sr-only">Liked Products</span>
              </div>
            </Link>
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
