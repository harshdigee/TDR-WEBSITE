import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/invisalign-clear-aligners-teeth-straightening")({
  head: () => ({
    meta: [
      { title: "Invisalign Treatment in Delhi NCR, Gurgaon | Clear Aligners | The Dental Roots" },
      { name: "description", content: "Premium Platinum Invisalign provider in Delhi & Gurgaon. Virtually invisible braces for a perfect smile. Book a consultation today." },
    ],
  }),
  component: InvisalignPage,
});

const invisalignBenefits = [
  { icon: "/assets/images/Invisalign/icon1.webp", t: "Invisible", d: "Invisalign aligners are virtually invisible, completely erasing the embarrassment caused by wearing metal braces." },
  { icon: "/assets/images/Invisalign/icon2.webp", t: "Easy to Care for", d: "Simply take your aligners out, clean them, clean your teeth, and put them back. Far less likely to cause cavities." },
  { icon: "/assets/images/Invisalign/icon3.webp", t: "Fewer Food Restrictions", d: "Eat whatever you want! Simply remove your aligners before your meal, and put them back on afterward." },
  { icon: "/assets/images/Invisalign/icon4.webp", t: "Less Painful", d: "The aligners are tailor-made to your teeth, so there is little to no pain and irritation." },
  { icon: "/assets/images/Invisalign/icon5.webp", t: "Freedom to Play Sports", d: "Remove the aligners or keep wearing them while you play sports. Fewer limits in activities and life." },
  { icon: "/assets/images/Invisalign/icon6.webp", t: "Play Musical Instruments", d: "No brackets or wires means playing musical instruments is completely comfortable." },
  { icon: "/assets/images/Invisalign/icon7.webp", t: "Improved Self Esteem", d: "A beautiful smile helps build confidence, which in turn leads to improved self-esteem and overall happiness." },
];

const alignerHelps = [
  { img: "/assets/images/Invisalign/Overbite.webp", t: "Overbite" },
  { img: "/assets/images/Invisalign/Underbite.webp", t: "Underbite" },
  { img: "/assets/images/Invisalign/Crossbite.webp", t: "Crossbite" },
  { img: "/assets/images/Invisalign/Gap-Teeth.webp", t: "Gap Teeth" },
  { img: "/assets/images/Invisalign/Open-Bite.webp", t: "Open Bite" },
  { img: "/assets/images/Invisalign/Crowded-teeth.webp", t: "Crowded Teeth" },
];

const faqs = [
  { q: "Will Invisalign affect my speech?", a: "Invisalign aligners do not impede speech in any way. Since they are made from a very thin plastic, any impact on your speech will be very minor and temporary." },
  { q: "Are Invisalign aligners comfortable?", a: "Invisalign aligners are tailor-made, hence less painful to the gums and very comfortable." },
  { q: "What are Invisalign aligners made of?", a: "The clear braces used are custom-made, near-transparent, and easily removable. They are the improved, modern version of traditional metal fixed braces. Unlike traditional braces, Invisalign uses no metal brackets or wires — nearly invisible, others won't notice that you're wearing them." },
];

const moreServices = [
  { img: "/assets/images/DetailServiceImages/implants-the-dental-roots.webp", title: "Implants", href: "/full-mouth-dental-implant-treatment-clinic" },
  { img: "/assets/images/DetailServiceImages/veneers-the-dental-roots.webp", title: "Veneers", href: "/veneers" },
  { img: "/assets/images/DetailServiceImages/smile-makeovers-the-dental-roots.webp", title: "Smile Makeovers", href: "/best-smile-makeover-clinic" },
  { img: "/assets/images/DetailServiceImages/kid-s-dentistry-pedodontics-the-dental-roots.webp", title: "Kid's Dentistry", href: "/kids-dentistry" },
  { img: "/assets/images/DetailServiceImages/braces-the-dental-roots.webp", title: "Braces", href: "/braces" },
  { img: "/assets/images/DetailServiceImages/teeth-whitening-the-dental-roots.webp", title: "Teeth Whitening", href: "/teeth-whitening" },
];

