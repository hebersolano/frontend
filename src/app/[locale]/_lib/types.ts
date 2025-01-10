type LOCALES = "en" | "es";
export type RootLayoutProps = Readonly<{
  params: Promise<{ locale: LOCALES }>;
  children: React.ReactNode;
}>;
