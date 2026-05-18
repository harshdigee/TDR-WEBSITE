import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/smile-makeovers")({
  head: () => ({
    meta: [
      { title: "Smile Makeovers in Delhi, Gurgaon (India) — The Dental Roots" },
      { name: "description", content: "Hollywood Smile Makeover Treatment at The Dental Roots — Digital 3D Design, Custom Crafted. Book your free consultation today." },
    ],
  }),
  component: SmileMakeoversPage,
});

const faqs = [
  { q: "What is a smile makeover?", a: "A smile makeover is a comprehensive cosmetic dental procedure that involves a combination of dental treatments to improve the aesthetics of your smile. It is a personalized treatment plan that considers several factors such as your facial appearance, skin tone, hair colour, teeth, gum tissue, and lips to provide you with a beautiful, natural-looking smile." },
  { q: "How long does a smile makeover take?", a: "The duration of a smile makeover depends on the number and type of procedures involved. Simple procedures like teeth whitening can be completed in a single visit, while more complex ones like dental implants or veneers may take several months. A preliminary consultation is scheduled during which you and your dentist will discuss your goals and create a personalized treatment plan." },
  { q: "Is a smile makeover painful?", a: "Most procedures involved in a smile makeover are performed under local anaesthesia, making them virtually painless. You may experience some discomfort or sensitivity after the procedures, but this is usually temporary and can be managed with over-the-counter pain relievers." },
  { q: "How much does a smile makeover cost?", a: "The cost of a smile makeover depends on the number and type of procedures included in your treatment plan. The Dental Roots offers competitive pricing and flexible payment options. We also offer a free initial consultation to discuss your goals and provide you with a detailed cost estimate." },
  { q: "What makes The Dental Roots the best for a smile makeover?", a: "At The Dental Roots, we pride ourselves in delivering world-class dental services with a highly experienced and professional team. Our state-of-the-art facilities enable us to offer the most advanced treatments available, and we use cutting-edge digital smile design technology to ensure that you're fully involved in creating your ideal smile before any treatment begins." },
];

