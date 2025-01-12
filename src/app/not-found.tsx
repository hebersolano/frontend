import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

import "./[locale]/globals.css";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page not found",
  description: "Page not found",
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-playfair",
});

const geistSans = localFont({
  src: "./[locale]/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

async function NotFound() {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${geistSans.variable} ${playfairDisplay.variable} text-foreground antialiased`}
      >
        <div className="h-screen bg-accent py-24">
          <div className="mx-auto w-full max-w-screen-xl bg-background text-center">
            <div className="space-y-6 p-12 sm:p-24">
              <h1 className="font-serif text-9xl font-extrabold tracking-tight">
                404
              </h1>
              <p className="mb-4 text-xl text-muted-foreground">
                Sorry, we couldn&apos;t find this page.
              </p>
              <Link className={buttonVariants()} href="/">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default NotFound;
