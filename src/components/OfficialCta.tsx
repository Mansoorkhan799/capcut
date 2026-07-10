import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function OfficialCta({
  title = "Install CapCut through official channels",
  body = "Use CapCut.com or Google Play for a verified build. Avoid third-party mod APKs that bypass licensing and expose devices to malware.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border border-line bg-surface text-white">
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
          <a
            href={siteConfig.officialDownload}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex w-full items-center justify-center rounded-[2px] bg-white px-5 py-3 text-sm font-semibold !text-slate-900 transition hover:bg-slate-100 sm:w-auto"
          >
            Download APK
          </a>
          <Link
            href="/install"
            className="inline-flex w-full items-center justify-center rounded-[2px] border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-400 sm:w-auto"
          >
            Safe install steps
          </Link>
        </div>
      </div>
    </section>
  );
}
