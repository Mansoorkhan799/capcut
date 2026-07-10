"use client";

import Link from "next/link";
import { fadeUp, motion, staggerContainer, useMotionSafe } from "@/components/motion";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs?: { href: string; label: string }[];
}) {
  const animate = useMotionSafe();

  const inner = (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
      {crumbs && (
        <motion.nav
          variants={fadeUp}
          className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-500"
        >
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          {crumbs.map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <span aria-hidden>/</span>
              <Link href={crumb.href} className="hover:text-ink">
                {crumb.label}
              </Link>
            </span>
          ))}
        </motion.nav>
      )}
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-deep"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h1
        variants={fadeUp}
        className="font-display max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
      >
        {description}
      </motion.p>
    </div>
  );

  return (
    <section className="border-b border-line bg-white">
      {animate ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {inner}
        </motion.div>
      ) : (
        inner
      )}
    </section>
  );
}