const testimonialVideos = [
  { img: "/assets/images/GalleryImageServices/patient-2-patients-testimonial.webp", name: "Patient", type: "Patient Testimonial", videoId: "rjXuCqL3G4I" },
  { img: "/assets/images/GalleryImageServices/rashalika-sabharwal-celebrity-testimonials.webp", name: "Rashalika Sabharwal", type: "Celebrity Testimonial", videoId: "yRO28v1eldQ" },
  { img: "/assets/images/GalleryImageServices/srishti-rana-1-celebrity-testimonials.webp", name: "Srishti Rana", type: "Celebrity Testimonial", videoId: "s8gu2FA110U" },
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

function InvisalignPage() {
  const [videoSrc, setVideoSrc] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── BANNER ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/invisalignbraces-banner.webp" alt="Invisalign" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Premium Platinum Invisalign Provider</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-4 max-w-2xl">
            Invisalign Treatment in New Delhi, Gurgaon, India
          </h1>
          <p className="text-white/70 font-light max-w-lg mb-8">Preview your smile — visualize your teeth after Invisalign</p>
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

      {/* ─── CONTENT + SIDEBAR ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Premium Platinum Holder</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-tight mb-5">
                The Future of <em className="italic text-brand-2">Teeth Straightening</em>
              </h2>
              <div className="space-y-4 text-sm text-ink-2 leading-relaxed">
                <p>Aligners are essentially invisible, bespoke, and completely removable braces that can correct different bite and alignment issues such as crowding, overbite, misaligned teeth, and other conditions.</p>
                <p>Invisalign is the latest, most sophisticated, and most advanced orthodontic treatment available today. Invisalign invisible braces make use of a series of clear aligners, fabricated by 3-D technology, programmed to move your teeth to their final and perfectly aligned position.</p>
                <p>Countless happy patients around the world have experienced amazing results with Invisalign treatment and our certified Invisalign providers at The Dental Roots will make sure you wear your desired flawless smile in no time.</p>
              </div>
            </div>

            {/* Benefits grid */}
            <div>
              <h2 className="font-serif text-2xl font-medium mb-6">The Benefits of Invisalign</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {invisalignBenefits.map((b) => (
                  <div key={b.t} className="flex items-start gap-4 p-5 bg-white border border-brand-3/10 rounded-lg">
                    <img src={b.icon} alt={b.t} className="w-10 h-10 object-contain shrink-0" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{b.t}</h3>
                      <p className="text-xs text-ink-3 leading-relaxed">{b.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How Aligners Help */}
            <div>
              <h2 className="font-serif text-2xl font-medium mb-6">How Aligners Help</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {alignerHelps.map((item) => (
                  <div key={item.t} className="flex flex-col items-center gap-2 p-4 bg-white border border-brand-3/10 rounded-lg text-center">
                    <img src={item.img} alt={item.t} className="h-12 w-auto object-contain" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    <span className="text-xs font-medium text-ink-2">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comprehensive brace options */}
            <div>
              <h2 className="font-serif text-2xl font-medium mb-5">Comprehensive Brace Options</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-brand-3/15 text-sm">
                  <thead>
                    <tr className="bg-brand-1 text-white">
                      {["Type", "Visibility", "Brushing", "Comfort", "Scope", "Treatment Time"].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-[10px] tracking-[0.15em] uppercase font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Damon Braces", vis: "Metal visible / Tooth-colored discreet", brush: "Difficult, regular visits recommended", comfort: "Comfortable, takes time to adjust", scope: "Mild to most complex cases", time: "Fast due to low friction" },
                      { type: "Invisalign", vis: "Virtually invisible", brush: "Removable, easy brushing & flossing", comfort: "Very convenient, smooth plastic", scope: "Mild to moderate cases", time: "Similar or less than fixed braces" },
                      { type: "Invisalign Teen", vis: "Virtually invisible", brush: "Removable, easy brushing & flossing", comfort: "Very convenient, smooth plastic", scope: "Designed for teenagers", time: "Similar or less than fixed braces" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-brand-6/30"}>
                        <td className="px-4 py-3 font-medium text-ink">{row.type}</td>
                        <td className="px-4 py-3 text-ink-3 text-xs">{row.vis}</td>
                        <td className="px-4 py-3 text-ink-3 text-xs">{row.brush}</td>
                        <td className="px-4 py-3 text-ink-3 text-xs">{row.comfort}</td>
                        <td className="px-4 py-3 text-ink-3 text-xs">{row.scope}</td>
                        <td className="px-4 py-3 text-ink-3 text-xs">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Comfort section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img src="/assets/images/dental-roots-bg.webp" alt="The Dental Roots" className="w-full rounded-xl object-cover aspect-[4/3]" loading="lazy" />
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium">No White Coats. No Pressure. No Judgment.</h3>
                <p className="text-sm text-ink-2 leading-relaxed">We know that managing your family's dental care can be stressful — whether you're worried about the cost, suffer from dental anxiety, or just don't have the time. The Dental Roots is designed to make going to the dentist easy and approachable. By bringing our best and treating you like family, you can finally enjoy your time at the dentist.</p>
                <div className="flex flex-wrap gap-3">
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

          <div className="lg:sticky lg:top-24 h-fit space-y-6">
            <SidebarForm />
            <div className="bg-white border border-brand-3/15 rounded-xl p-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-brand-2 font-semibold mb-3">Partner Brands</p>
              <div className="grid grid-cols-2 gap-3">
                {["/assets/images/new-invisalign-Logo.webp", "/assets/images/new-whiteLogo.webp"].map((logo, i) => (
                  <img key={i} src={logo} alt="Partner" className="h-10 w-full object-contain" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">FAQ's</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-tight">
              FAQs About <em className="italic text-brand-2">Invisalign</em>
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

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-tight">
              Patient <em className="italic text-brand-2">Testimonials</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0.5">
            {testimonialVideos.map((t) => (
              <div key={t.name} className="group relative overflow-hidden bg-white border border-brand-3/10 cursor-pointer" onClick={() => setVideoSrc(`https://www.youtube.com/embed/${t.videoId}?autoplay=1`)}>
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
