import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const images = [
  {
    page: "/",
    loc: "/capcut-pro-mod-apk.webp",
    title: "CapCut Pro Mod APK",
    caption: "CapCut Pro Mod APK v18.5.0 official download guide",
  },
  {
    page: "/",
    loc: "/capcut-pro-mod-apk-installation.webp",
    title: "CapCut Pro Mod APK download button",
    caption: "Tap Official CapCut download on capcutpromodapk.org",
  },
  {
    page: "/",
    loc: "/capcut-pro-apk.webp",
    title: "CapCut APK download warning",
    caption: "Android File might be harmful dialog with Download anyway",
  },
  {
    page: "/",
    loc: "/capcut-pro-mod-apk-download.webp",
    title: "CapCut Pro Mod APK downloading",
    caption: "capcut-pro-v18.5.0-mod.apk download progress",
  },
  {
    page: "/install",
    loc: "/capcut-apk-free.webp",
    title: "CapCut APK installing",
    caption: "CapCut installation progress on Android",
  },
  {
    page: "/install",
    loc: "/capcut-apk-download.webp",
    title: "CapCut App installed",
    caption: "App installed dialog with Open button",
  },
  {
    page: "/install",
    loc: "/capcut-apk-interface.webp",
    title: "CapCut Terms of Service",
    caption: "Agree and continue on first CapCut launch",
  },
  {
    page: "/",
    loc: "/capcut-pro-mod-apk.png",
    title: "CapCut Pro Mod APK icon",
    caption: "CapCut Pro Mod APK brand icon",
  },
] as const;

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const byPage = new Map<string, (typeof images)[number][]>();

  for (const image of images) {
    const list = byPage.get(image.page) ?? [];
    list.push(image);
    byPage.set(image.page, list);
  }

  const urls = [...byPage.entries()]
    .map(([page, pageImages]) => {
      const imageTags = pageImages
        .map(
          (image) => `    <image:image>
      <image:loc>${escapeXml(`${siteConfig.url}${image.loc}`)}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
        )
        .join("\n");

      return `  <url>
    <loc>${escapeXml(`${siteConfig.url}${page === "/" ? "" : page}`)}</loc>
${imageTags}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
