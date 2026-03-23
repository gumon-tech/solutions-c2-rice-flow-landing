import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { getLocaleOgImage } from "@/lib/metadata";
import { getDictionary } from "@/lib/site-copy";
import { getThemeInitScript } from "@/lib/theme";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const defaultCopy = getDictionary("en");

export const metadata: Metadata = {
  metadataBase: new URL("https://riceflow.gumon.dev"),
  title: defaultCopy.metadata.siteTitle,
  description: defaultCopy.metadata.siteDescription,
  keywords: defaultCopy.metadata.keywords,
  applicationName: "Rice Flow",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Rice Flow",
  },
  openGraph: {
    title: defaultCopy.metadata.ogTitle,
    description: defaultCopy.metadata.ogDescription,
    type: "website",
    images: [getLocaleOgImage("en")],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultCopy.metadata.twitterTitle,
    description: defaultCopy.metadata.twitterDescription,
    images: [getLocaleOgImage("en")],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3df" },
    { media: "(prefers-color-scheme: dark)", color: "#07111f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeInitScript() }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
