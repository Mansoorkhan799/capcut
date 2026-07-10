import type { MetadataRoute } from "next";
import { getAllPosts } from "@/content/blog";
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
  "/privacy",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-10");

  const staticEntries = paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency:
      path === "" || path === "/blog"
        ? ("weekly" as const)
        : ("monthly" as const),
    priority:
      path === ""
        ? 1
        : path === "/blog" || path === "/install" || path === "/security"
          ? 0.9
          : 0.7,
  }));

  const blogEntries = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
