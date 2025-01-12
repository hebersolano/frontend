import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

import { setCachedLocale } from "@/i18n/get-translations";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Layout } from "./_lib/types";

// locale static params
export { generateStaticParams } from "@/i18n/i18n-generate-static-params";
export { generateMetadata } from "./_lib/generate-metadata";

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

async function RootLayout({ params, children }: Layout) {
  const locale = (await params).locale;
  console.log(">>>Root layout locale", locale);

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setCachedLocale(locale);
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} text-foreground antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
