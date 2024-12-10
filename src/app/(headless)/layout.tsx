interface AppLayoutProps {
  children: React.ReactNode;
}

export default function HeadlessLayout({ children }: AppLayoutProps) {
  return <main className="relative flex flex-col">{children}</main>;
}
