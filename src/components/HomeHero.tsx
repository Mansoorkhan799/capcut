"use client";

import Link from "next/link";
import { fadeUp, motion, staggerContainer, useMotionSafe } from "@/components/motion";
import { siteConfig } from "@/lib/site";

const answers = [
  ["What is it?", "Modified CapCut claiming Pro unlocks"],
  ["No watermark?", "Mods claim it; official Pro does it safely"],
  ["v18.5.0?", "Popular build family users search for"],
  ["Safer path?", "Official CapCut + Pro subscription"],
] as const;

function HeroCopy({ animated }: { animated: boolean }) {
  const Eyebrow = animated ? motion.p : "p";
  const Title = animated ? motion.h1 : "h1";
  const Rule = animated ? motion.div : "div";
  const Text = animated ? motion.p : "p";
  const Actions = animated ? motion.div : "div";
  const Panel = animated ? motion.div : "div";

  return (
    <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-20">
      <div className="min-w-0">
        <Eyebrow
          {...(animated ? { variants: fadeUp } : {})}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-deep"
        >
          CapCut Pro Mod APK {siteConfig.versionLabel} · Updated{" "}
          {siteConfig.updated}
        </Eyebrow>
        <Title
          {...(animated ? { variants: fadeUp } : {})}
          className="font-display mt-4 max-w-3xl text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-5xl"
        >
          CapCut Pro Mod APK {siteConfig.versionLabel}: Premium Unlock Claims,
          No Watermark &amp; What Creators Should Know
        </Title>
        <Rule
          {...(animated
            ? {
                variants: fadeUp,
                initial: { scaleX: 0 },
                animate: { scaleX: 1 },
                transition: { delay: 0.35, duration: 0.55 },
              }
            : {})}
          className="mt-5 h-px w-24 origin-left bg-accent"
        />
        <Text
          {...(animated ? { variants: fadeUp } : {})}
          className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          Complete CapCut Pro Mod APK coverage—what “premium unlocked” builds
          promise (no watermark, Pro effects, AI tools), how they differ from
          official CapCut Pro, the real security trade-offs, and safer ways to
          get the same creative results.
        </Text>
        <Text
          {...(animated ? { variants: fadeUp } : {})}
          className="mt-3 text-xs text-slate-500"
        >
          By {siteConfig.author.name}
        </Text>
        <Actions
          {...(animated ? { variants: fadeUp } : {})}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <a
            href={siteConfig.officialDownload}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="btn-primary w-full sm:w-auto"
          >
            Get CapCut officially
          </a>
          <a href="#what-is-mod" className="btn-secondary w-full sm:w-auto">
            What is CapCut Mod APK?
          </a>
          <a href="#security" className="btn-secondary w-full sm:w-auto">
            Mod APK risks
          </a>
        </Actions>
      </div>

      <Panel
        {...(animated ? { variants: fadeUp } : {})}
        className="min-w-0 border border-line bg-bg p-4 sm:p-6"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Mod APK quick facts
        </p>
        <ul className="mt-4 space-y-0 divide-y divide-line border border-line bg-white">
          {answers.map(([num, label]) => (
            <li
              key={num}
              className="flex items-start gap-4 px-4 py-3.5 text-sm text-ink-muted"
            >
              <span className="font-display shrink-0 text-xs font-semibold text-accent-deep">
                {num}
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

export function HomeHero() {
  const animate = useMotionSafe();

  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, transparent 48%, rgba(15,118,110,0.06) 100%), radial-gradient(ellipse 70% 80% at 85% 20%, rgba(15,118,110,0.08), transparent 55%)",
        }}
      />
      {animate ? (
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <HeroCopy animated />
        </motion.div>
      ) : (
        <div className="relative">
          <HeroCopy animated={false} />
        </div>
      )}
    </section>
  );
}
