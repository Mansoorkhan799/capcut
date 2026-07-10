import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const paths = [
  "",
  "/features",
  "/ai-features",
  "/assets-export",
  "/specs",
  "/security",
  "/free-vs-pro",
  "/install",
  "/troubleshooting",
  "/faq",
  "/about",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-10");

  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/install" || path === "/security" ? 0.9 : 0.7,
  }));
}
