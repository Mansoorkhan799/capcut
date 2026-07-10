import Link from "next/link";
import {
  ArticleMeta,
  BlogContent,
  KeyTakeaways,
  RelatedReading,
} from "@/components/BlogContent";
import { JsonLd } from "@/components/JsonLd";
import { OfficialCta } from "@/components/OfficialCta";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/content/blog";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return createMetadata({
      title: "Article not found",
      description: "This CapCut guide article could not be found.",
      path: `/blog/${slug}`,
    });
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Article not found</h1>
        <Link href="/blog" className="btn-primary mt-6 inline-flex">
          Back to blog
        </Link>
      </div>
    );
  }

  const related = getRelatedPosts(post);
  const faqBlock = post.content.find((b) => b.type === "faq");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated,
          author: {
            "@type": "Organization",
            name: siteConfig.author.name,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
          keywords: post.keywords.join(", "),
        }}
      />
      {faqBlock && faqBlock.type === "faq" && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqBlock.items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }}
        />
      )}

      <article className="border-b border-line bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-ink">
              Blog
            </Link>
            <span>/</span>
            <span className="text-ink-muted">{post.category}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-deep">
            {post.category}
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <ArticleMeta post={post} />
        </div>
      </article>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <KeyTakeaways items={post.keyTakeaways} />
        <BlogContent blocks={post.content} />
        <RelatedReading posts={related} paths={post.relatedPaths} />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <OfficialCta />
      </div>
    </>
  );
}
