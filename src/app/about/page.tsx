import Link from "next/link";
import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "About & Editorial Policy",
  description:
    "About capcutpromodapk.org: independent CapCut Pro research, editorial standards, update policy, and why we recommend official downloads only.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About this CapCut Pro guide"
        description="We publish people-first CapCut documentation so creators can evaluate Pro features and avoid unsafe mod APKs."
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <article className="prose-guide mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2>Mission</h2>
        <p>
          <strong>{siteConfig.domain}</strong> explains CapCut Pro capabilities,
          official Android install paths, and the real risks of cracked CapCut
          Mod APKs. Our goal is clear answers for searchers—not hosting pirated
          software.
        </p>

        <h2>Who writes this</h2>
        <p>
          Content is produced by <strong>{siteConfig.author.name}</strong> (
          {siteConfig.author.role}). We review CapCut’s public product changes,
          creator workflows, and common Android install failures, then update
          guides with practical steps.
        </p>

        <h2>Editorial standards</h2>
        <ul>
          <li>
            Lead with the direct answer (safe vs unsafe, free vs Pro, install
            steps) before long explanations.
          </li>
          <li>
            Prefer official sources:{" "}
            <a href={siteConfig.officialWebsite} target="_blank" rel="noopener noreferrer">
              capcut.com
            </a>{" "}
            and{" "}
            <a href={siteConfig.playStore} target="_blank" rel="noopener noreferrer">
              Google Play
            </a>
            .
          </li>
          <li>
            Call out uncertainty when plan limits vary by region or app version.
          </li>
          <li>
            Never publish cracked APK files, serial keys, or bypass instructions.
          </li>
          <li>Correct factual errors quickly when readers report them.</li>
        </ul>

        <h2>Update policy</h2>
        <p>
          Pillar pages and high-traffic articles are reviewed when CapCut
          releases major Android changes or when install/security guidance
          shifts. Current site review date: <strong>{siteConfig.updated}</strong>
          .
        </p>

        <h2>Affiliation disclosure</h2>
        <p>
          This site is independent and not affiliated with ByteDance, CapCut, or
          TikTok. Product names are trademarks of their respective owners.
        </p>

        <h2>Contact</h2>
        <p>
          Corrections and questions:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Also see
          our <Link href="/privacy">privacy policy</Link> and{" "}
          <Link href="/blog">blog library</Link>.
        </p>
      </article>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
