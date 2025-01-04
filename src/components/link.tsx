import NextLink, { LinkProps as NextLinkProps } from "next/link";

type LinkProps = { children: React.ReactNode } & NextLinkProps;

function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}

export default Link;
