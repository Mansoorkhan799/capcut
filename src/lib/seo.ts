import type { Metadata } from "next";
import { siteConfig } from "./site";

const defaultOgImage = {
  url: siteConfig.ogImage,
  width: 512,
  height: 512,
  alt: "CapCut Pro Mod APK",
};

export function createMetadata({
  title,
  description,
  path = "/",
  type = "website",
  publishedTime,
  modifiedTime,
  image,
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    title === "CapCut Pro Mod APK v18.5.0 Free Download Official" ||
    title === siteConfig.brand
      ? "CapCut Pro Mod APK v18.5.0 Free Download Official"
      : `${title} | CapCut Pro Mod APK`;
  const ogImage = image
    ? {
        url: image,
        width: 512,
        height: 512,
        alt: fullTitle,
      }
    : defaultOgImage;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    authors: [{ name: siteConfig.author.name }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: "en_US",
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}
