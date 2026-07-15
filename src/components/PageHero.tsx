import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

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
  return (
    <section className="border-b border-line bg-white">
      {crumbs && (
        <BreadcrumbJsonLd
          items={crumbs.map((crumb) => ({
            name: crumb.label,
            href: crumb.href,
          }))}
        />
      )}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        {crumbs && (
          <nav
            aria-label="Breadcrumb"
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
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-deep">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
