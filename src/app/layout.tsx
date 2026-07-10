import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WebsiteJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "CapCut Pro Mod APK v18.5.0 Free Download Official",
    template: `%s | ${siteConfig.domain}`,
  },
  description: siteConfig.description,
  keywords: [
    "CapCut Pro Mod APK",
    "CapCut Pro Mod APK v18.5.0",
    "CapCut Pro APK",
    "CapCut Pro free download",
    "CapCut no watermark",
    "CapCut AI tools",
    "CapCut official download",
    "CapCut mod APK",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/capcut-pro-mod-apk.webp", type: "image/webp" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon/favicon.ico"],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "CapCut Pro Mod APK v18.5.0 Free Download Official",
    description: siteConfig.description,
    images: [
      {
        url: "/capcut-pro-mod-apk.webp",
        width: 512,
        height: 512,
        alt: "CapCut Pro Mod APK",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CapCut Pro Mod APK v18.5.0 Free Download Official",
    description: siteConfig.description,
    images: ["/capcut-pro-mod-apk.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="flex min-h-full w-full max-w-[100vw] flex-col antialiased">
        <WebsiteJsonLd />
        <Header />
        <main className="w-full min-w-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
