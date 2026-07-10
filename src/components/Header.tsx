"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/capcut-pro-mod-apk.webp"
            alt="CapCut Pro"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 rounded-[2px]"
            priority
          />
          <span className="font-display truncate text-[1.05rem] font-semibold tracking-tight text-ink">
            CapCut Pro
            <span className="ml-2 hidden font-body text-xs font-medium tracking-normal text-ink-muted sm:inline">
              Technical Guide
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.officialDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !py-2 !text-[13px] sm:inline-flex"
          >
            Official Download
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-line bg-white lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span
                className={`h-px bg-ink transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span className={`h-px bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-px bg-ink transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line py-3.5 text-sm font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.officialDownload}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 mb-2"
              onClick={() => setOpen(false)}
            >
              Official Download
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
