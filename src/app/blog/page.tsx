import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getAllPosts } from "@/content/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "CapCut Blog: Pro Tips, Safety Guides & Install Fixes",
  description:
    "CapCut Pro blog: mod APK safety, official download steps, Pro vs free, watermark removal, export settings, and Android troubleshooting.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="CapCut guides built for search intent"
        description="Practical articles on CapCut Pro features, official installs, watermark-free exports, and why cracked mod APKs are a bad trade."
        crumbs={[{ href: "/blog", label: "Blog" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border border-line bg-white p-5 transition hover:border-accent"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold uppercase tracking-[0.12em] text-accent-deep">
                  {post.category}
                </span>
                <span aria-hidden>·</span>
                <time dateTime={post.updated}>{post.updated}</time>
                <span aria-hidden>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-display mt-3 text-xl font-semibold tracking-tight text-ink">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {post.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent-deep">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
