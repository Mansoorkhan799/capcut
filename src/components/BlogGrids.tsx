"use client";

import Link from "next/link";
import {
  fadeUp,
  motion,
  staggerContainer,
  useMotionSafe,
} from "@/components/motion";
import type { BlogPost } from "@/content/blog";

export function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  const animate = useMotionSafe();

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2"
      initial={animate ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
    >
      {posts.map((post) => (
        <motion.div key={post.slug} variants={fadeUp}>
          <Link
            href={`/blog/${post.slug}`}
            className="block h-full border border-line bg-white p-5 transition hover:border-accent"
          >
            <motion.div
              whileHover={animate ? { y: -3 } : undefined}
              transition={{ duration: 0.25 }}
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
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function HomeBlogGrid({ posts }: { posts: BlogPost[] }) {
  const animate = useMotionSafe();

  return (
    <motion.div
      className="mt-8 grid gap-4 md:grid-cols-2"
      initial={animate ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={staggerContainer}
    >
      {posts.map((post) => (
        <motion.div key={post.slug} variants={fadeUp}>
          <Link
            href={`/blog/${post.slug}`}
            className="block border border-line p-5 transition hover:border-accent"
          >
            <motion.div whileHover={animate ? { y: -3 } : undefined}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {post.category}
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold text-ink">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {post.description}
              </p>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
