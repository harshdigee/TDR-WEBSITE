import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { fetchBlogList } from "@/lib/blogApi";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Our Blogs — The Dental Roots" },
      { name: "description", content: "Stay informed with the latest updates on modern dental practices at The Dental Roots!" },
    ],
  }),
  component: BlogPage,
});

interface BlogListItem {
  slug: string;
  title: string;
  alt1: string;
  thumbnail: string;
  created_at: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

const PER_PAGE = 12;

function BlogPage() {
  const [posts, setPosts] = useState<BlogListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchBlogList()
      .then((json) => {
        if (json.success && Array.isArray(json.data)) {
          setPosts(json.data as BlogListItem[]);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const visible = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden mt-16">
        <img
          src="/assets/images/blog/banner-listing.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (!img.dataset.fallback) {
              img.dataset.fallback = "1";
              img.src = "/assets/images/blog/banner.webp";
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-1/85 via-brand-1/40 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-14 text-center">
          <h1 className="font-serif font-light text-[clamp(36px,5vw,72px)] leading-[1.08] text-white mb-3">
            Our Blogs
          </h1>
          <p className="text-white/75 font-light text-lg">
            Stay informed with the latest updates on modern dental practices at The Dental Roots!
          </p>
          {!loading && posts.length > 0 && (
            <p className="text-white/50 text-sm mt-2">{posts.length} articles</p>
          )}
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-brand-6/60 aspect-[4/3] rounded-sm mb-4" />
                  <div className="h-4 bg-brand-6/60 rounded w-1/3 mb-3" />
                  <div className="h-5 bg-brand-6/40 rounded mb-2" />
                  <div className="h-5 bg-brand-6/40 rounded w-3/4" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <p className="text-ink-3 font-light">Unable to load blog posts. Please try again later.</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visible.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}` as any}
                    className="group block rounded-sm overflow-hidden border border-brand-3/10 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={post.thumbnail}
                        alt={post.alt1 || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.src = "/assets/images/blog/banner.webp";
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <span className="text-[11px] text-white/80 font-light">{formatDate(post.created_at)}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="font-serif text-[18px] leading-snug mb-3 group-hover:text-brand-2 transition-colors line-clamp-3">
                        {post.title}
                      </h2>
                      <div className="mt-4 flex items-center gap-2 text-brand-2 text-[11px] tracking-[0.2em] uppercase font-semibold">
                        Read More <span className="text-base">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-14 flex-wrap">
                  <button
                    onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo(0, 0); }}
                    disabled={page === 1}
                    className="px-5 py-2.5 border border-brand-2 text-brand-2 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-brand-2 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed rounded-sm"
                  >
                    ← Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                    .reduce<(number | string)[]>((acc, p, idx, arr) => {
                      if (idx > 0 && (p as number) - (arr[idx - 1] as number) > 1) acc.push("…");
                      acc.push(p);
                      return acc;
                    }, [])
                    .map((p, i) =>
                      p === "…" ? (
                        <span key={`ellipsis-${i}`} className="px-2 text-ink-3">…</span>
                      ) : (
                        <button
                          key={p}
                          onClick={() => { setPage(p as number); window.scrollTo(0, 0); }}
                          className={`w-9 h-9 text-[12px] font-semibold rounded-sm transition-all ${
                            page === p
                              ? "bg-brand-2 text-white"
                              : "border border-brand-3/20 text-ink-2 hover:border-brand-2 hover:text-brand-2"
                          }`}
                        >
                          {p}
                        </button>
                      )
                    )}
                  <button
                    onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo(0, 0); }}
                    disabled={page === totalPages}
                    className="px-5 py-2.5 border border-brand-2 text-brand-2 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-brand-2 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed rounded-sm"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
