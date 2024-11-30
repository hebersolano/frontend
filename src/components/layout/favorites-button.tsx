import Link from "next/link";
import { ReactNode } from "react";

function MenuLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="flex w-full gap-2">
      {children}
    </Link>
  );
}

export default MenuLink;
