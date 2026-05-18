import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials | Celebrity & Patient Reviews | The Dental Roots" },
      { name: "description", content: "Real patient stories and celebrity testimonials at The Dental Roots. Watch videos from our satisfied patients across India and 40+ countries." },
    ],
  }),
  component: TestimonialsPage,
});

const celebrities = [
  { img: "/assets/images/GalleryImage/patient-21-patients-testimonials.webp", name: "Khushi Mishra", designation: "Celebrity", videoId: "WdxtSEue_8U" },
  { img: "/assets/images/GalleryImage/rashalika-sabharwal-celebrity-testimonials.webp", name: "Rashalika Sabharwal", designation: "Indian Actress, Model, Miss North India, and Social Media Influencer", videoId: "yRO28v1eldQ" },
  { img: "/assets/images/GalleryImage/srishti-rana-1-celebrity-testimonials.webp", name: "Srishti Rana", designation: "Miss India Universe and Miss Asia Pacific World 2013", videoId: "s8gu2FA110U" },
  { img: "/assets/images/GalleryImage/rannvijay-singh-singha-2-celebrity-testimonials.webp", name: "Rannvijay Singh Singha", designation: "Bollywood, TV Actor", videoId: "OpaI0tV9h7E" },
];

const patients = [
  { img: "/assets/images/GalleryImage/ravi-mehra-s-dental-transformation-patients-testimonials.webp", name: "Ravi Mehra", designation: "Ravi Mehra's Dental Transformation", videoId: "I2Tr1cGpvCY" },
  { img: "/assets/images/GalleryImage/the-dental-rootsa-patients-testimonials.webp", name: "Patient", designation: "Patient Testimonial", videoId: "fuAtLHvTNeM" },
  { img: "/assets/images/GalleryImage/the-dental-roots-patients-testimonials.webp", name: "The Dental Roots", designation: "Patient Testimonial", videoId: "TamuFRKyFHw" },
  { img: "/assets/images/GalleryImage/dental-clinic-in-south-delhi-patients-testimonials.webp", name: "Dental Clinic in South Delhi", designation: "Patient Testimonial", videoId: "mtyCPM89eIc" },
  { img: "/assets/images/GalleryImage/international-patient-feedback-at-the-dental-roots-patients-testimonials.webp", name: "International Patient Feedback", designation: "The Dental Roots", videoId: "8xGT3ktIUQA" },
  { img: "/assets/images/GalleryImage/patient-testimonials-the-dental-roots-gurugram-patients-testimonials.webp", name: "Patient Testimonials Gurugram", designation: "Patient Testimonial", videoId: "ofngHUxcM2c" },
  { img: "/assets/images/GalleryImage/the-dental-roots-dental-clinic-in-gurgaon-patient-testimonials-patients-testimonials.webp", name: "The Dental Roots Gurgaon", designation: "Patient Testimonial", videoId: "ScJJVEgPPM8" },
  { img: "/assets/images/GalleryImage/best-dental-clinic-for-international-patients-patients-testimonials.webp", name: "Best Dental Clinic for International Patients", designation: "Patient Testimonial", videoId: "nE_i842aI5Q" },
  { img: "/assets/images/GalleryImage/painless-and-comfortable-dental-care-experience-patients-testimonials.webp", name: "Painless and Comfortable Dental Care", designation: "Patient Testimonial", videoId: "3PaPiZj167I" },
  { img: "/assets/images/GalleryImage/patient-testimonial-at-the-dental-roots-patients-testimonials.webp", name: "Patient Testimonial at The Dental Roots", designation: "Patient Testimonial", videoId: "hfkgdxkcGcg" },
  { img: "/assets/images/GalleryImage/neeta-pathak-patients-testimonials.webp", name: "Neeta Pathak", designation: "Patient Testimonial", videoId: "Y4NDkv-sBws" },
  { img: "/assets/images/GalleryImage/saroj-singh-patients-testimonials.webp", name: "Saroj Singh", designation: "Patient Testimonial", videoId: "JVPevi31rJE" },
  { img: "/assets/images/GalleryImage/malika-reyansh-patients-testimonials.webp", name: "Malika & Reyansh", designation: "Patient Testimonial", videoId: "-6eVkZH2768" },
  { img: "/assets/images/GalleryImage/sukhmani-randhava-patients-testimonials.webp", name: "Sukhmani Randhava", designation: "Patient Testimonial", videoId: "hli7SkxEA04" },
  { img: "/assets/images/GalleryImage/nishu-patients-testimonials.webp", name: "Nishu", designation: "Patient Testimonial", videoId: "Jhs8bcnyZY4" },
  { img: "/assets/images/GalleryImage/pranav-patients-testimonials.webp", name: "Pranav", designation: "Patient Testimonial", videoId: "rIJo4hBejO0" },
  { img: "/assets/images/GalleryImage/navneet-misser-patients-testimonials.webp", name: "Navneet Misser", designation: "Patient Testimonial", videoId: "ZhxOBqx4_7k" },
  { img: "/assets/images/GalleryImage/rai-banerjee-patients-testimonials.webp", name: "Rai Banerjee", designation: "Patient Testimonial", videoId: "g2iEhmdDrpw" },
  { img: "/assets/images/GalleryImage/sunil-chhabra-patients-testimonials.webp", name: "Sunil Chhabra", designation: "Patient Testimonial", videoId: "amay2aJqZDU" },
  { img: "/assets/images/GalleryImage/kriti-johri-patients-testimonials.webp", name: "Kriti Johri", designation: "Patient Testimonial", videoId: "3BRxFXM1n7Y" },
  { img: "/assets/images/GalleryImage/keisha-sethi-patients-testimonials.webp", name: "Keisha Sethi", designation: "Patient Testimonial", videoId: "e-a7CbIQnU4" },
  { img: "/assets/images/GalleryImage/indu-kaushik-patients-testimonials.webp", name: "Indu Kaushik", designation: "Patient Testimonial", videoId: "9YDGiDCQduQ" },
  { img: "/assets/images/GalleryImage/shonalee-basu-patients-testimonials.webp", name: "Shonalee Basu", designation: "Patient Testimonial", videoId: "4Y1PhgTHRe0" },
  { img: "/assets/images/GalleryImage/neha-awasthi-patients-testimonials.webp", name: "Neha Awasthi", designation: "Patient Testimonial", videoId: "4_V_G0we_98" },
  { img: "/assets/images/GalleryImage/kunal-goel-patients-testimonials.webp", name: "Kunal Goel", designation: "Patient Testimonial", videoId: "0D3khmohfgg" },
  { img: "/assets/images/GalleryImage/pallavi-dani-patients-testimonials.webp", name: "Pallavi Dani", designation: "Patient Testimonial", videoId: "CNz5JPMpDDU" },
  { img: "/assets/images/GalleryImage/daniel-sleigh-patients-testimonials.webp", name: "Daniel Sleigh", designation: "Patient Testimonial", videoId: "A0po-wwZImM" },
  { img: "/assets/images/GalleryImage/amitabh-lehri-s-patients-testimonials.webp", name: "Amitabh Lehri", designation: "Patient Testimonial", videoId: "ik-6xxm6I3w" },
  { img: "/assets/images/GalleryImage/apoorv-sadana-patients-testimonials.webp", name: "Apoorv Sadana", designation: "Patient Testimonial", videoId: "XnRoS_vg38E" },
  { img: "/assets/images/GalleryImage/jyoti-and-advik-agarwal-patients-testimonials.webp", name: "Jyoti and Advik Agarwal", designation: "Patient Testimonial", videoId: "-L1QNR65Yuc" },
  { img: "/assets/images/GalleryImage/radha-patients-testimonials.webp", name: "Radha", designation: "Patient Testimonial", videoId: "asxeC322xlI" },
  { img: "/assets/images/GalleryImage/kamala-batra-patients-testimonials.webp", name: "Kamala Batra", designation: "Patient Testimonial", videoId: "jBqM8o0rsNA" },
  { img: "/assets/images/GalleryImage/nikhil-bhatia-patients-testimonials.webp", name: "Nikhil Bhatia", designation: "Patient Testimonial", videoId: "R8MU-tg-SKU" },
  { img: "/assets/images/GalleryImage/shriya-agarwal-patients-testimonials.webp", name: "Shriya Agarwal", designation: "Patient Testimonial", videoId: "KBp4GBYv5Sg" },
  { img: "/assets/images/GalleryImage/garima-singh-patients-testimonials.webp", name: "Garima Singh", designation: "The Dental Roots Experience", videoId: "aSaxGUb1m8k" },
  { img: "/assets/images/GalleryImage/sanjay-gaur-patients-testimonials.webp", name: "Sanjay Gaur", designation: "Patient Video Testimonial", videoId: "O8o8q33098M" },
  { img: "/assets/images/GalleryImage/raginee-shah-patients-testimonials.webp", name: "Raginee Shah", designation: "Patient Video Testimonial", videoId: "JiFLz6jC-zM" },
  { img: "/assets/images/GalleryImage/patient-2-patients-testimonial.webp", name: "Patient 2", designation: "The Dental Roots", videoId: "rjXuCqL3G4I" },
  { img: "/assets/images/GalleryImage/patient-1-patients-testimonial.webp", name: "Saniya", designation: "The Dental Roots Gurgaon", videoId: "encIs7M3wmk" },
  { img: "/assets/images/GalleryImage/patient-patients-testimonial.webp", name: "Patient", designation: "Dental Treatments in Gurgaon", videoId: "pkGLJNjUevg" },
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

function TestimonialCard({ t, onPlay }: { t: { img: string; name: string; designation: string; videoId: string }; onPlay: () => void }) {
  return (
    <div className="group relative overflow-hidden bg-white border border-brand-3/10 cursor-pointer" onClick={onPlay}>
      <div className="aspect-[4/3] overflow-hidden relative">
        <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        <div className="absolute inset-0 bg-brand-1/30 group-hover:bg-brand-1/60 transition-colors flex items-center justify-center">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
            <span className="text-white text-base ml-0.5">▶</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-serif text-sm font-medium">{t.name}</h4>
        <p className="text-[10px] text-ink-3 mt-0.5 leading-snug">{t.designation}</p>
      </div>
    </div>
  );
}

function TestimonialsPage() {
  const [videoSrc, setVideoSrc] = useState("");
  const [activeTab, setActiveTab] = useState<"celebrities" | "patients">("celebrities");

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── BANNER ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/testimonials-banner-the-dental-roots.webp" alt="Testimonials" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" onError={(e) => { (e.target as HTMLImageElement).src = "/assets/images/dental-roots-bg.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Real People. Real Stories.</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-4 max-w-2xl">
            Patient Testimonials
          </h1>
        </div>
      </section>

      {/* ─── TABS + GRID ─── */}
      <section className="py-16 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          {/* Tab switcher */}
          <div className="flex gap-0 mb-12 border border-brand-3/20 w-fit">
            <button
              onClick={() => setActiveTab("celebrities")}
              className={`px-8 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold transition-all ${activeTab === "celebrities" ? "bg-brand-2 text-white" : "text-ink-3 hover:text-ink"}`}
            >
              Celebrity Testimonials
            </button>
            <button
              onClick={() => setActiveTab("patients")}
              className={`px-8 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold transition-all ${activeTab === "patients" ? "bg-brand-2 text-white" : "text-ink-3 hover:text-ink"}`}
            >
              Patient Testimonials
            </button>
          </div>

          {activeTab === "celebrities" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
              {celebrities.map((t) => (
                <TestimonialCard key={t.videoId} t={t} onPlay={() => setVideoSrc(`https://www.youtube.com/embed/${t.videoId}?autoplay=1`)} />
              ))}
            </div>
          )}

          {activeTab === "patients" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
              {patients.map((t) => (
                <TestimonialCard key={t.videoId} t={t} onPlay={() => setVideoSrc(`https://www.youtube.com/embed/${t.videoId}?autoplay=1`)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── BOOK CTA ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-1 text-center">
        <h2 className="font-serif font-light text-3xl md:text-5xl text-white mb-4">Join Our Happy Patient Family</h2>
        <p className="text-white/70 font-light mb-8 max-w-lg mx-auto">Experience world-class dental care that has transformed smiles across 40+ countries.</p>
        <Link to="/contact-us" className="inline-flex items-center px-10 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-6 transition-all rounded-full">
          Book Free Consultation
        </Link>
      </section>

      <SiteFooter />
      <VideoModal src={videoSrc} onClose={() => setVideoSrc("")} />
    </div>
  );
}
