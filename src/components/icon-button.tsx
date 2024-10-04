import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactElement } from "react";

type PropsLink = {
  children: ReactElement;
  href: string;
  className?: string;
};

export function IconLink({ children, href, className }: PropsLink) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center rounded-full border bg-background p-2 shadow-md transition hover:scale-110",
        className,
      )}
    >
      {children}
    </Link>
  );
}

type PropsButton = {
  children: ReactElement;
  onClink: () => void;
  className?: string;
};

export function IconButton({ children, onClink, className }: PropsButton) {
  return (
    <button
      onClick={onClink}
      className={cn(
        "flex items-center justify-center rounded-full border bg-background p-2 shadow-md transition hover:scale-110",
        className,
      )}
    >
      {children}
    </button>
  );
}
