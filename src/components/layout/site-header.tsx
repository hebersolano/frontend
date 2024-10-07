import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Heart, User } from "lucide-react";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "./theme-toggle";
import ShoppingCartButton from "./shopping-cart-button";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center px-4">
        <DesktopNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
            Search
          </div>
          <nav className="flex items-center">
            <ShoppingCartButton />
            <Link
              href="likes"
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
            <ThemeProvider attribute="class" enableSystem={false}>
              <ThemeToggle />
            </ThemeProvider>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
