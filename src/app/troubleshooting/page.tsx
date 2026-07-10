import Link from "next/link";
import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CapCut Troubleshooting Guide",
  description:
    "Fix CapCut errors: no internet connection, too many people using this feature, app not installed, parsing errors, and export stuck at 99%.",
  path: "/troubleshooting",
});

export default function TroubleshootingPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 8"
        title="Advanced troubleshooting & maintenance"
        description="Even official CapCut can hit network limits or hardware ceilings on heavy 4K timelines. Use this playbook before blaming the install."
        crumbs={[{ href: "/troubleshooting", label: "Troubleshooting" }]}
      />

      <article className="prose-guide mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2>1. “No internet connection” & “Too many people using this feature”</h2>
        <ul>
          <li>
            <strong>App reset:</strong> Force-close CapCut from recents and
            relaunch to clear hanging connection pools.
          </li>
          <li>
            <strong>Business Creator Mode:</strong> Enable it in CapCut settings
            to route requests through less crowded business nodes when available.
          </li>
          <li>
            <strong>VPN fallback:</strong> If local networks restrict ByteDance
            nodes, connect a reputable VPN (for example Proton VPN) to an
            unrestricted region, then reopen CapCut.
          </li>
        </ul>

        <h2>2. “App not installed” during manual setup</h2>
        <ul>
          <li>
            <strong>Storage:</strong> Keep roughly 1.5–2 GB free so the package
            can decompress.
          </li>
          <li>
            <strong>Architecture:</strong> A pure arm64-v8a APK will not install
            on older 32-bit-only devices.
          </li>
          <li>
            <strong>Play Store overwrites:</strong> If you manage a specific
            sideloaded build, disable auto-update for CapCut in Play Store
            settings to avoid unexpected replacements.
          </li>
        </ul>

        <h2>3. Export freezes at 99%</h2>
        <ul>
          <li>
            <strong>Clear cache:</strong> Settings → Apps → CapCut → Storage →
            Clear cache, then retry export.
          </li>
          <li>
            <strong>Lower export load:</strong> Drop 4K → 1080p or 60fps → 30fps
            if the device overheats or runs out of memory.
          </li>
        </ul>

        <p>
          For install order and official download links, see the{" "}
          <Link href="/install">safe install guide</Link>. For malware concerns
          with third-party unlockers, read{" "}
          <Link href="/security">official vs mod risks</Link>.
        </p>
      </article>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
