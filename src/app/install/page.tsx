import { HowToInstallJsonLd } from "@/components/JsonLd";
import {
  InstallGuideVisuals,
  InstallStepImage,
} from "@/components/InstallGuideVisuals";
import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "How to Safely Install CapCut Pro APK",
  description:
    "Step-by-step official CapCut APK install guide: uninstall old builds, download from capcutpromodapk.org, allow unknown apps, and avoid mod mirrors.",
  path: "/install",
});

const phases = [
  {
    title: "Phase 1 — Clean system preparation",
    steps: [
      "Open Settings → Apps → All apps.",
      "Find any existing CapCut install and tap Uninstall.",
      "This prevents signature collision errors such as “App not installed.”",
    ],
  },
  {
    title: "Phase 2 — Secure package acquisition",
    steps: [
      "Open a secure browser and go to CapCut’s official site: capcutpromodapk.org.",
      "Tap Official CapCut download / Download APK.",
      "Do not download CapCut from random “mod APK” mirrors.",
    ],
    image: {
      src: "/capcut-pro-mod-apk-installation.webp",
      alt: "Tap Official CapCut download on capcutpromodapk.org",
      caption: "Start here: tap Official CapCut download on this site.",
    },
  },
  {
    title: "Phase 3 — Browser security banners",
    steps: [
      "Android may warn: “This type of file may be harmful.”",
      "For files fetched from our verified download host, continue with Download anyway.",
      "If the file came from an unknown third party, cancel immediately.",
    ],
    image: {
      src: "/capcut-pro-apk.webp",
      alt: "Android File might be harmful dialog with Download anyway",
      caption: "Choose Download anyway when the warning appears for our APK.",
    },
  },
  {
    title: "Phase 4 — Installation permissions",
    steps: [
      "Open Files / Downloads and tap capcut-pro-v18.5.0-mod.apk.",
      "When prompted, open Settings and enable Allow from this source.",
      "Tap Install, wait for completion, then Open CapCut and Agree and continue.",
    ],
    image: {
      src: "/capcut-apk-free.webp",
      alt: "CapCut APK installing with progress bar",
      caption: "Allow the installer to finish, then open CapCut.",
    },
  },
];

export default function InstallPage() {
  return (
    <>
      <HowToInstallJsonLd />
      <PageHero
        eyebrow="Section 7"
        title="Safe deployment: install official CapCut"
        description="Prefer Google Play when available. If you sideload, only use CapCut’s official APK—never cracked Pro unlockers."
        crumbs={[{ href: "/install", label: "Install" }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-10 flex flex-wrap gap-3">
          <a
            href={siteConfig.officialDownload}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="btn-primary"
          >
            Download APK
          </a>
          <a
            href={siteConfig.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Google Play listing
          </a>
        </div>

        <section className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            Visual walkthrough
          </p>
          <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink">
            Download & install screenshots
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            Follow these phone screens in order—from tapping download to opening
            CapCut after install.
          </p>
          <InstallGuideVisuals />
        </section>

        <ol className="space-y-4">
          {phases.map((phase, index) => (
            <li key={phase.title} className="border border-line bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
                Step {index + 1}
              </p>
              <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-ink">
                {phase.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {phase.steps.map((step) => (
                  <li
                    key={step}
                    className="border-l-2 border-line pl-3 text-sm leading-relaxed text-ink-muted"
                  >
                    {step}
                  </li>
                ))}
              </ul>
              {"image" in phase && phase.image ? (
                <InstallStepImage
                  src={phase.image.src}
                  alt={phase.image.alt}
                  caption={phase.image.caption}
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta
          title="Still seeing install errors?"
          body="Check storage space, CPU architecture match, and our troubleshooting playbook before trying another download source."
        />
      </div>
    </>
  );
}
