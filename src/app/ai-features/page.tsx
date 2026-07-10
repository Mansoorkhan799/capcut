import { OfficialCta } from "@/components/OfficialCta";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CapCut AI Features & Automation",
  description:
    "Explore CapCut AI tools: auto captions, text-to-speech, background removal, face tracking, reshape, CapCut Video Studio, and Dreamina Seedance 2.0.",
  path: "/ai-features",
});

export default function AiFeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 2"
        title="Next-generation AI & automation"
        description="CapCut embeds speech recognition, semantic segmentation, and generative tools directly in the editing pipeline so creators ship faster."
        crumbs={[{ href: "/ai-features", label: "AI Features" }]}
      />

      <article className="prose-guide mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2>Auto captions & speech recognition</h2>
        <p>
          Auto Captions pipes project audio through automated speech recognition
          (ASR), placing synchronized subtitles on the timeline. The system
          supports multiple languages and dialects. After generation, you can
          restyle typography, strokes, shadows, and text animations across
          caption cards in one pass.
        </p>

        <h2>Text-to-speech translation</h2>
        <p>
          CapCut’s TTS engine supports a large set of languages and dialects
          (commonly cited near 93 voices/locales depending on region and app
          version). Type a script, apply TTS, and choose narrative, promotional,
          or character-style vocal profiles powered by NLP models.
        </p>

        <h2>Automated background removal</h2>
        <p>
          Semantic segmentation identifies the main subject, builds an edge
          mask, and removes background pixels—no green screen required. Use it
          for stickers, layered compositions, and quick subject isolation.
        </p>

        <h2>Face tracking & facial contouring</h2>
        <p>
          Real-time face tracking locks graphics, stickers, or pixelation masks
          onto moving faces. The Reshape feature adds slider-based contouring
          for face slim, chin length, feature distance, and eye sizing.
        </p>

        <h2>CapCut Video Studio & Dreamina Seedance 2.0</h2>
        <p>
          On desktop-oriented workflows, CapCut Video Studio shifts toward a
          canvas-based, timeline-flexible workspace. Powered by Dreamina
          Seedance 2.0 generative models, creators can ideate, storyboard, and
          generate imagery or short clips from text prompts inside one creative
          surface.
        </p>
      </article>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
