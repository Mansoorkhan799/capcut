import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}${siteConfig.ogImage}`,
          },
        },
      }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const imageUrl = `${siteConfig.url}${siteConfig.ogImage}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: siteConfig.app.name,
        operatingSystem: siteConfig.app.operatingSystem,
        applicationCategory: siteConfig.app.applicationCategory,
        description: siteConfig.description,
        url: siteConfig.url,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 512,
          height: 512,
        },
        screenshot: imageUrl,
        offers: {
          "@type": "Offer",
          price: siteConfig.app.price,
          priceCurrency: siteConfig.app.priceCurrency,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.app.ratingValue,
          ratingCount: siteConfig.app.ratingCount,
          bestRating: siteConfig.app.bestRating,
          worstRating: siteConfig.app.worstRating,
        },
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const trail = [{ name: "Home", href: "/" }, ...items];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
        })),
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

export function HowToInstallJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to safely install official CapCut Pro APK",
        description:
          "Step-by-step guide to install CapCut from official channels without using cracked mod APKs.",
        step: [
          {
            "@type": "HowToStep",
            name: "Clean system preparation",
            text: "Uninstall older CapCut versions from Settings > Apps to avoid signature conflicts.",
          },
          {
            "@type": "HowToStep",
            name: "Secure package acquisition",
            text: "Download CapCut only from capcutpromodapk.org or Google Play.",
          },
          {
            "@type": "HowToStep",
            name: "Allow installation permission",
            text: "Enable Allow from this source for your browser or file manager, then install the official APK.",
          },
        ],
      }}
    />
  );
}
