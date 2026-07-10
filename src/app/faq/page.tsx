import { FaqJsonLd } from "@/components/JsonLd";
import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CapCut Pro APK FAQ",
  description:
    "FAQ: CapCut Pro vs free, are mod APKs safe, official sideload from capcut.com, parsing errors, rooting, and the 15-minute limit.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <PageHero
        eyebrow="Section 9"
        title="Frequently asked questions"
        description="Direct answers for CapCut Pro APK searches—optimized for people, Google, and AI answer engines."
        crumbs={[{ href: "/faq", label: "FAQ" }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="border border-line bg-white">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className={`group ${index !== 0 ? "border-t border-line" : ""}`}
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-display text-[0.95rem] font-semibold tracking-tight text-ink sm:text-base">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="mt-0.5 text-slate-400 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-line bg-bg px-5 py-4 text-sm leading-relaxed text-ink-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
