import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CapCut Feature Architecture",
  description:
    "Deep dive into CapCut video editor features: precision trimming, keyframes, optical-flow slow motion, chroma key, multi-track timelines, and stabilization.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 1"
        title="Deep-dive feature architecture"
        description="CapCut segments editing into basic mechanics, advanced timeline control, and intelligent automation—so beginners move fast while pros keep frame-level precision."
        crumbs={[{ href: "/features", label: "Features" }]}
      />

      <article className="prose-guide mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p>
          CapCut’s success comes from a multi-tier feature architecture: basic
          mechanical operations, advanced timeline manipulation, and automated
          AI tasks. That design keeps rendering efficient on mobile chipsets
          while covering a wide range of experience levels.
        </p>

        <h2>Basic video editing mechanics</h2>
        <p>
          At the foundation, CapCut handles non-destructive trimming, clip
          splitting, and timeline merging with minimal lag on modern devices.
        </p>
        <ul>
          <li>
            <strong>Precision splitting and trimming:</strong> Frame-accurate
            slicing lets creators isolate visual regions and remove unwanted
            frames.
          </li>
          <li>
            <strong>Variable speed scaling:</strong> Playback can move from
            ultra-slow 0.1× to accelerated 100×. Custom speed curves ramp
            velocity smoothly for cinematic transitions between action and
            slow-motion reveals.
          </li>
          <li>
            <strong>Freeze frames and visual punch:</strong> Capture a single
            frame and extend it, then pair with dynamic zoom for motion on
            static moments.
          </li>
          <li>
            <strong>Transition engine:</strong> Directional blurs, glitches,
            dissolves, and trending effects keep narrative continuity between
            clips.
          </li>
        </ul>

        <h2>Advanced video editing suite</h2>
        <p>
          For advanced mobile creators, CapCut exposes controls that mirror
          desktop post-production workflows.
        </p>
        <ul>
          <li>
            <strong>Universal keyframe animation:</strong> Plot position, scale,
            opacity, and rotation over time for custom motion graphics and title
            reveals—without rigid templates.
          </li>
          <li>
            <strong>Optical flow slow-motion:</strong> Instead of duplicating
            frames, CapCut analyzes motion vectors and synthesizes intermediate
            frames for fluid slow-mo even from 30fps sources.
          </li>
          <li>
            <strong>Advanced chroma key:</strong> Isolate green/blue channels
            with intensity and shadow controls to clean edge fringes for virtual
            backgrounds.
          </li>
          <li>
            <strong>Multi-track timeline:</strong> Stack video, graphics, text,
            adjustment layers, and audio with independent opacity, position, and
            sync—ideal for montages, reactions, and PiP.
          </li>
          <li>
            <strong>Hardware-based stabilization:</strong> Sensor-simulated
            correction crops minor edges and shifts frames for steadier handheld
            shots.
          </li>
        </ul>
      </article>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta
          title="Use the real editor, not a cracked build"
          body="These features ship in official CapCut. Mod APKs that claim ‘premium unlocked’ often break timelines and put your device at risk."
        />
      </div>
    </>
  );
}
