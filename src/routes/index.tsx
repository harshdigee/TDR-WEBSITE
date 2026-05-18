import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Dental Roots — Excellence in Dentistry | Delhi & Gurugram" },
      { name: "description", content: "India's most trusted dental clinic. Implants, veneers, smile makeovers, Invisalign, Kid's Dentistry across Delhi & Gurugram. Book a free consultation today." },
    ],
  }),
  component: Home,
});

const stats = [
  { n: "25", suf: "+", l: "Years of Excellence" },
  { n: "50K", suf: "+", l: "Smiles Transformed" },
  { n: "4", suf: "", l: "Luxury Clinics" },
  { n: "40", suf: "+", l: "Countries Served" },
];


const experiences = [
  {
    img: "/assets/images/experience_img3.webp",
    title: "Precision & Innovation",
    desc: "Technology at The Dental Roots is transformative. Every scanner, laser, or microscope is here to serve a purpose: better outcomes with seamless experience.",
  },
  {
    img: "/assets/images/experience_img2.webp",
    title: "Legacy of Trust",
    desc: "With every consultation, treatment, and smile restored, we honour your trust — making The Dental Roots India's most preferred clinic for personalised, compassionate care.",
  },
  {
    img: "/assets/images/experience_img1.webp",
    title: "Highest Standard",
    desc: "The Dental Roots has a team of specialists with global experience and unmatched Quality Standards of treatment, sterilisation protocols and tooth preservation.",
  },
];

const excellenceServices = [
  {
    img: "/assets/images/general-dentistry1.webp",
    title: "Cosmetic Dentistry",
    desc: "Natural-looking smile enhancements for your perfect, confident smile.",
    href: "/kids-dentistry",
  },
  {
    img: "/assets/images/general-dentistry2.webp",
    title: "Surgical Dentistry & Implants",
    desc: "Expert surgical care for lasting oral restoration and confident, healthy smiles.",
    href: "/full-mouth-dental-implant-treatment-clinic",
  },
  {
    img: "/assets/images/general-dentistry3.webp",
    title: "Routine & Preventive Dentistry",
    desc: "Protect your smile with regular checkups, cleanings, and preventive care.",
    href: "/services",
  },
];

const testimonials = [
  {
    img: "/assets/images/srishti-rana-1-celebrity-testimonials.webp",
    text: '"Absolutely loved my experience at The Dental Roots! The team\'s expertise and warmth made my smile camera-ready in no time."',
    name: "Srishti Rana",
    role: "Miss Asia Pacific World 2013",
  },
  {
    img: "/assets/images/rannvijay-singh-singha-2-celebrity-testimonials.webp",
    text: '"The Dental Roots exceeded expectations. Their modern facilities, skilled professionals, and patient-first approach define excellence in dental care."',
    name: "Rannvijay Singh Singha",
    role: "TV-Personality, Host, VJ",
  },
  {
    img: "/assets/images/rashalika-sabharwal-celebrity-testimonials.webp",
    text: '"The Dental Roots exceeded all my expectations! Their attention to detail and personalized care truly transformed my dental experience."',
    name: "Rashalika Sabharwal",
    role: "Indian Actress, Miss North India",
  },
  {
    img: "/assets/images/aylin-image.webp",
    text: '"Travelled all the way from Turkey for my dental treatment at The Dental Roots! Truly amazed by their professionalism and care — worth every mile for this smile."',
    name: "Aylin",
    role: "International Customer",
  },
  {
    img: "/assets/images/saniya-image.webp",
    text: '"Such a warm and professional team! They brought back my confidence with a smile I now love to show off every day."',
    name: "Saniya",
    role: "Happy Customer",
  },
  {
    img: "/assets/images/story-image2.webp",
    text: '"The Dental Roots was truly impressive. The clinic\'s advanced technology, expert team, and attention to detail reflect the highest standards of dental care."',
    name: "Rita Goodwin",
    role: "Social Media Influencer",
  },
];

const teamMembers = [
  { name: "Dr. Priyanka Bhat", bio: "Prosthodontics, Crown and Bridge and Implantology (B.D.S., M.D.S.)", img: "/assets/images/home-team1.webp" },
  { name: "Dr. Tanmay Mittal", bio: "Orthodontics and Dentofacial Orthopaedics (B.D.S, M.D.S)", img: "/assets/images/home-team2.webp" },
  { name: "Dr. Sarveshwari Singh", bio: "Conservative Dentistry and Endodontics (B.D.S, M.D.S)", img: "/assets/images/home-team5.webp" },
  { name: "Dr. Esha Goel", bio: "Specialist Endodontist (B.D.S., MClinDent Endo, M Endo RCSEd)", img: "/assets/images/home-team4.webp" },
  { name: "Dr. Vijay Siwach", bio: "Oral and Maxillofacial Surgery (B.D.S, M.D.S)", img: "/assets/images/home-team3.webp" },
  { name: "Dr. Ritika Gupta", bio: "(B.D.S.)", img: "/assets/images/home-team6.webp" },
];

