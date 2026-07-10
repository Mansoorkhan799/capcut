import { BlogPostGrid } from "@/components/BlogGrids";
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
        <BlogPostGrid posts={posts} />
      </div>
    </>
  );
}
