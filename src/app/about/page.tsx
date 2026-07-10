import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "About This CapCut Pro Guide",
  description:
    "About capcutpromodapk.org: an independent CapCut Pro APK features and safety guide recommending official downloads only.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Independent CapCut Pro safety guide"
        description="We publish feature explainers and official install guidance so creators can avoid malware-laced CapCut mod APKs."
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <article className="prose-guide mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2>What this site is</h2>
        <p>
          <strong>{siteConfig.domain}</strong> is an independent informational
          resource about CapCut Pro features, AI tools, free vs Pro differences,
          and safe installation. Last content review: {siteConfig.updated}.
        </p>

        <h2>What this site is not</h2>
        <p>
          We do not distribute cracked, pirated, or “premium unlocked” CapCut
          packages. We are not affiliated with ByteDance, CapCut, or TikTok.
          Product names are trademarks of their respective owners.
        </p>

        <h2>Our recommendation</h2>
        <p>
          Download CapCut from{" "}
          <a href={siteConfig.officialDownload} target="_blank" rel="noopener noreferrer">
            capcut.com
          </a>{" "}
          or{" "}
          <a href={siteConfig.playStore} target="_blank" rel="noopener noreferrer">
            Google Play
          </a>
          . If you need Pro features, use the official subscription.
        </p>

        <h2>Contact</h2>
        <p>
          Questions or corrections:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
      </article>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
