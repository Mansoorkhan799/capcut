"use client";

import Link from "next/link";
import { motion, useMotionSafe } from "@/components/motion";
import { siteConfig } from "@/lib/site";

export function OfficialCta({
  title = "Want CapCut Pro features without Mod APK risk?",
  body = "CapCut Pro Mod APK searches usually want no watermark and premium unlocks. Use CapCut.com or Google Play for verified builds and official Pro—not cracked packages.",
}: {
  title?: string;
  body?: string;
}) {
  const animate = useMotionSafe();

  return (
    <motion.section
      className="border border-line bg-surface text-white"
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col gap-6 px-5 py-8 sm:px-8 sm:py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="min-w-0 max-w-xl">
          <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
            {title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            {body}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <motion.a
            href={siteConfig.officialDownload}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex w-full items-center justify-center rounded-[2px] bg-white px-5 py-3 text-sm font-semibold !text-slate-900 transition hover:bg-slate-100 sm:w-auto"
            whileHover={animate ? { y: -2 } : undefined}
            whileTap={animate ? { scale: 0.98 } : undefined}
          >
            Download APK
          </motion.a>
          <motion.div
            whileHover={animate ? { y: -2 } : undefined}
            whileTap={animate ? { scale: 0.98 } : undefined}
            className="w-full sm:w-auto"
          >
            <Link
              href="/install"
              className="inline-flex w-full items-center justify-center rounded-[2px] border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-400"
            >
              Safe install steps
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
