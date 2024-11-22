interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <main className="relative flex min-h-screen flex-col">{children}</main>
  );
}
