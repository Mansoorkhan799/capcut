import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CapCut Mod APK Risks vs Official Pro",
  description:
    "Security threat assessment: why CapCut MOD APK and cracked Pro unlockers risk malware, adware, crashes, missing patches, and account bans.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 5"
        title="Official Pro APK vs cracked modifications"
        description="Demand for unlocked filters and no-watermark exports fuels CapCut MOD APK searches. Unofficial packages promise free Pro—and often deliver malware."
        crumbs={[{ href: "/security", label: "Security" }]}
      />

      <article className="prose-guide mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p>
          Official CapCut from Google Play or{" "}
          <a href="https://www.capcut.com/" target="_blank" rel="noopener noreferrer">
            capcut.com
          </a>{" "}
          is signed and audited. Cracked mods are typically decompiled from{" "}
          <strong>com.lemon.lvoverseas</strong>, injected with unknown code, and
          resigned with unverified certificates.
        </p>

        <h2>Cybersecurity and malware risks</h2>
        <ul>
          <li>
            <strong>Spyware integration:</strong> keylogging, credential theft,
            and silent file exfiltration from device storage.
          </li>
          <li>
            <strong>Aggressive adware:</strong> background ad loops and browser
            redirects toward phishing pages.
          </li>
          <li>
            <strong>Excessive permissions:</strong> mods often request privileges
            far beyond media and microphone access required by the official app.
          </li>
        </ul>

        <h2>Operational instability</h2>
        <ul>
          <li>
            <strong>Runtime crashes:</strong> subscription bypass hooks are
            fragile and can corrupt project databases.
          </li>
          <li>
            <strong>Missing security patches:</strong> no official OTA updates
            means lingering exploits and Android compatibility gaps.
          </li>
          <li>
            <strong>Zero support:</strong> official troubleshooting and customer
            support are unavailable for pirated clients.
          </li>
        </ul>

        <h2>Legal, ethical, and platform violations</h2>
        <ul>
          <li>
            <strong>Copyright & ToS:</strong> cracked CapCut violates CapCut’s
            Terms of Service and applicable copyright law.
          </li>
          <li>
            <strong>Account restrictions:</strong> anomalous API behavior can
            trigger permanent bans on CapCut/TikTok-linked accounts and cloud
            backups.
          </li>
          <li>
            <strong>Creator ecosystem impact:</strong> paywall bypass reduces
            funding for music licensing, AI servers, and new editing tools.
          </li>
        </ul>

        <h2>Bottom line</h2>
        <p>
          If you need watermark-free exports and premium AI, subscribe to
          official CapCut Pro. The short-term “free unlock” from a mod APK is
          not worth device compromise or account loss.
        </p>
      </article>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta
          title="Choose verified CapCut builds only"
          body="This guide exists to explain Pro features and keep creators off malware-laced mod mirrors."
        />
      </div>
    </>
  );
}
