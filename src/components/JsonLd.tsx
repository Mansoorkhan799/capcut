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
        },
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
