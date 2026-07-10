"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { easeOut, useMotionSafe } from "@/components/motion";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const animate = useMotionSafe();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <motion.span
            whileHover={animate ? { rotate: -4, scale: 1.04 } : undefined}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="inline-flex"
          >
            <Image
              src="/capcut-pro-mod-apk.webp"
              alt="CapCut Pro"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-[2px]"
              priority
            />
          </motion.span>
          <span className="font-display truncate text-[1.05rem] font-semibold tracking-tight text-ink">
            CapCut Pro Mod APK
            <span className="ml-2 hidden font-body text-xs font-medium tracking-normal text-ink-muted sm:inline">
              {siteConfig.versionLabel}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={animate ? { y: -1 } : undefined}>
              <Link
                href={link.href}
                className="px-3 py-2 text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href={siteConfig.officialDownload}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="btn-primary hidden !py-2 !text-[13px] sm:inline-flex"
            whileHover={animate ? { y: -1 } : undefined}
            whileTap={animate ? { scale: 0.98 } : undefined}
          >
            Official Download
          </motion.a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-line bg-white lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <motion.span
                animate={open ? { y: 5, rotate: 45 } : { y: 0, rotate: 0 }}
                className="h-px origin-center bg-ink"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="h-px bg-ink"
              />
              <motion.span
                animate={open ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }}
                className="h-px origin-center bg-ink"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={animate ? { height: 0, opacity: 0 } : false}
            animate={{ height: "auto", opacity: 1 }}
            exit={animate ? { height: 0, opacity: 0 } : undefined}
            transition={{ duration: 0.28, ease: easeOut }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={animate ? { opacity: 0, x: -8 } : false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-line py-3.5 text-sm font-medium text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={siteConfig.officialDownload}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-primary mt-3 mb-2"
                onClick={() => setOpen(false)}
              >
                Official Download
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
