import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CapCut Free vs Pro Comparison",
  description:
    "Compare CapCut free vs official Pro vs cracked mod APKs: watermark, 4K export, AI tools, cloud storage, and security.",
  path: "/free-vs-pro",
});

export default function FreeVsProPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 6"
        title="Free vs paid Pro vs cracked mods"
        description="Know the real boundaries between CapCut’s free tier, official Pro subscription, and unofficial unlocked packages."
        crumbs={[{ href: "/free-vs-pro", label: "Free vs Pro" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free CapCut</th>
                <th>Official Pro</th>
                <th>Cracked / Mod APK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Watermark</td>
                <td>Brand card on exports</td>
                <td>Watermark-free outputs</td>
                <td>May bypass watermark; malware risk</td>
              </tr>
              <tr>
                <td>Max rendering</td>
                <td>Often capped near 1080p under load</td>
                <td>4K Ultra HD, up to 60fps + Smart HDR</td>
                <td>Claims 4K; frequent memory leaks</td>
              </tr>
              <tr>
                <td>AI background separation</td>
                <td>Basic / limited options</td>
                <td>Advanced semantic isolation</td>
                <td>Unlocked but unstable / server issues</td>
              </tr>
              <tr>
                <td>Asset library</td>
                <td>Limited filters & stickers</td>
                <td>Full premium catalog + updates</td>
                <td>Unlocked catalog; weak update path</td>
              </tr>
              <tr>
                <td>Cloud storage</td>
                <td>Restrictive (often ~1GB)</td>
                <td>Expanded (often up to ~10GB)</td>
                <td>Cloud sync commonly broken</td>
              </tr>
              <tr>
                <td>Security & updates</td>
                <td>Play Protect + auto updates</td>
                <td>Signed, audited, feature updates</td>
                <td>High malware / theft exposure</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose-guide mx-auto max-w-3xl">
          <p>
            Official Pro is the only path that combines watermark-free delivery,
            premium AI, cloud backup, and ongoing security patches. Mod APKs
            advertise the same checklist while disabling the systems that keep
            projects and accounts safe.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
