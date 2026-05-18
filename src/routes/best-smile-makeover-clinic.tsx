import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/best-smile-makeover-clinic")({
  head: () => ({
    meta: [
      { title: "Smile Makeovers in Delhi, Gurgaon (India) | Hollywood Smile | The Dental Roots" },
      { name: "description", content: "Hollywood Smile Makeover treatment in Delhi & Gurgaon. Digital 3D smile design, veneers, implants, whitening. Book a consultation at The Dental Roots." },
    ],
  }),
  component: SmileMakeoversPage,
});

const smileLogos = [
  "/assets/images/smile-logo1.webp",
  "/assets/images/smile-logo2.webp",
  "/assets/images/smile-logo3.webp",
  "/assets/images/smile-logo4.webp",
  "/assets/images/smile-logo5.webp",
  "/assets/images/smile-logo6.webp",
];

const testimonialVideos = [
  { img: "/assets/images/GalleryImageServices/patient-2-patients-testimonial.webp", name: "Patient", type: "Patient Testimonial", videoId: "rjXuCqL3G4I" },
  { img: "/assets/images/GalleryImageServices/patient-1-patients-testimonial.webp", name: "Saniya", type: "Patient Testimonial", videoId: "encIs7M3wmk" },
  { img: "/assets/images/GalleryImageServices/rashalika-sabharwal-celebrity-testimonials.webp", name: "Rashalika Sabharwal", type: "Celebrity Testimonial", videoId: "yRO28v1eldQ" },
  { img: "/assets/images/GalleryImageServices/srishti-rana-1-celebrity-testimonials.webp", name: "Srishti Rana", type: "Celebrity Testimonial", videoId: "s8gu2FA110U" },
  { img: "/assets/images/GalleryImageServices/rannvijay-singh-singha-2-celebrity-testimonials.webp", name: "Rannvijay Singh Singha", type: "Celebrity Testimonial", videoId: "OpaI0tV9h7E" },
];

const moreServices = [
  { img: "/assets/images/DetailServiceImages/implants-the-dental-roots.webp", title: "Implants", href: "/full-mouth-dental-implant-treatment-clinic" },
  { img: "/assets/images/DetailServiceImages/invisalign-and-braces-the-dental-roots.webp", title: "Invisalign", href: "/invisalign-clear-aligners-teeth-straightening" },
  { img: "/assets/images/DetailServiceImages/veneers-the-dental-roots.webp", title: "Veneers", href: "/veneers" },
  { img: "/assets/images/DetailServiceImages/kid-s-dentistry-pedodontics-the-dental-roots.webp", title: "Kid's Dentistry", href: "/kids-dentistry" },
  { img: "/assets/images/DetailServiceImages/teeth-whitening-the-dental-roots.webp", title: "Teeth Whitening", href: "/teeth-whitening" },
  { img: "/assets/images/DetailServiceImages/laser-dentistry-the-dental-roots.webp", title: "Laser Dentistry", href: "/laser-dentistry" },
];

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

function SidebarForm() {
  return (
    <div className="bg-brand-1 rounded-2xl p-8">
      <h3 className="font-serif text-2xl text-white mb-2">Book Your<br /><em className="italic text-brand-4">Appointment</em></h3>
      <p className="text-white/60 text-sm mb-6">Our specialists will call you back</p>
      <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/thank-you"; }} className="space-y-3">
        <input name="name" placeholder="Name*" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4" />
        <input name="email" type="email" placeholder="Email*" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4" />
        <input name="mobile" type="tel" placeholder="Phone*" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4" />
        <select name="location" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-brand-4">
          <option value="" disabled>Choose Location</option>
          <option value="Sushant Lok">Sushant Lok</option>
          <option value="Golf Course">Golf Course</option>
          <option value="Panchsheel Park">Panchsheel Park</option>
          <option value="Tata Primanti">Tata Primanti</option>
        </select>
        <textarea name="message" placeholder="Message" rows={3} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4 resize-none" />
        <button type="submit" className="w-full py-3.5 bg-white text-brand-1 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-brand-6 transition-colors rounded-lg">
          Schedule Appointment
        </button>
      </form>
    </div>
  );
}

