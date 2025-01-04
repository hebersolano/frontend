import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { ReactElement, ReactNode } from "react";

type PropsLink = {
  children: ReactElement<ReactNode>;
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
  children: ReactElement<ReactNode>;
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
