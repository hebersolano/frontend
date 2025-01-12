import LocaleSwitcher from "@/i18n/locale-switcher";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import ProfileMenu from "./profile-button";
import ShoppingCartButton from "./shopping-cart-button";

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
          <nav className="flex items-center gap-2">
            <LocaleSwitcher />
            <ShoppingCartButton />
            <ProfileMenu />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