function SmileMakeoversPage() {
  const [videoSrc, setVideoSrc] = useState("");

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── BANNER ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/smile-makeovers-img.webp" alt="Smile Makeovers" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Hollywood Smile Makeover</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-4 max-w-2xl">
            Smile Makeovers in Delhi, Gurgaon (India)
          </h1>
          <p className="text-white/70 font-light max-w-lg mb-8">Hollywood Smile Makeover Treatment — Digital 3D Design, Custom Crafted</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-brand-2 text-white text-[10px] tracking-[0.22em] uppercase font-semibold rounded-full hover:bg-brand-1 transition-all">
              Book Free Consultation
            </Link>
            <a href="https://api.whatsapp.com/send?phone=8130755004" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-4 border border-white/30 text-white text-[10px] tracking-[0.2em] uppercase font-medium rounded-full hover:border-white transition-all">
              <img src="/assets/icons/whatsapp_.webp" alt="WhatsApp" className="h-4 w-4" /> WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTENT + SIDEBAR FORM ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">What is a Smile Makeover?</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-tight mb-5">
                Complete <em className="italic text-brand-2">Smile Transformation</em>
              </h2>
              <div className="space-y-4 text-sm text-ink-2 leading-relaxed">
                <p>A smile makeover improves the appearance (and often the functionality) of your smile and is customized to you based on your unique situation and preferences. Smile makeovers often include one or more of the following procedures:</p>
              </div>
            </div>

            {/* What's included */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-lg font-medium mb-4">Cosmetic Procedures</h3>
                <ul className="space-y-2">
                  {["Zoom! Teeth bleaching", "Porcelain veneers", "Dental implants", "Cosmetic enamel contouring", "Periodontal plastic surgery", "Gumline recontouring", "Porcelain fillings & Inlays", "Porcelain crowns"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium mb-4">Orthodontic Solutions</h3>
                <ul className="space-y-2">
                  {["Invisalign® (invisible braces)", "Invisalign® Teen", "Clear aligners", "Ceramic tooth-colored braces"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How we design */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-sm text-ink-2 leading-relaxed">
                <h3 className="font-serif text-2xl font-medium">How Do We Design Your Smile?</h3>
                <p>Get a Hollywood Smile Makeover at The Dental Roots. We start with a clinical evaluation of your teeth and gums followed by professional photographs and videos. Digital and 3D smile designing is done to give you the smile of your choice.</p>
                <p>A smile makeover of this precision and quality would only be available at a handful of international-level clinics and The Dental Roots is one of them. We have advanced techniques, veneers, laminates, and equipment — our proficient team ensures you get the Hollywood Smile you desire.</p>
              </div>
              <img src="/assets/images/smile-makeovers-other.webp" alt="Smile Design" className="w-full rounded-xl object-cover aspect-[4/3]" loading="lazy" />
            </div>

            {/* Before/after and goal */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <img src="/assets/images/smile-makeovers-left.webp" alt="Smile Makeover Results" className="w-full rounded-xl object-cover aspect-[4/3]" loading="lazy" />
              <div className="space-y-4 text-sm text-ink-2 leading-relaxed">
                <h3 className="font-serif text-2xl font-medium">What's Our Ultimate Goal?</h3>
                <p>A smile can be the central element of a person's personality and therefore their self-perception. Having a great smile that you are comfortable with can bring a ray of happiness into not just your but also other people's lives.</p>
                <p>Our objective is to make you happy not just with your smile but also to develop a positive attitude towards life. Our dentists at The Dental Roots don't perform smile makeovers with a one-size-fits-all approach — they are true designers of gorgeous smiles.</p>
                <img src="/assets/images/smile-makeovers-in-delhi-ncr.webp" alt="Smile Makeovers in Delhi NCR" className="w-full rounded-lg" loading="lazy" />
              </div>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { t: "Instant Confidence", d: "Walk out feeling confident in your smile with a complete transformation in as little as one sitting." },
                { t: "Minimally Invasive", d: "Get a Hollywood smile with minimally invasive dental procedures — everyone can now have a Hollywood smile in as little as one sitting." },
                { t: "Proven Results", d: "Digital 3D smile designing lets you preview your smile before treatment begins. What you see is what you get." },
              ].map((b) => (
                <div key={b.t} className="p-6 bg-white border border-brand-3/10 rounded-lg group relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-1 to-brand-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <h4 className="font-serif text-lg font-medium mb-2">{b.t}</h4>
                  <p className="text-sm text-ink-3 leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>

            {/* Logos */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-ink-3 font-medium mb-4">Trusted by Leading Brands</p>
              <div className="flex flex-wrap gap-4 items-center">
                {smileLogos.map((logo, i) => (
                  <img key={i} src={logo} alt="Partner brand" className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <SidebarForm />
          </div>
        </div>
      </section>

      {/* ─── PATIENT TESTIMONIALS ─── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Patient Stories</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-tight">
              Real Patient <em className="italic text-brand-2">Transformations</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-0.5">
            {testimonialVideos.map((t) => (
              <div key={t.name} className="group relative overflow-hidden bg-brand-6/30 border border-brand-3/10 cursor-pointer" onClick={() => setVideoSrc(`https://www.youtube.com/embed/${t.videoId}?autoplay=1`)}>
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-1/30 group-hover:bg-brand-1/50 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <span className="text-white text-base ml-0.5">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-brand-2 font-semibold mb-0.5">{t.type}</p>
                  <h4 className="font-serif text-sm font-medium">{t.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MORE SERVICES ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-serif font-light text-[clamp(24px,3vw,40px)]">More <em className="italic text-brand-2">Services</em></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5">
            {moreServices.map((s) => (
              <Link key={s.title} to={s.href} className="group bg-white border border-brand-3/10 overflow-hidden block hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4"><h4 className="font-serif text-sm font-medium">{s.title}</h4></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <VideoModal src={videoSrc} onClose={() => setVideoSrc("")} />
    </div>
  );
}
