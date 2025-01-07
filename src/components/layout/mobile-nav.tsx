"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useMobileMenuI18n } from "@/hooks/use-nav-menu";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../ui/sheet";

export function MobileNav() {
  const mobileMenu = useMobileMenuI18n();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.iconLogo className="mr-2 h-6" />
          <Icons.upperLogo className="h-4" />
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pl-6">
          <div className="flex flex-col space-y-3">
            {mobileMenu.map((item) => {
              if (!item.items?.length) {
                return (
                  item.href && (
                    <MobileLink
                      key={item.href}
                      href={item.href}
                      onOpenChange={setOpen}
                    >
                      {item.title}
                    </MobileLink>
                  )
                );
              }

              return (
                <React.Fragment key={item.title}>
                  {item.href ? (
                    <MobileLink href={item.href} onOpenChange={setOpen}>
                      {item.title}
                    </MobileLink>
                  ) : (
                    <h4 className="font-medium">{item.title}</h4>
                  )}
                  <div className="ml-2 flex flex-col space-y-3">
                    {item.items.map((item) => (
                      <React.Fragment key={item.href}>
                        {!item.disabled &&
                          (item.href ? (
                            <MobileLink
                              href={item.href}
                              onOpenChange={setOpen}
                              className="text-sm text-muted-foreground"
                            >
                              {item.title}
                              {item.label && (
                                <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                  {item.label}
                                </span>
                              )}
                            </MobileLink>
                          ) : (
                            item.title
                          ))}
                      </React.Fragment>
                    ))}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
