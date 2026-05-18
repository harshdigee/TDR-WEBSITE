import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/veneers")({
  head: () => ({
    meta: [
      { title: "Veneers in Delhi NCR, India | Porcelain Veneers | The Dental Roots" },
      { name: "description", content: "Get porcelain veneers treatment at The Dental Roots and enhance your smile. Custom-crafted veneers in Delhi & Gurgaon." },
    ],
  }),
  component: VeneersPage,
});

const faqs = [
  { q: "Do veneers look like real teeth?", a: "Your veneers are skilfully crafted with our master ceramist and designed by our highly experienced team to match the size, shape, and shade of your natural teeth. They will look just like real teeth and nobody will be able to tell!" },
  { q: "How long do veneers last?", a: "With proper care and maintenance, you can expect your veneers to last for up to 10–15 years." },
  { q: "Do veneers ruin your teeth?", a: "No. Veneers strengthen teeth that have been weakened or damaged by chips, small cracks, and stains. No-prep veneers do not require the removal of any enamel. However, traditional porcelain veneers do involve removing a small layer of natural tooth structure." },
  { q: "What are veneers made of?", a: "Our veneers are made of thin but durable porcelain, and they're crafted to be an exact fit for your teeth." },
  { q: "Are the procedures painful?", a: "On account of the technical advancement in dentistry, you will find that most dental procedures today are not agonizing. The dental practitioner can give anaesthesia and numb the area so you don't feel anything." },
  { q: "How long will it take to complete my smile makeover?", a: "The length of your treatment depends on the kinds of techniques used as well as the degree of change required. At times, a smile makeover can be performed in a solitary office visit. Others will require treatment spread out over a couple of days." },
  { q: "Does dental insurance cover the cost of smile makeovers?", a: "Usually, insurance will cover only a small part of a cosmetic procedure like a smile makeover if any. Nonetheless, there are many financing options available." },
];

const moreServices = [
  { img: "/assets/images/DetailServiceImages/implants-the-dental-roots.webp", title: "Implants", href: "/full-mouth-dental-implant-treatment-clinic" },
  { img: "/assets/images/DetailServiceImages/invisalign-and-braces-the-dental-roots.webp", title: "Invisalign", href: "/invisalign-clear-aligners-teeth-straightening" },
  { img: "/assets/images/DetailServiceImages/smile-makeovers-the-dental-roots.webp", title: "Smile Makeovers", href: "/best-smile-makeover-clinic" },
  { img: "/assets/images/DetailServiceImages/kid-s-dentistry-pedodontics-the-dental-roots.webp", title: "Kid's Dentistry", href: "/kids-dentistry" },
  { img: "/assets/images/DetailServiceImages/laser-dentistry-the-dental-roots.webp", title: "Laser Dentistry", href: "/laser-dentistry" },
  { img: "/assets/images/DetailServiceImages/teeth-whitening-the-dental-roots.webp", title: "Teeth Whitening", href: "/teeth-whitening" },
];

