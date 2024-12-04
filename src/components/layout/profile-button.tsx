"use client";

import { cn } from "@/lib/utils";
import { Heart, Package2, User } from "lucide-react";
import Link from "next/link";
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
import { ThemeProvider } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import MenuLink from "./favorites-button";
import LogoutButton from "./logout-button";
import ThemeToggle from "./theme-toggle";

function ProfileMenu() {
  const isAuthenticated = useIsAuthenticated();
  const user = useUserData();

  if (!isAuthenticated)
    return (
      <div className="flex gap-2 text-sm decoration-primary">
        <Link href="/auth" className="hover:underline">
          Login
        </Link>
        <Link href="/auth?m=signup" className="hover:underline">
          Registrarse
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
          <Link href="/profile" className="hover:underline">
            {user?.username}
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MenuLink href="/profile">
            <User className="h-4 w-4" /> Mi cuenta
          </MenuLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MenuLink href="/favorites">
            <Heart className="h-4 w-4" />
            Favoritos
          </MenuLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MenuLink href="/orders">
            <Package2 className="h-4 w-4" /> Pedidos
          </MenuLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ThemeProvider attribute="class" enableSystem={false}>
            <ThemeToggle />
          </ThemeProvider>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutButton>Cerrar Sesión</LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileMenu;
