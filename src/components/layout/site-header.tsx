import { ThemeProvider } from "next-themes";
import { DesktopNav } from "./desktop-nav";
import HeartButton from "./heart-button";
import { MobileNav } from "./mobile-nav";
import ProfileMenu from "./profile-button";
import ShoppingCartButton from "./shopping-cart-button";
import ThemeToggle from "./theme-toggle";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center px-4">
        <DesktopNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search */}
          </div>
          <nav className="flex items-center">
            <ShoppingCartButton />
            <HeartButton />
            <ProfileMenu />
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
