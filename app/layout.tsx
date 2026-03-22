import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { getDictionary } from "@/lib/site-copy";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const defaultCopy = getDictionary("en");

export const metadata: Metadata = {
  metadataBase: new URL("https://riceflow.c2tech.example"),
  title: defaultCopy.metadata.siteTitle,
  description: defaultCopy.metadata.siteDescription,
  keywords: defaultCopy.metadata.keywords,
  openGraph: {
    title: defaultCopy.metadata.ogTitle,
    description: defaultCopy.metadata.ogDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultCopy.metadata.twitterTitle,
    description: defaultCopy.metadata.twitterDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
