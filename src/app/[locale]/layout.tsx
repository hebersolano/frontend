import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/siteConfig";
import "./globals.css";
import type { Metadata } from "next";
import LocalesProvider from "@/locales/locales-provider";
import { getStaticParams } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

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

export function generateStaticParams() {
  return getStaticParams();
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} text-foreground antialiased`}
      >
        <LocalesProvider locale={locale}>{children}</LocalesProvider>
        <Toaster />
      </body>
    </html>
  );
}
