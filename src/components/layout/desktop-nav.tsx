"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Coffee } from "lucide-react";

import { Icons } from "../icons";
import { shopMenuItems } from "@/config/desktopMenuConfig";
import { useCurrentLocale } from "@/intl/client";

export function DesktopNav() {
  const locale = useCurrentLocale();
  console.log("nav locale", locale);
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href={`/${locale}`}
        locale={locale}
        className="mr-4 flex items-center space-x-2 lg:mr-6"
      >
        <Icons.iconLogo className="h-6" />
        <span className="hidden lg:inline-block">
          <Icons.upperLogo className="h-4" />
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <li>
            <Link
              href={`/${locale}/`}
              locale="es"
              className={cn(
                "transition-colors hover:text-primary",
                pathname.startsWith(`/${locale}/`)
                  ? "text-foreground"
                  : "text-foreground/60",
              )}
            >
              Inicio
            </Link>
          </li>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={
                pathname.startsWith(`/${locale}/shop`)
                  ? "text-foreground"
                  : "text-foreground/60"
              }
            >
              Tienda
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-0 p-6 md:w-[450px] lg:w-[750px] lg:grid-cols-[0.85fr_1fr_1fr] lg:gap-3">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href={`/${locale}/shop`}
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <Coffee />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Café aquí
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Encuentra todo nuestro catalogo de productos para los
                        amantes del café como nosotros.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                {shopMenuItems.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={`/${locale}${component.href}`}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <li>
            <Link
              href={`/${locale}/about-us`}
              className={cn(
                "transition-colors hover:text-primary",
                pathname?.startsWith(locale + "/about-ut")
                  ? "text-foreground"
                  : "text-foreground/60",
              )}
            >
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/contact`}
              className={cn(
                "transition-colors hover:text-primary",
                pathname?.startsWith("/contacto")
                  ? "text-foreground"
                  : "text-foreground/60",
              )}
            >
              Contacto
            </Link>
          </li>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
