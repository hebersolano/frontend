"use client";

import { cn } from "@/lib/utils";
import { Heart, Package2, User } from "lucide-react";
import { Link } from "@/i18n/routing";
import { buttonVariants } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsAuthenticated, useUserData } from "@/hooks/auth-store";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import MenuLink from "./favorites-button";
import LogoutButton from "./logout-button";
import ThemeToggle from "./theme-toggle";
import { useTranslations } from "next-intl";

function ProfileMenu() {
  const t = useTranslations("siteHeader.desktopNav.profileMenu");
  const isAuthenticated = useIsAuthenticated();
  const user = useUserData();

  if (!isAuthenticated)
    return (
      <div className="flex gap-2 text-sm decoration-primary">
        <Link href="/auth" className="hover:underline">
          {t("login")}
        </Link>
        <Link href="/auth?m=signup" className="hover:underline">
          {t("signUp")}
        </Link>
      </div>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "h-8 w-8 px-0",
          )}
        >
          <User className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={process.env.NEXT_PUBLIC_API_URL! + user?.profile?.url}
            />
            <AvatarFallback>
              {user?.username.slice(0, 1).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
          <Link href="/account" className="hover:underline">
            {user?.username}
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MenuLink href="/account">
            <User className="h-4 w-4" /> {t("account")}
          </MenuLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MenuLink href="/account/favorites">
            <Heart className="h-4 w-4" />
            {t("favorites")}
          </MenuLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MenuLink href="/orders">
            <Package2 className="h-4 w-4" /> {t("orders")}
          </MenuLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ThemeToggle />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutButton>{t("signout")}</LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileMenu;
