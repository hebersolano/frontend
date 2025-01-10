import { getSiteConfig } from "@/config/siteConfig";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await getSiteConfig();

  return {
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    creator: "Heber Solano",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en",
        "es-HN": "/es",
      },
    },
    category: "coffee",
    keywords: siteConfig.keywords,
    openGraph: {
      type: "website",
      locale: "es_HN",
      alternateLocale: ["en_US"],
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
    // icons: {
    //   icon: "/favicon.ico",
    //   shortcut: "/favicon-16x16.png",
    //   apple: "/apple-touch-icon.png",
    // },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
