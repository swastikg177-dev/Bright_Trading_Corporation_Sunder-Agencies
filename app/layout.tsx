import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const siteUrl = "https://bright-trading-corporation.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bright Traders | Sunder Agencies",
  description:
    "Bright Traders | Sunder Agencies is a trusted electronics and electrical shop in Burhar, Madhya Pradesh offering appliances, lighting, wires, switches, and daily utility products.",
  keywords: [
    "electronics shop Burhar",
    "electrical shop Burhar",
    "Bright Traders",
    "Sunder Agencies",
    "home appliances Burhar",
    "electronics store Madhya Pradesh",
  ],
  openGraph: {
    title: "Bright Traders | Sunder Agencies",
    description:
      "Trusted electronics and electrical store in Burhar for appliances, electrical supplies, lighting, switches, and more.",
    url: siteUrl,
    siteName: "Bright Traders | Sunder Agencies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Traders | Sunder Agencies",
    description:
      "Premium electronics and electrical retail experience in Burhar, Madhya Pradesh.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
