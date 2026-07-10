import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-display flex items-center gap-3 text-xl font-semibold tracking-tight text-ink">
            <img
              src="/capcut-pro-mod-apk.webp"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-[2px]"
            />
            CapCut Pro Guide
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
            Independent documentation on CapCut Pro features, AI tools, and safe
            official installation. We do not distribute cracked or modded APK
            files.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Not affiliated with ByteDance or CapCut. CapCut is a trademark of its
            respective owners.
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Follow CapCut
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {siteConfig.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-line bg-bg px-3 py-1.5 text-xs font-medium text-ink-muted transition hover:border-slate-400 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Documentation
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-muted transition hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line bg-bg">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {siteConfig.domain} · Updated{" "}
            {siteConfig.updated}
          </p>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
