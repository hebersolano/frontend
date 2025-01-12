import { ReactNode } from "react";

type typography = {
  children: ReactNode;
};

export function HeadingH1({ children }: typography) {
  return (
    <h1 className="scroll-m-20 font-serif text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export function HeadingH2({ children }: typography) {
  return (
    <h2 className="scroll-m-20 pb-2 font-serif text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function HeadingH3({ children }: typography) {
  return (
    <h3 className="scroll-m-20 font-serif text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function HeadingH4({ children }: typography) {
  return (
    <h4 className="scroll-m-20 font-serif text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function Paragraph({ children }: typography) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}
