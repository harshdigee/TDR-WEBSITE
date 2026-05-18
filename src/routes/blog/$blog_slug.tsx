import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { fetchBlogDetail } from "@/lib/blogApi";

export const Route = createFileRoute("/blog/$blog_slug")({
  head: () => ({
    meta: [
      { title: "Blog — The Dental Roots" },
      { name: "description", content: "Expert dental tips and news from The Dental Roots." },
    ],
  }),
  component: BlogDetailPage,
});

interface FAQ { question: string; answer: string; }
interface RecentBlog { slug: string; title: string; thumbnail?: string; created_at?: string; }

interface BlogDetail {
  title: string;
  content: string;
  slug: string;
  banner_image: string;
  alt1: string;
  alt2: string;
  author_name: string;
  category_name: string;
  created_at: string;
  faq: FAQ[];
  recent_blogs: RecentBlog[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function BlogDetailPage() {
  const { blog_slug } = Route.useParams();
  const [post, setPost] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setPost(null);
    fetchBlogDetail({ data: blog_slug })
      .then((json) => {
        if (json.success && json.data) {
          setPost(json.data as BlogDetail);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [blog_slug]);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {loading && (
        <div className="mt-16 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-2 border-brand-2 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-ink-3 font-light text-sm">Loading article…</p>
          </div>
        </div>
      )}

      {error && !loading && (
        <div className="mt-16 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl mb-4 text-ink">Article not found</h1>
            <Link to="/blog" className="text-brand-2 text-sm hover:underline">← Back to Blog</Link>
          </div>
        </div>
      )}

      {post && !loading && (
        <>
          {/* Banner — CMS images already contain headline & artwork; no overlay typography */}
          <section className="relative mt-16 w-full overflow-hidden bg-brand-6/40">
            <img
              src={post.banner_image}
              alt={post.alt2 || post.title}
              className="w-full h-auto block"
              fetchPriority="high"
              loading="eager"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.src = "/assets/images/blog/banner.webp";
              }}
            />
            <h1 className="sr-only">{post.title}</h1>
          </section>

          {/* Content + Sidebar */}
          <section className="py-10 md:py-14 px-6 md:px-12 bg-white border-t border-brand-3/10">
            <div className="max-w-[1100px] mx-auto grid md:grid-cols-[1fr_300px] gap-12">
              <article>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-brand-2 text-[11px] tracking-[0.2em] uppercase font-semibold mb-8 hover:gap-3 transition-all"
                >
                  ← Back to Blog
                </Link>
                <div className="prose-dental" dangerouslySetInnerHTML={{ __html: post.content }} />

                {post.faq && post.faq.length > 0 && (
                  <div className="mt-12">
                    <h2 className="font-serif text-2xl text-ink mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                      {post.faq.map((faq, i) => (
                        <div key={i} className="border border-brand-3/20 rounded-sm overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full text-left px-5 py-4 flex items-center justify-between bg-white hover:bg-brand-6/30 transition-colors"
                          >
                            <span className="font-serif text-[15px] pr-4">{faq.question}</span>
                            <span className={`text-brand-2 text-xl flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                          </button>
                          {openFaq === i && (
                            <div className="px-5 py-4 bg-brand-6/30 text-ink-2 text-[13px] leading-relaxed">{faq.answer}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 pt-8 border-t border-brand-3/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-1 flex items-center justify-center text-white font-serif text-lg flex-shrink-0">DR</div>
                  <div>
                    <p className="font-semibold text-ink text-sm">{post.author_name || "The Dental Roots Editorial Team"}</p>
                    <p className="text-[11px] text-ink-3">Written by our panel of specialist dentists & patient educators</p>
                  </div>
                </div>
              </article>

              <aside className="space-y-6">
                <div className="bg-brand-1 text-white p-6 rounded-sm">
                  <h3 className="font-serif text-lg mb-2">Ready to Visit Us?</h3>
                  <p className="text-white/60 text-[12px] mb-4 leading-relaxed">Book an appointment at any of our 4 clinics across Delhi NCR.</p>
                  <Link to={"/contact-us" as any} className="block w-full text-center py-3 bg-brand-4 text-brand-1 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-white transition-colors rounded-sm">
                    Book Appointment
                  </Link>
                  <a href="tel:+918130750008" className="block text-center mt-3 text-brand-4 text-[11px] hover:text-white transition-colors">
                    📞 +91 81307 50008
                  </a>
                </div>

                {post.recent_blogs && post.recent_blogs.length > 0 && (
                  <div>
                    <h3 className="font-serif text-base mb-4 text-ink">Recent Articles</h3>
                    <div className="space-y-4">
                      {post.recent_blogs.slice(0, 4).map((r) => (
                        <Link key={r.slug} to={`/blog/${r.slug}` as any} className="group flex gap-3">
                          {r.thumbnail ? (
                            <img
                              src={r.thumbnail}
                              alt={r.title}
                              className="w-16 h-16 object-cover rounded-sm flex-shrink-0"
                              loading="lazy"
                              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                            />
                          ) : (
                            <div className="w-16 h-16 bg-brand-6/60 rounded-sm flex-shrink-0" />
                          )}
                          <div>
                            <p className="text-[12px] font-serif leading-snug group-hover:text-brand-2 transition-colors line-clamp-3">{r.title}</p>
                            {r.created_at && <p className="text-[10px] text-ink-3 mt-1">{formatDate(r.created_at)}</p>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </section>

          {post.recent_blogs && post.recent_blogs.length > 0 && (
            <section className="py-16 px-6 md:px-12 bg-brand-6/30">
              <div className="max-w-[1100px] mx-auto">
                <h2 className="font-serif font-light text-[clamp(22px,3vw,38px)] mb-8">
                  More from <em className="italic text-brand-2">Our Blog</em>
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {post.recent_blogs.slice(0, 3).map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}` as any} className="group block bg-white border border-brand-3/10 overflow-hidden rounded-sm hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] overflow-hidden bg-brand-6/30">
                        {r.thumbnail && (
                          <img
                            src={r.thumbnail}
                            alt={r.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="p-5">
                        {r.created_at && <p className="text-[11px] text-ink-3 mb-2">{formatDate(r.created_at)}</p>}
                        <h3 className="font-serif text-[15px] leading-snug group-hover:text-brand-2 transition-colors line-clamp-3">{r.title}</h3>
                        <div className="mt-4 text-[10px] tracking-[0.2em] uppercase text-brand-2 font-semibold">Read More →</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <SiteFooter />
    </div>
  );
}
