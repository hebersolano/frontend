import { setStaticParamsLocale } from "next-international/server";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  setStaticParamsLocale("es");
  return children;
}

export default RootLayout;
