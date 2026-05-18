import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kids-dentistry")({
  head: () => ({
    meta: [
      { title: "Kid's Dentistry — Paediatric Dental Care | Delhi & Gurgaon | The Dental Roots" },
      { name: "description", content: "Gentle, nurturing paediatric dental care for kids and teenagers in Delhi & Gurgaon. Fun, stress-free dental visits at The Dental Roots." },
    ],
  }),
  component: KidsDentistryPage,
});

const careServices = [
  {
    category: "Preventive Care",
    items: [
      { t: "Dental Cleaning (Scaling)", d: "Special tools to remove hardened plaque, spot problems early, and make cleanings fun." },
      { t: "Fluoride Treatments", d: "Nature's cavity fighter — essential for strengthening and protecting children's teeth." },
      { t: "Dental Sealants", d: "Thin plastic coatings applied to the tooth surface to protect grooves from decay." },
    ],
  },
  {
    category: "Diagnostic Care",
    items: [
      { t: "Dental Check-up", d: "Regular exams recommended every six months to protect against gum disease and tooth loss in children." },
      { t: "Dental X-rays", d: "State-of-the-art digital X-ray machines for detailed views of teeth, bones, and supporting tissues." },
    ],
  },
];

const testimonialVideos = [
  { img: "/assets/images/GalleryImageServices/patient-1-patients-testimonial.webp", name: "Saniya", type: "Patient Testimonial", videoId: "encIs7M3wmk" },
  { img: "/assets/images/GalleryImageServices/patient-patients-testimonial.webp", name: "Patient", type: "Patient Testimonial", videoId: "pkGLJNjUevg" },
  { img: "/assets/images/GalleryImageServices/rashalika-sabharwal-celebrity-testimonials.webp", name: "Rashalika Sabharwal", type: "Celebrity Testimonial", videoId: "yRO28v1eldQ" },
];

const moreServices = [
  { img: "/assets/images/DetailServiceImages/implants-the-dental-roots.webp", title: "Implants", href: "/full-mouth-dental-implant-treatment-clinic" },
  { img: "/assets/images/DetailServiceImages/invisalign-and-braces-the-dental-roots.webp", title: "Invisalign", href: "/invisalign-clear-aligners-teeth-straightening" },
  { img: "/assets/images/DetailServiceImages/veneers-the-dental-roots.webp", title: "Veneers", href: "/veneers" },
  { img: "/assets/images/DetailServiceImages/smile-makeovers-the-dental-roots.webp", title: "Smile Makeovers", href: "/best-smile-makeover-clinic" },
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
      <h3 className="font-serif text-2xl text-white mb-2">Book Your<br /><em className="italic text-brand-4">Child's Visit</em></h3>
      <p className="text-white/60 text-sm mb-6">Our specialists will call you back</p>
      <form onSubmit={(e) => { e.preventDefault(); window.location.href = "/thank-you"; }} className="space-y-3">
        <input name="name" placeholder="Parent/Child Name*" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4" />
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
          Book Appointment
        </button>
      </form>
    </div>
  );
}