const treatments = [
  { icon: "✦", name: "Porcelain Veneers", desc: "Ultra-thin custom shells that transform colour, shape and alignment" },
  { icon: "✦", name: "Teeth Whitening", desc: "Professional Zoom whitening — up to 8 shades brighter in one session" },
  { icon: "✦", name: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth" },
  { icon: "✦", name: "Composite Bonding", desc: "Repair chips, cracks and gaps with tooth-coloured resin" },
  { icon: "✦", name: "Invisalign / Braces", desc: "Straighten teeth discreetly without metal wires" },
  { icon: "✦", name: "Gum Contouring", desc: "Reshape the gum line for a perfectly proportioned smile" },
];

const moreServices = [
  { title: "Veneers", img: "/assets/images/veneers-the-dental-roots.webp", href: "/veneers" },
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Invisalign", img: "/assets/images/invisalign-and-braces-the-dental-roots.webp", href: "/invisalign-clear-aligners-teeth-straightening" },
  { title: "Teeth Whitening", img: "/assets/images/teeth-whitening-the-dental-roots.webp", href: "/teeth-whitening" },
  { title: "Kids Dentistry", img: "/assets/images/kid-s-dentistry.webp", href: "/kids-dentistry" },
];

function SmileMakeoversPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img
          src="/assets/images/smile-makeovers-in-delhi-ncr.webp"
          alt="Smile Makeovers in Delhi"
          className="absolute inset-0 w-full h-full object-cover object-top"
          fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/images/smile-makeovers-the-dental-roots.webp"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/90 via-brand-1/60 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Hollywood Smile Makeover</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">
            Smile Makeovers in Delhi, <em className="italic">Gurgaon (India)</em>
          </h1>
          <p className="text-white/75 font-light max-w-xl mb-8">
            Hollywood Smile Makeover Treatment — Digital 3D Design, Custom Crafted
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-3.5 bg-brand-2 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-1 transition-all rounded-full">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/918130750008" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/40 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all rounded-full">
              <span>💬</span> WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* What is a smile makeover + sidebar */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-6 text-ink-2 leading-relaxed">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">What is a Smile Makeover?</span>
            </div>
            <h2 className="font-serif text-[clamp(24px,3vw,40px)] text-ink leading-tight">
              Complete <em className="italic text-brand-2">Smile Transformation</em>
            </h2>
            <p>A smile makeover is a comprehensive cosmetic dental procedure involving a combination of dental treatments to improve your smile aesthetics. It is a personalized treatment plan that considers several factors such as your facial appearance, skin tone, hair colour, teeth, gum tissue, and lips to provide a beautiful, natural-looking smile.</p>
            <p>At The Dental Roots, we use advanced Digital Smile Design (DSD) technology, which allows us to plan and preview your new smile before any treatment begins. This ensures you know exactly what to expect from the final result.</p>
            <p>Our team of cosmetic specialists, led by Dr. Dheeraj Setia, designs each smile individually — because no two smiles are the same. Whether you need minimal enhancements or a complete transformation, we craft a plan perfectly suited to you.</p>

            <h3 className="font-serif text-xl text-ink">Treatments Included in a Smile Makeover</h3>
            <div className="grid grid-cols-2 gap-3">
              {treatments.map((t) => (
                <div key={t.name} className="flex gap-3 p-4 bg-brand-6/30 border border-brand-3/10 rounded-sm">
                  <span className="text-brand-2 mt-0.5 flex-shrink-0">✦</span>
                  <div>
                    <p className="font-serif text-[14px] font-medium text-ink">{t.name}</p>
                    <p className="text-[11px] text-ink-3 mt-0.5">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="bg-brand-1 text-white p-6 rounded-sm h-fit sticky top-24">
            <h3 className="font-serif text-xl mb-2">Book Your</h3>
            <h3 className="font-serif text-2xl text-brand-4 mb-5 italic">Free Consultation</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {["Full Name", "Email Address", "Phone Number"].map((p) => (
                <input key={p} placeholder={p + " *"} required className="w-full border border-white/20 rounded-sm px-4 py-3 text-sm bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-brand-4" />
              ))}
              <select className="w-full border border-white/20 rounded-sm px-4 py-3 text-sm bg-brand-1 text-white/70 focus:outline-none focus:border-brand-4">
                <option>Select Treatment</option>
                <option>Porcelain Veneers</option>
                <option>Full Smile Makeover</option>
                <option>Teeth Whitening</option>
                <option>Dental Implants</option>
                <option>Invisalign</option>
              </select>
              <textarea rows={3} placeholder="Message" className="w-full border border-white/20 rounded-sm px-4 py-3 text-sm bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-brand-4 resize-none" />
              <button type="submit" className="w-full bg-brand-4 text-brand-1 py-3 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white transition-colors rounded-sm">
                Book Consultation
              </button>
            </form>
            <div className="mt-4 text-center">
              <a href="tel:+918130750008" className="text-brand-4 text-[11px] font-semibold hover:text-white transition-colors">📞 +91 81307 50008</a>
            </div>
          </aside>
        </div>
      </section>

      {/* Full-width image feature */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <img src="/assets/images/smile-makeovers-left.webp" alt="Smile Makeover Result" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/90 via-brand-1/60 to-transparent" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,48px)] mb-6">
            Why Choose The Dental Roots for Your <em className="italic text-brand-4">Smile Makeover?</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {["Team of multi-specialist cosmetic dentists", "Digital Smile Design — preview before treatment", "State-of-the-art technology across all clinics", "Trusted by celebrities and international patients", "Flexible treatment timelines to suit your schedule", "Post-treatment support and follow-ups included"].map((item) => (
              <div key={item} className="flex gap-3">
                <span className="text-brand-4 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-white/80 text-[14px]">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">
              Book an Appointment
            </Link>
            <a href="tel:+918130750008" className="inline-flex items-center px-8 py-4 border border-white text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all rounded-full">
              Call: +91 81307 50008
            </a>
          </div>
        </div>
      </section>

      {/* Gallery row */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(22px,3vw,40px)] text-center mb-10">
            Smile <em className="italic text-brand-2">Gallery</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["/assets/images/smile-makeovers-img.webp", "/assets/images/smile-makeovers-other.webp", "/assets/images/smile-makeovers-the-dental-roots.webp", "/assets/images/smile-makeovers-in-delhi-ncr.webp"].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-sm">
                <img src={src} alt="Smile Makeover" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-12">
            Frequently Asked <em className="italic text-brand-2">Questions</em>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-brand-3/20 rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-brand-6/30 transition-colors"
                >
                  <span className="font-serif text-[15px] pr-4">{faq.q}</span>
                  <span className={`text-brand-2 text-xl transition-transform flex-shrink-0 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-brand-6/30 text-ink-2 text-[13px] leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Services */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-10">
            Explore More <em className="italic text-brand-2">Services</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {moreServices.map((s) => (
              <Link key={s.title} to={s.href} className="group text-center">
                <div className="aspect-square overflow-hidden rounded-sm mb-3">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <span className="font-serif text-sm group-hover:text-brand-2 transition-colors">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
