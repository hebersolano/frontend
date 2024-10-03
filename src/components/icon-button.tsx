import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  href: string;
  className?: string;
};

function IconButton({ children, href, className }: Props) {
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

export default IconButton;
