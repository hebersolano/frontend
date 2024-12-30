import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/siteConfig";
import LocalesProvider from "@/intl/locales-provider";
import { getStaticParams } from "@/intl/server";
import { LOCALES } from "@/intl/types";
import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-playfair",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Heber Solano",
      url: "#",
    },
  ],
  creator: "Heber Solano",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [siteConfig.ogImage],
  //   creator: "@shadcn",
  // },
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticParams();
}

export default async function RootLocale({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: (typeof LOCALES)[number] }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  if (!locale) return;
  console.log("layout locale", locale, LOCALES.includes(locale));
  setStaticParamsLocale(locale);

  return (
    <html className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} text-foreground antialiased`}
      >
        <LocalesProvider locale={locale}>{children}</LocalesProvider>
        <Toaster />
      </body>
    </html>
  );
}
