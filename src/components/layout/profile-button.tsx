"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Heart, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsAuthenticated, useUserData } from "@/hooks/auth-store";
import LogoutButton from "./logout-button";

function ProfileMenu() {
  const isAuthenticated = useIsAuthenticated();
  const user = useUserData();

  console.log("is auth", isAuthenticated);

  if (!isAuthenticated)
    return (
      <Link href="/auth">
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
          <span className="sr-only">Liked Products</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user?.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Heart />
          Favoritos
        </DropdownMenuItem>
        <DropdownMenuItem>Pedidos</DropdownMenuItem>
        <DropdownMenuItem>Tema</DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileMenu;