const testimonialVideos = [
  { img: "/assets/images/GalleryImageServices/patient-2-patients-testimonial.webp", name: "Patient", type: "Patient Testimonial", videoId: "rjXuCqL3G4I" },
  { img: "/assets/images/GalleryImageServices/patient-1-patients-testimonial.webp", name: "Saniya", type: "Patient Testimonial", videoId: "encIs7M3wmk" },
  { img: "/assets/images/GalleryImageServices/rashalika-sabharwal-celebrity-testimonials.webp", name: "Rashalika Sabharwal", type: "Celebrity Testimonial", videoId: "yRO28v1eldQ" },
  { img: "/assets/images/GalleryImageServices/srishti-rana-1-celebrity-testimonials.webp", name: "Srishti Rana", type: "Celebrity Testimonial", videoId: "s8gu2FA110U" },
  { img: "/assets/images/GalleryImageServices/rannvijay-singh-singha-2-celebrity-testimonials.webp", name: "Rannvijay Singh Singha", type: "Celebrity Testimonial", videoId: "OpaI0tV9h7E" },
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

function VeneersPage() {
  const [videoSrc, setVideoSrc] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── BANNER ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/veneers-banner-the-dental-roots.webp" alt="Veneers" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Porcelain Veneers</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-4 max-w-2xl">
            Veneers in Delhi NCR, India
          </h1>
          <p className="text-white/70 font-light max-w-lg mb-8">Get porcelain Veneers treatment at The Dental Roots and enhance your smile</p>
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

      {/* ─── CONTENT + FORM ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Transform Your Smile</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-tight mb-5">
                Porcelain Veneers — <em className="italic text-brand-2">Instant Transformation</em>
              </h2>
              <div className="space-y-4 text-sm text-ink-2 leading-relaxed">
                <p>Dissatisfaction with your smile can have a profound impact on nearly every area of your life. If you are prone to hiding your smile or feel uncomfortable with the appearance of your teeth, your job prospects may suffer, your personal and social life may be stunted.</p>
                <p>With porcelain veneers, you can have a smile that lets you feel your most confident, attractive and self-assured. Our team at The Dental Roots, New Delhi and Gurgaon work with an industry-leading master ceramist to craft porcelain veneers that are custom-designed to perfect and complement your unique smile and facial features.</p>
                <p>They are wafer-thin, custom-made shells of tooth-coloured materials like porcelain or resin composite. They are designed to cover the front surface of the tooth to improve its appearance — changing the shape, size, and colour of the tooth.</p>
              </div>
            </div>

            {/* What veneers treat */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-medium">What Veneers Treat</h3>
                <ul className="space-y-2">
                  {["Gaps and spaces in between teeth", "Crooked tooth presentation", "Irregularly shaped or unevenly sized teeth", "Stains that won't respond to whitening"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-2">
                      <span className="w-5 h-5 rounded-full bg-brand-2 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <img src="/assets/images/veneers-other_img_1-the-dental-roots.webp" alt="Veneers benefits" className="w-full rounded-xl object-cover aspect-[4/3]" loading="lazy" />
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-serif text-2xl font-medium mb-5">Benefits of Porcelain Veneers</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {["Customized to fit seamlessly into your smile", "Crafted out of the highest quality materials", "Durable and long-lasting", "Easy to care for", "Complement your overall facial shape", "Resist fading and staining"].map((b) => (
                  <div key={b} className="p-4 bg-white border border-brand-3/10 rounded-lg flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-4/30 flex items-center justify-center text-brand-2 text-xs shrink-0 mt-0.5">✦</span>
                    <p className="text-xs text-ink-2 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h3 className="font-serif text-2xl font-medium mb-6">How We Craft Your New Smile</h3>
              <div className="grid md:grid-cols-3 gap-0.5">
                {[
                  { n: "01", t: "First Appointment", d: "Visualize the results with high-tech 3D images. Dr Dheeraj fits a temporary smile. Minimal shaping for temporaries you'll wear for just under a week — test drive your perfect smile." },
                  { n: "02", t: "Second Appointment", d: "After wearing the temporary smile, you return to provide feedback on the look and fit. A master ceramist makes a new mould before creating the final veneers." },
                  { n: "03", t: "Third Appointment", d: "Your permanent restorations arrive. Dr Dheeraj fits the porcelain veneer shells, applies finishing touches, and you walk out with your new permanent smile." },
                ].map((s) => (
                  <div key={s.n} className="bg-white border border-brand-3/10 p-7 relative overflow-hidden group">
                    <div className="font-serif font-light text-6xl text-brand-5 leading-none mb-4">{s.n}</div>
                    <h4 className="font-serif text-lg font-medium mb-3">{s.t}</h4>
                    <p className="text-sm text-ink-3 leading-relaxed">{s.d}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-1 to-brand-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </div>
                ))}
              </div>
            </div>

            {/* Care section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img src="/assets/images/veneers-other_img_2-the-dental-roots.webp" alt="Veneer care" className="w-full rounded-xl object-cover aspect-[4/3]" loading="lazy" />
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium">How to Care for Porcelain Veneers</h3>
                <p className="text-sm text-ink-2 leading-relaxed">One of the most remarkable things about porcelain veneers is just how easy they are to care for. In many cases, veneers require no adjustment to your daily routine.</p>
                <p className="text-sm font-medium text-ink">To prevent damage:</p>
                <ul className="space-y-2">
                  {["Use a soft-bristled toothbrush", "Avoid toothpaste with baking soda and abrasives", "Refrain from using an astringent mouthwash"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-2">
                      <span className="w-5 h-5 rounded-full bg-brand-2 flex items-center justify-center text-white text-xs shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link to="/contact-us" className="inline-flex items-center px-6 py-3 bg-brand-2 text-white text-[10px] tracking-[0.22em] uppercase font-semibold rounded-full hover:bg-brand-1 transition-all">
                    Book an Appointment
                  </Link>
                  <a href="tel:+91-9650440004" className="inline-flex items-center px-6 py-3 border border-brand-2 text-brand-2 text-[10px] tracking-[0.22em] uppercase font-semibold rounded-full hover:bg-brand-6 transition-all">
                    Call: +91-9650440004
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky sidebar form */}
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
              Patient <em className="italic text-brand-2">Testimonials</em>
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

      {/* ─── FAQs ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">FAQ's</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-tight">
              FAQs About <em className="italic text-brand-2">Veneers</em>
            </h2>
          </div>
          <div className="space-y-1">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-brand-3/15 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-brand-6/40 transition-colors">
                  <span className="font-serif text-base font-medium pr-4">{faq.q}</span>
                  <span className={`text-brand-2 text-xl shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-ink-3 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MORE SERVICES ─── */}
      <section className="py-20 px-6 md:px-12 bg-white">
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
