import Link from "next/link";
import type { BlogPost, ContentBlock } from "@/content/blog";
import { siteConfig } from "@/lib/site";

export function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-guide">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.type === "h2") {
          return (
            <h2 key={index} id={block.id}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return <h3 key={index}>{block.text}</h3>;
        }
        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index} className="mb-6 list-decimal space-y-2 pl-5 text-ink-muted">
              {block.items.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "callout") {
          return (
            <aside
              key={index}
              className="my-6 border border-line border-l-4 border-l-accent bg-accent-soft/40 px-4 py-4"
            >
              <p className="font-display text-sm font-semibold text-ink">
                {block.title}
              </p>
              <p className="mt-2 !mb-0 text-sm text-ink-muted">{block.text}</p>
            </aside>
          );
        }
        if (block.type === "faq") {
          return (
            <div key={index} className="not-prose my-6 border border-line bg-white">
              {block.items.map((item, i) => (
                <details
                  key={item.q}
                  className={i !== 0 ? "border-t border-line" : undefined}
                >
                  <summary className="cursor-pointer list-none px-4 py-3 font-display text-sm font-semibold text-ink">
                    {item.q}
                  </summary>
                  <p className="border-t border-line bg-bg px-4 py-3 text-sm leading-relaxed text-ink-muted">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section className="mb-8 border border-line bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
        Key takeaways
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-accent pl-3 text-sm leading-relaxed text-ink-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ArticleMeta({ post }: { post: BlogPost }) {
  return (
    <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
      <span>By {siteConfig.author.name}</span>
      <span aria-hidden>·</span>
      <time dateTime={post.updated}>Updated {post.updated}</time>
      <span aria-hidden>·</span>
      <span>{post.readTime} read</span>
      <span aria-hidden>·</span>
      <span>{post.category}</span>
    </p>
  );
}

export function RelatedReading({
  posts,
  paths,
}: {
  posts: BlogPost[];
  paths?: { href: string; label: string }[];
}) {
  if (!posts.length && !paths?.length) return null;

  return (
    <section className="mt-12 border-t border-line pt-8">
      <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
        Related reading
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block border border-line bg-white p-4 transition hover:border-accent"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {post.category}
              </p>
              <p className="mt-2 font-display text-sm font-semibold text-ink">
                {post.title}
              </p>
            </Link>
          </li>
        ))}
        {paths?.map((path) => (
          <li key={path.href}>
            <Link
              href={path.href}
              className="block border border-line bg-white p-4 transition hover:border-accent"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                Guide
              </p>
              <p className="mt-2 font-display text-sm font-semibold text-ink">
                {path.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