function KidsDentistryPage() {
  const [videoSrc, setVideoSrc] = useState("");

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── BANNER ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/kid-s-dentistry-bannerimage.webp" alt="Kids Dentistry" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" onError={(e) => { (e.target as HTMLImageElement).src = "/assets/images/dental-roots-bg.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Paediatric Dental Care</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-4 max-w-2xl">
            Kid's Dentistry — Gentle, Fun &amp; <em className="italic text-brand-4">Nurturing</em>
          </h1>
          <p className="text-white/70 font-light max-w-lg mb-8">Trusted paediatric dentistry for children, toddlers, and teenagers at The Dental Roots.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-brand-2 text-white text-[10px] tracking-[0.22em] uppercase font-semibold rounded-full hover:bg-brand-1 transition-all">
              Book Appointment
            </Link>
            <a href="https://api.whatsapp.com/send?phone=8130755004" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-4 border border-white/30 text-white text-[10px] tracking-[0.2em] uppercase font-medium rounded-full hover:border-white transition-all">
              <img src="/assets/icons/whatsapp_.webp" alt="WhatsApp" className="h-4 w-4" /> WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTENT + SIDEBAR ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">For Kids, Toddlers & Teenagers</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-tight mb-5">
                Gentle Care, <em className="italic text-brand-2">Happy Smiles</em>
              </h2>
              <div className="space-y-4 text-sm text-ink-2 leading-relaxed">
                <p>You are always welcome at <strong>The Dental Roots</strong> — parents and kids — because children make everything delightful and our clinic is no exception. The Dental Roots is committed to giving kids, toddlers, and teenagers high-quality dental care.</p>
                <p>We ensure that every child's dental appointment is relaxing and stress-free with the aid of our skilled paediatric dentists. The Dental Roots provides a relaxing environment with a friendly team and in-chair entertainment for your child.</p>
                <p>The Dental Roots also offers children's emergency dentist appointments if required. If your child suffers a fall or has a toothache, we can help put things right.</p>
              </div>
            </div>

            {/* Why kids need a paediatric dentist */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium">Why Do Your Kids Need a Paediatric Dentist?</h3>
                <p className="text-sm text-ink-2 leading-relaxed">If a child is exposed to the dental office at a young age, it is easier for them to have a favourable association with it. It is crucial for parents to be mindful of their children's oral health and to regularly check on the eruption and shedding of baby teeth.</p>
                <p className="text-sm text-ink-2 leading-relaxed">Further, we understand that you care deeply for your child's well-being. Proper dental care is available at a specialized facility. We highly recommend bringing your kid to our clinic for a regular check-up to detect problems and prevent them before time.</p>
              </div>
              <img
                src="/assets/images/DetailServiceImages/kid-s-dentistry-pedodontics-the-dental-roots.webp"
                alt="Kids Dentistry"
                className="w-full rounded-xl object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>

            {/* Care services grid */}
            {careServices.map((category) => (
              <div key={category.category}>
                <h3 className="font-serif text-2xl font-medium mb-5">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div key={item.t} className="p-6 bg-white border border-brand-3/10 rounded-lg group relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-1 to-brand-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                      <div className="flex gap-3 items-start">
                        <span className="w-6 h-6 rounded-full bg-brand-2 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</span>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{item.t}</h4>
                          <p className="text-xs text-ink-3 leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Restorative care */}
            <div className="p-8 bg-brand-1 rounded-2xl text-white">
              <h3 className="font-serif text-2xl font-medium mb-4">Restorative Care</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">When decay or damage requires treatment, our paediatric dentists use the gentlest techniques and age-appropriate anaesthesia to ensure your child feels comfortable and safe throughout the procedure.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact-us" className="inline-flex items-center px-6 py-3 bg-white text-brand-1 text-[10px] tracking-[0.22em] uppercase font-bold rounded-full hover:bg-brand-6 transition-all">
                  Book Appointment
                </Link>
                <a href="tel:+91-9650440004" className="inline-flex items-center px-6 py-3 border border-white/30 text-white text-[10px] tracking-[0.2em] uppercase font-medium rounded-full hover:border-white transition-all">
                  Call: +91-9650440004
                </a>
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
            <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-tight">
              Patient <em className="italic text-brand-2">Testimonials</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0.5">
            {testimonialVideos.map((t) => (
              <div key={t.name} className="group relative overflow-hidden bg-brand-6/30 border border-brand-3/10 cursor-pointer" onClick={() => setVideoSrc(`https://www.youtube.com/embed/${t.videoId}?autoplay=1`)}>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-1/30 group-hover:bg-brand-1/50 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                      <span className="text-white text-base ml-0.5">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-brand-2 font-semibold mb-0.5">{t.type}</p>
                  <h4 className="font-serif text-base font-medium">{t.name}</h4>
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