const locations = [
  { img: "/assets/images/multiple-location-img1.webp", link: "https://maps.app.goo.gl/koQWeTU73tQaobSc9", title: "Golf Course Road — Gurugram" },
  { img: "/assets/images/panchshhel-img-new.webp", link: "https://maps.app.goo.gl/2xkk3DzcCL9LC1zt9", title: "Panchsheel Park — Delhi" },
  { img: "/assets/images/tata-parmiti-img.webp", link: "https://maps.app.goo.gl/Vv3v8asauAvwTcBR7", title: "Tata Primanti — Gurugram" },
  { img: "/assets/images/sushant-lock-img1.webp", link: "https://maps.app.goo.gl/7YBPSFCwhjPcZQwD9", title: "Sushant Lok — Gurugram" },
];

const mediaLeft = [
  { thumb: "/assets/images/media-image1.webp", full: "/assets/images/overlay-image1.png" },
  { thumb: "/assets/images/media-image2.webp", full: "/assets/images/overlay-image2.png" },
  { thumb: "/assets/images/media-image3.webp", full: "/assets/images/overlay-image_new.png" },
  { thumb: "/assets/images/media-image4.webp", full: "/assets/images/painless-overlay.png" },
];

const mediaRight = [
  { thumb: "/assets/images/media-image5.webp", full: "/assets/images/smile-overlay.png" },
  { thumb: "/assets/images/media-image6.webp", full: "/assets/images/celebrity-overlay.png" },
  { thumb: "/assets/images/media-image7.webp", full: "/assets/images/timesindia-overlay.png" },
  { thumb: "/assets/images/media-image8.webp", full: "/assets/images/root-overlay.png" },
];

const smileGallery = [
  "/assets/images/art-dental6.webp",
  "/assets/images/art-dental1.webp",
  "/assets/images/art-dental2.webp",
  "/assets/images/art-dental3.webp",
  "/assets/images/art-dental4.webp",
  "/assets/images/art-dental5.webp",
];

const TICKER_ITEMS = ["Dental Implants", "Porcelain Veneers", "Smile Makeovers", "Invisalign", "Kid's Dentistry", "International Patients", "Precision & Innovation", "Legacy of Trust"];

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <iframe src={src} className="w-full h-full rounded-lg" allow="autoplay; encrypted-media" allowFullScreen title="Video" />
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-brand-4 transition-colors">✕ Close</button>
      </div>
    </div>
  );
}

