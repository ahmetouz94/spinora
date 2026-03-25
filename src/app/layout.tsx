import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SITE, GOOGLE_SITE_VERIFICATION } from "@/lib/constants";
import { PRODUCT } from "@/lib/product-data";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${PRODUCT.name} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "gyroscope fidget toy",
    "fingertip gyroscope",
    "stress relief toy",
    "fidget spinner",
    "gyroscope toy set",
    "spinora",
    "focus toy",
    "ADHD fidget toy",
    "buy gyroscope toy",
    "gyroscope gift",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${PRODUCT.name} | ${SITE.name}`,
    description: SITE.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: PRODUCT.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PRODUCT.name} | ${SITE.name}`,
    description: SITE.description,
    images: ["/images/og-image.jpg"],
  },
  ...(GOOGLE_SITE_VERIFICATION && {
    verification: { google: GOOGLE_SITE_VERIFICATION },
  }),
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <WhatsAppButton />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
