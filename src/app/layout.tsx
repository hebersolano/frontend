import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Torrecafhe",
  description: "Café de Honduras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} bg-background antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
