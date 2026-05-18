import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Photo, Video & Media | The Dental Roots" },
      { name: "description", content: "Explore before & after transformations, clinic photos, video testimonials, and media coverage at The Dental Roots." },
    ],
  }),
  component: GalleryPage,
});

const galleryPhotos = [
  "/assets/images/art-dental1.webp",
  "/assets/images/art-dental2.webp",
  "/assets/images/art-dental3.webp",
  "/assets/images/art-dental4.webp",
  "/assets/images/art-dental5.webp",
  "/assets/images/art-dental6.webp",
  "/assets/images/general-dentistry1.webp",
  "/assets/images/general-dentistry2.webp",
  "/assets/images/general-dentistry3.webp",
  "/assets/images/experience_img1.webp",
  "/assets/images/experience_img2.webp",
  "/assets/images/experience_img3.webp",
  "/assets/images/home-team1.webp",
  "/assets/images/home-team2.webp",
  "/assets/images/home-team3.webp",
  "/assets/images/home-team4.webp",
  "/assets/images/home-team5.webp",
  "/assets/images/home-team6.webp",
  "/assets/images/home-team7.webp",
  "/assets/images/home-team8.webp",
  "/assets/images/multiple-location-img1.webp",
  "/assets/images/panchshhel-img-new.webp",
  "/assets/images/tata-parmiti-img.webp",
  "/assets/images/sushant-lock-img1.webp",
];

const galleryVideos = [
  { img: "/assets/images/GalleryImageServices/patient-2-patients-testimonial.webp", title: "Patient Testimonial", videoId: "rjXuCqL3G4I" },
  { img: "/assets/images/GalleryImageServices/patient-1-patients-testimonial.webp", title: "Saniya — The Dental Roots Gurgaon", videoId: "encIs7M3wmk" },
  { img: "/assets/images/GalleryImageServices/rashalika-sabharwal-celebrity-testimonials.webp", title: "Rashalika Sabharwal", videoId: "yRO28v1eldQ" },
  { img: "/assets/images/GalleryImageServices/srishti-rana-1-celebrity-testimonials.webp", title: "Srishti Rana", videoId: "s8gu2FA110U" },
  { img: "/assets/images/GalleryImageServices/rannvijay-singh-singha-2-celebrity-testimonials.webp", title: "Rannvijay Singh Singha", videoId: "OpaI0tV9h7E" },
  { img: "/assets/images/GalleryImageServices/patient-patients-testimonial.webp", title: "Patient — Dental Treatments in Gurgaon", videoId: "pkGLJNjUevg" },
];

const mediaItems = [
  { thumb: "/assets/images/media-image1.webp", full: "/assets/images/overlay-image1.png" },
  { thumb: "/assets/images/media-image2.webp", full: "/assets/images/overlay-image2.png" },
  { thumb: "/assets/images/media-image3.webp", full: "/assets/images/overlay-image_new.png" },
  { thumb: "/assets/images/media-image4.webp", full: "/assets/images/painless-overlay.png" },
  { thumb: "/assets/images/media-image5.webp", full: "/assets/images/smile-overlay.png" },
  { thumb: "/assets/images/media-image6.webp", full: "/assets/images/celebrity-overlay.png" },
  { thumb: "/assets/images/media-image7.webp", full: "/assets/images/timesindia-overlay.png" },
  { thumb: "/assets/images/media-image8.webp", full: "/assets/images/root-overlay.png" },
];

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <iframe src={src} className="w-full h-full rounded-lg" allow="autoplay; encrypted-media" allowFullScreen title="Video" />
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-brand-4">✕ Close</button>
      </div>
    </div>
  );
}

function LightboxModal({ src, onClose }: { src: string; onClose: () => void }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Gallery" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-brand-4">✕ Close</button>
      </div>
    </div>
  );
}

function GalleryPage() {
  const [videoSrc, setVideoSrc] = useState("");
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [activeTab, setActiveTab] = useState<"photos" | "videos" | "media">("photos");

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── BANNER ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/gallery-banner.webp" alt="Gallery" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" onError={(e) => { (e.target as HTMLImageElement).src = "/assets/images/dental-roots-bg.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Our Work</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-4 max-w-2xl">
            Gallery
          </h1>
        </div>
      </section>

      {/* ─── GALLERY CONTENT ─── */}
      <section className="py-16 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          {/* Tabs */}
          <div className="flex gap-0 mb-12 border border-brand-3/20 w-fit">
            {(["photos", "videos", "media"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold transition-all ${activeTab === tab ? "bg-brand-2 text-white" : "text-ink-3 hover:text-ink"}`}
              >
                {tab === "photos" ? "Photo Gallery" : tab === "videos" ? "Video Gallery" : "Newspaper Articles"}
              </button>
            ))}
          </div>

          {activeTab === "photos" && (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-0.5 space-y-0.5">
              {galleryPhotos.map((src) => (
                <div
                  key={src}
                  className="group relative overflow-hidden break-inside-avoid cursor-pointer mb-0.5 block"
                  onClick={() => setLightboxSrc(src)}
                >
                  <img src={src} alt="Gallery" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-1/0 group-hover:bg-brand-1/40 transition-colors flex items-center justify-center">
                    <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">⊕</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5">
              {galleryVideos.map((v) => (
                <div key={v.videoId} className="group relative overflow-hidden bg-white border border-brand-3/10 cursor-pointer" onClick={() => setVideoSrc(`https://www.youtube.com/embed/${v.videoId}?autoplay=1`)}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-brand-1/30 group-hover:bg-brand-1/60 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                        <span className="text-white text-xl ml-1">▶</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif text-sm font-medium">{v.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "media" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
              {mediaItems.map((m) => (
                <div key={m.thumb} className="group relative overflow-hidden cursor-pointer" onClick={() => setLightboxSrc(m.full)}>
                  <div className="aspect-square overflow-hidden">
                    <img src={m.thumb} alt="Media Coverage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-brand-1/0 group-hover:bg-brand-1/40 transition-colors flex items-center justify-center">
                    <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">⊕</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
      <VideoModal src={videoSrc} onClose={() => setVideoSrc("")} />
      <LightboxModal src={lightboxSrc} onClose={() => setLightboxSrc("")} />
    </div>
  );
}
