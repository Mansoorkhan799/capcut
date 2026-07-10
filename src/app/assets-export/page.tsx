import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CapCut Assets, Typography & Export",
  description:
    "CapCut asset libraries, custom fonts, music integration, copyright checks, 4K export, 60fps rendering, and Smart HDR output options.",
  path: "/assets-export",
});

export default function AssetsExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 3"
        title="Asset libraries, typography & sharing"
        description="Beyond raw footage: fonts, stickers, music, copyright checks, and high-resolution export targets that finish the creative pipeline."
        crumbs={[{ href: "/assets-export", label: "Assets & Export" }]}
      />

      <article className="prose-guide mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2>Text layouts, typography, and stickers</h2>
        <ul>
          <li>
            <strong>Local font import:</strong> Bring .ttf or .otf files into
            CapCut when built-in fonts do not match brand identity.
          </li>
          <li>
            <strong>Weekly filter & effect updates:</strong> Cinematic filters,
            grading presets, and effects (glitch, lens blur, 3D zoom, retro film)
            refresh regularly for trending social styles.
          </li>
        </ul>

        <h2>Audio extraction and music integration</h2>
        <ul>
          <li>
            <strong>Music repositories:</strong> CapCut connects to ByteDance
            music catalogs for tracks and sound effects.
          </li>
          <li>
            <strong>Audio extraction:</strong> Split audio from an existing video
            into a standalone editable timeline layer.
          </li>
          <li>
            <strong>Copyright protection checks:</strong> Scan tracks against
            licensing matrices before upload to reduce strikes or muted audio on
            TikTok and YouTube.
          </li>
        </ul>

        <h2>High-resolution rendering</h2>
        <ul>
          <li>
            <strong>Ultra HD output:</strong> Export targets commonly include
            480p, 720p, 1080p, and 2K/4K depending on device and subscription.
          </li>
          <li>
            <strong>High frame rate:</strong> Up to 60fps for smoother motion.
          </li>
          <li>
            <strong>Smart HDR:</strong> On compatible devices, wider color and
            luminance profiles improve contrast on modern displays.
          </li>
        </ul>
      </article>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