function Slideshow({ images, interval = 5000 }: { images: string[]; interval?: number }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);
  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative">
      {/* Two cards side by side — image on top, quote below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[0, 1].map((offset) => {
          const item = testimonials[(idx + offset) % testimonials.length];
          return (
            <div key={`${idx}-${offset}`} className="group overflow-hidden border border-brand-3/10 bg-white hover:shadow-lg transition-shadow duration-300">
              {/* Image — fixed moderate height, crisp & clear */}
              <div className="relative overflow-hidden" style={{ height: "300px" }}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Quote content below image */}
              <div className="p-6 bg-white">
                <p className="font-serif italic font-light text-ink-2 leading-relaxed mb-5 text-[14px]">
                  {item.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-brand-2" />
                  <div>
                    <p className="font-semibold text-ink text-[13px]">{item.name}</p>
                    <p className="text-[10px] text-ink-3 tracking-wide mt-0.5">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation row */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "bg-brand-2 w-8" : "bg-brand-4/40 w-1.5"}`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 border border-brand-2 text-brand-2 hover:bg-brand-2 hover:text-white transition-all flex items-center justify-center rounded-full text-sm"
          >←</button>
          <button
            onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
            className="w-10 h-10 bg-brand-2 text-white hover:bg-brand-1 transition-all flex items-center justify-center rounded-full text-sm"
          >→</button>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [videoSrc, setVideoSrc] = useState("");
  const [smileIdx, setSmileIdx] = useState(0);
  const [activeLoc, setActiveLoc] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSmileIdx((i) => (i + 1) % smileGallery.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── HERO — full-screen video background ─── */}
      <section className="relative min-h-screen flex items-end pt-16 overflow-hidden">
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          poster="/assets/images/home/poster.webp"
        >
          <source src="/assets/videos/video-final.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Hero content — sits above the stats bar (stats bar is ~90px tall) */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 pb-28 md:pb-32 flex flex-col md:flex-row items-end justify-between gap-10">
          <div>
            <h1 className="font-serif font-light leading-[1.1] tracking-tight text-white text-[clamp(36px,5.5vw,76px)] max-w-2xl">
              Perfecting harmony<br />and confidence in<br />every radiant
            </h1>
            {/* Smile script image — contained so it never reaches the stats bar */}
            <img
              src="/assets/images/smile-img.webp"
              alt="Smile"
              className="h-14 md:h-20 w-auto mt-1 mb-2"
              loading="eager"
            />
          </div>
          <div className="shrink-0 mb-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-2 text-white text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-brand-1 transition-all hover:shadow-[0_18px_40px_-10px_rgba(107,44,126,0.6)] rounded-full"
            >
              Request an Appointment
            </Link>
          </div>
        </div>

        {/* Stats bar — pinned to very bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white/10 backdrop-blur-sm border-t border-white/20">
              {stats.map((s, i) => (
                <div key={s.l} className={`text-center py-4 px-4 ${i < stats.length - 1 ? "md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-white/10`}>
                  <div className="font-serif font-light text-white text-3xl md:text-5xl leading-none">
                    {s.n}<span className="text-brand-4 text-xl md:text-2xl">{s.suf}</span>
                  </div>
                  <div className="text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-white/60 mt-1.5 font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="bg-brand-2 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[ticker_30s_linear_infinite]">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0">
              {TICKER_ITEMS.map((t) => (
                <span key={t} className="flex items-center gap-3 px-8 text-[10px] tracking-[0.35em] uppercase text-white/75 font-medium">
                  <span className="text-brand-5">✦</span>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* ─── EXPERIENCE A WHOLE NEW KIND OF SMILE ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Our Philosophy</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(32px,4vw,56px)] leading-[1.08] tracking-tight max-w-2xl mx-auto">
              Experience a whole new <em className="italic text-brand-2">kind of smile</em>
            </h2>
            <p className="text-ink-3 leading-loose font-light mt-5 max-w-xl mx-auto">
              Traditional craftsmanship meets the best cutting-edge technology to deliver restorative dentistry with natural results and enduring benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0.5">
            {experiences.map((e) => (
              <div key={e.title} className="group relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 bg-white border border-brand-3/10 hover:bg-brand-6/40 transition-colors relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-1 to-brand-4 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                  <h3 className="font-serif text-2xl font-medium mb-3">{e.title}</h3>
                  <p className="text-sm text-ink-3 leading-relaxed font-light">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DR. DHEERAJ BIO / QUOTE ─── */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden">
        <img src="/assets/images/dheera-bg-img.webp" alt="Clinic background" className="absolute inset-0 w-full h-full object-cover opacity-60" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/95 via-brand-1/75 to-brand-1/20" />
        <div className="relative z-10 max-w-[1260px] mx-auto text-white">
          <div className="max-w-2xl">
            <div className="flex gap-4 mb-6">
              <img src="/assets/images/quote-left-img.webp" alt="Quote" className="w-8 h-8 object-contain opacity-70" loading="lazy" />
            </div>
            <blockquote className="font-serif font-light text-[clamp(22px,3.5vw,42px)] leading-[1.3] italic text-white/90 mb-8">
              <span className="not-italic text-brand-4">Dentistry</span> isn't just about fixing teeth, It's about restoring confidence, comfort, and trust — patient by patient, smile by smile.
            </blockquote>
            <p className="text-brand-4 text-[11px] tracking-[0.3em] uppercase font-medium mb-8">
              Dr. Dheeraj Setia — Founder, Chief Endodontist & Implantologist
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setVideoSrc("https://www.youtube.com/embed/v5pb0_-tZzI?autoplay=1")}
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/30 text-white text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-white/10 transition-colors rounded-full"
              >
                <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-xs">▶</span>
                Watch Video
              </button>
              <Link to="/about-us" className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-brand-4 font-semibold hover:gap-4 transition-all mt-2">
                The Man Behind the Brand <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXCELLENCE IN DENTISTRY — SERVICE CATEGORIES ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Excellence in Dentistry</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(32px,4vw,56px)] leading-[1.08] tracking-tight">
              India's leading and most trusted Dental Clinic
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0.5">
            {excellenceServices.map((s) => (
              <div key={s.title} className="bg-white border border-brand-3/10 group relative overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(107,44,126,0.15)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-8">
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-1 to-brand-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <h3 className="font-serif text-2xl font-medium mb-3">{s.title}</h3>
                  <p className="text-sm text-ink-3 leading-relaxed font-light mb-5">{s.desc}</p>
                  <Link to={s.href} className="text-[10px] tracking-[0.25em] uppercase text-brand-2 font-semibold group-hover:tracking-[0.32em] transition-all">
                    Know More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3.5 border border-brand-2 text-brand-2 text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-brand-2 hover:text-white transition-all rounded-full">
              See More Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STORIES OF TRANSFORMATION / TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brand-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Patient Stories</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(30px,4vw,52px)] leading-[1.08] tracking-tight">
                Stories of <em className="italic text-brand-2">Transformation</em>
              </h2>
            </div>
            <div className="md:max-w-sm">
              <p className="text-ink-3 font-light leading-loose mb-6 text-sm">
                No two smiles are alike. At The Dental Roots, we understand that every patient is unique — our personalised approach ensures treatments that are as individual as your smile.
              </p>
              <Link to="/testimonials" className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-brand-2 font-semibold hover:gap-4 transition-all">
                Read More Testimonials →
              </Link>
            </div>
          </div>
          {/* Full-width celebrity slider */}
          <TestimonialSlider />
        </div>
      </section>

      {/* ─── CELEBRITY / FEATURED SERVICES VIDEO SECTION ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Featured Services</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,3.5vw,50px)] leading-[1.08] tracking-tight">
              Trusted by <em className="italic text-brand-2">Celebrities & Experts</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Card 1 — Invisalign */}
            <div
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              style={{ aspectRatio: "4/3" }}
              onClick={() => setVideoSrc("https://www.youtube.com/embed/MiJ-fvP55bo?autoplay=1")}
            >
              <img
                src="/assets/images/new-img5.webp"
                alt="Invisalign Treatment"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              {/* Logo top-left */}
              <div className="absolute top-5 left-5">
                <img src="/assets/images/new-invisalign-Logo.webp" alt="Invisalign" className="h-8 object-contain" loading="lazy" />
              </div>
              {/* Play button center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
                </div>
              </div>
              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-white text-xl font-medium mb-1">Invisalign treatment</h3>
                <p className="text-white/70 text-sm">You could start to see your new smile in as little as 6 months</p>
              </div>
            </div>

            {/* Card 2 — Aligner Solutions */}
            <div
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              style={{ aspectRatio: "4/3" }}
              onClick={() => setVideoSrc("https://www.youtube.com/embed/qWFeli8OBk8?autoplay=1")}
            >
              <img
                src="/assets/images/new-img6.webp"
                alt="Aligner Solutions for Dentists"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              {/* Logo top-left */}
              <div className="absolute top-5 left-5">
                <img src="/assets/images/new-whiteLogo.webp" alt="Illusion Aligners" className="h-8 object-contain" loading="lazy" />
              </div>
              {/* Play button center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
                </div>
              </div>
              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-white text-xl font-medium mb-1">Aligner Solutions for Dentists</h3>
                <p className="text-white/70 text-sm">India's leading and most trusted Dental Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHERE ART MEETS PRECISION ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Art & Precision</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(32px,4vw,56px)] leading-[1.08] tracking-tight">
              Where Art Meets Precision in <em className="italic text-brand-2">Every Smile</em>
            </h2>
            <p className="text-ink-3 font-light leading-loose max-w-xl mx-auto mt-5">
              Our award-winning dental team are committed to providing exceptional dental care for all patients.
            </p>
          </div>
          <div className="relative h-[40vh] max-h-[340px] overflow-hidden bg-brand-6">
            {smileGallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Dental artistry"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === smileIdx ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/30 to-transparent">
              <div className="flex gap-2">
                {smileGallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSmileIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === smileIdx ? "bg-white w-6" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR TEAM ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col md:flex-row gap-14 items-start">
            <div className="md:w-64 shrink-0">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brand-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Our Team</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(30px,4vw,48px)] leading-[1.08] tracking-tight mb-5">
                Expert <em className="italic text-brand-2">Specialists</em>
              </h2>
              <p className="text-ink-3 font-light leading-loose mb-7 text-sm">
                Our award-winning dental team is committed to providing exceptional dental care for all patients.
              </p>
              <Link to="/about-us" className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-brand-2 font-semibold hover:gap-4 transition-all">
                See All Members →
              </Link>
            </div>
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5">
                {teamMembers.map((m) => (
                  <div key={m.name} className="group relative overflow-hidden bg-white border border-brand-3/10">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-1/95 to-transparent text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                      <h3 className="font-serif text-base font-medium">{m.name}</h3>
                      <p className="text-[10px] text-brand-5 mt-0.5 leading-snug">{m.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEDIA COVERAGE ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brand-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">In the Media</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-tight">
                The media is <em className="italic text-brand-2">Buzzing</em> about Us
              </h2>
              <p className="text-ink-3 font-light leading-loose mt-4 max-w-lg">
                The pioneering practice has been recognized by health, beauty and lifestyle outlets alike because a smile makeover from The Dental Roots is something to talk about.
              </p>
            </div>
            <Link to="/gallery" className="shrink-0 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-brand-2 font-semibold hover:gap-4 transition-all">
              See all media coverage →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">
            {[...mediaLeft, ...mediaRight].map((item, i) => (
              <a
                key={i}
                href={item.full}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden aspect-square block"
              >
                <img src={item.thumb} alt="Media" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-brand-1/0 group-hover:bg-brand-1/30 transition-colors flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">+</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MULTIPLE LOCATIONS ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Visit Us</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-tight">
              Multiple Locations, <em className="italic text-brand-2">One Standard of Care</em>
            </h2>
            <p className="text-ink-3 font-light leading-loose max-w-xl mx-auto mt-5">
              Visit any of our conveniently located clinics for world-class dental care close to you.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5">
            {locations.map((loc) => (
              <a
                key={loc.title}
                href={loc.link}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden aspect-[3/4] block"
              >
                <img src={loc.img} alt={loc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-1/90 via-brand-1/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-serif text-lg font-medium">{loc.title}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-brand-4 mt-1">Get Directions →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA — Book / Gallery / Blog ─── */}
      <section className="grid md:grid-cols-3">
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden group">
          <img src="/assets/images/cabicar-img-2.webp" alt="Book Appointment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-brand-1/60 group-hover:bg-brand-1/40 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <h3 className="font-serif text-3xl font-medium mb-4">Book Appointment</h3>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-1 text-[10px] tracking-[0.22em] uppercase font-bold hover:bg-brand-6 transition-colors rounded-full">
              Book Now
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden group">
          <img src="/assets/images/cabicar-img-1.webp" alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-brand-1/60 group-hover:bg-brand-1/40 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <h3 className="font-serif text-3xl font-medium mb-4">Gallery</h3>
            <Link to="/gallery" className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-1 text-[10px] tracking-[0.22em] uppercase font-bold hover:bg-brand-6 transition-colors rounded-full">
              View Gallery
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden group">
          <img src="/assets/images/cabicar-img-3.webp" alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-brand-1/60 group-hover:bg-brand-1/40 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <h3 className="font-serif text-3xl font-medium mb-4">Blog</h3>
            <Link to="/blog" className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-1 text-[10px] tracking-[0.22em] uppercase font-bold hover:bg-brand-6 transition-colors rounded-full">
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-28 px-6 md:px-12 bg-brand-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(138,63,160,0.45),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-brand-4 font-semibold">Begin Your Journey</span>
            <span className="w-8 h-px bg-brand-4" />
          </div>
          <h2 className="font-serif font-light text-white text-[clamp(36px,5vw,68px)] leading-[1.05]">Your perfect</h2>
          <p className="font-script text-brand-4 text-[clamp(44px,6vw,86px)] leading-none my-2">smile awaits</p>
          <p className="text-white/55 font-light leading-loose mt-6 mb-12 max-w-xl mx-auto">
            Schedule a consultation with our specialists and take the first step toward the confident, radiant smile you deserve.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact-us" className="px-10 py-4 bg-white text-brand-1 text-xs tracking-[0.22em] uppercase font-bold rounded-full hover:bg-brand-6 transition-all hover:-translate-y-0.5">
              Book An Appointment
            </Link>
            <a href="tel:+919650440004" className="px-10 py-4 border border-white/30 text-white/80 hover:border-white hover:text-white text-xs tracking-[0.22em] uppercase font-medium rounded-full transition-all">
              +91-9650440004
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <VideoModal src={videoSrc} onClose={() => setVideoSrc("")} />
    </div>
  );
}
