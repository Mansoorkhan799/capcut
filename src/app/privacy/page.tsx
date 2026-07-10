import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for capcutpromodapk.org: what limited data we collect and how this CapCut guide site uses it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="This independent CapCut guide site is built for information—not cracked APK distribution."
        crumbs={[{ href: "/privacy", label: "Privacy" }]}
      />

      <article className="prose-guide mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p>Last updated: {siteConfig.updated}</p>
        <h2>Who we are</h2>
        <p>
          {siteConfig.domain} publishes educational content about CapCut
          features, official installation, and software safety. We are not
          affiliated with ByteDance or CapCut.
        </p>
        <h2>Information we collect</h2>
        <p>
          We do not require an account to read this site. Standard hosting and
          analytics logs (such as IP address, browser type, and pages viewed) may
          be processed by our hosting provider to keep the site online and
          secure.
        </p>
        <h2>Cookies</h2>
        <p>
          Essential cookies may be used for security and performance. If we add
          optional analytics later, we will update this page and provide choices
          where required.
        </p>
        <h2>Third-party links</h2>
        <p>
          Links to CapCut, Google Play, and other external sites are governed by
          those sites’ own privacy policies.
        </p>
        <h2>Contact</h2>
        <p>
          Privacy questions:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
      </article>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
