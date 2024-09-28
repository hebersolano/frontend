"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="hidden font-bold lg:inline-block">
          Torrecaf<span className="text-red-600">he</span>
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Inicio
        </Link>
        <Link
          href="/tienda"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/tienda")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Tienda
        </Link>
        <Link
          href="/sobre-nosotros"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/sobre-nosotros")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Sobre Nosotros
        </Link>
        <Link
          href="/contacto"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contacto")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Contacto
        </Link>
        <Link
          href="/cuenta"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/cuenta")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Cuenta
        </Link>
      </nav>
    </div>
  );
}
