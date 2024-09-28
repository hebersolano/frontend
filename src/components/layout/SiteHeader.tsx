import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { MainNav } from "./main-nav";
import { Icons } from "../icons";
import Link from "next/link";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-xl items-center">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
            Search
          </div>
          <nav className="flex items-center">
            <Link
              // href={siteConfig.links.github}
              href="#"
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
                <Icons.instagram className="h-4 w-4" />X
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              // href={siteConfig.links.twitter}
              href="#"
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
                <Icons.google className="h-3 w-3 fill-current" />X
                <span className="sr-only">Google</span>
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
