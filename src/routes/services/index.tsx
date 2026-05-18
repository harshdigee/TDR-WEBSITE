import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Dental Services — The Dental Roots" },
      { name: "description", content: "Explore all dental treatments at The Dental Roots including implants, Invisalign, veneers, smile makeovers, root canal and more." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { title: "Painless Root Canal Treatment", img: "/assets/images/painless-root-canal-treatment-the-dental-roots.webp", desc: "Save your tooth from decay with the best dental treatment", href: "/painless-root-canal-treatment" },
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", desc: "India's leading and most trusted dental clinic, catering to diversified dental needs.", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Invisalign", img: "/assets/images/invisalign-and-braces-the-dental-roots.webp", desc: "Preview your smile — visualize your teeth after Invisalign", href: "/invisalign-clear-aligners-teeth-straightening" },
  { title: "Tooth Coloured Restoration", img: "/assets/images/tooth-coloured-restoration-the-dental-roots.webp", desc: "A painless cosmetic solution for a smile you'll love", href: "/tooth-coloured-restoration" },
  { title: "Veneers", img: "/assets/images/veneers-the-dental-roots.webp", desc: "Get porcelain Veneers treatment at The Dental Roots and enhance your smile", href: "/veneers" },
  { title: "Laser Dentistry", img: "/assets/images/laser-dentistry-the-dental-roots.webp", desc: "In recent years, laser dentistry has superseded many traditional dentistry practices", href: "/laser-dentistry" },
  { title: "Smile Makeovers", img: "/assets/images/smile-makeovers-the-dental-roots.webp", desc: "Hollywood Smile Makeover Treatment at The Dental Roots", href: "/best-smile-makeover-clinic" },
  { title: "Kid's Dentistry", img: "/assets/images/kid-s-dentistry.webp", desc: "Trusted pediatric dentistry at The Dental Roots", href: "/kids-dentistry" },
  { title: "Painless Extractions (Tooth Removal)", img: "/assets/images/smile-roots.webp", desc: "Painless Tooth Extraction in Delhi NCR, India", href: "/painless-extractions-tooth-removal" },
  { title: "Teeth Whitening", img: "/assets/images/teeth-whitening-the-dental-roots.webp", desc: "Bring Back the Glow of your Smile — Safe, Effective, and Fast with Long-Lasting White Results", href: "/teeth-whitening" },
  { title: "Painless Wisdom Tooth Extraction", img: "/assets/images/painless-wisdom.webp", desc: "A surgical procedure to remove one or more wisdom teeth", href: "/painless-wisdom-tooth-extraction" },
  { title: "Dentures", img: "/assets/images/dentures-and-bridges-the-dental-roots.webp", desc: "Find the right denture for you!", href: "/dentures" },
  { title: "Braces", img: "/assets/images/braces-the-dental-roots.webp", desc: "We perfect your smile with love, braces, and aligners", href: "/braces" },
  { title: "Dental Bridges", img: "/assets/images/dental-bridges-the-dental-roots.webp", desc: "Restore Your Smile to Perfect Condition with Excellence!", href: "/dental-bridges" },
  { title: "Porcelain Crowns", img: "/assets/images/crowns-the-dental-roots.webp", desc: "This restorative procedure uses prosthetic devices to return your smile to its natural state.", href: "/porcelain-crowns" },
];

function ServicesPage() {
  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[55vh] flex items-end pt-16 overflow-hidden">
        <img
          src="/assets/images/dental-roots-bg.webp"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/90 via-brand-1/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-1/70 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Services & Treatments</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-4 max-w-2xl">
            Excellence in Dentistry
          </h1>
          <p className="text-white/70 font-light max-w-lg">India's leading and most trusted Dental Clinic — delivering world-class care across Delhi & Gurugram.</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">All Services</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,52px)] leading-[1.08] tracking-tight">
              Our Dental <em className="italic text-brand-2">Treatments</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.href}
                className="group relative bg-white border border-brand-3/10 overflow-hidden block hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-1/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4 relative">
                  <h3 className="font-serif text-sm font-medium mb-1 group-hover:text-brand-2 transition-colors">{s.title}</h3>
                  <p className="text-[11px] text-ink-3 leading-snug line-clamp-2">{s.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-1 to-brand-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-brand-1 text-center">
        <h2 className="font-serif font-light text-3xl md:text-5xl text-white mb-4">
          Not Sure Which Treatment is <em className="italic text-brand-4">Right for You?</em>
        </h2>
        <p className="text-white/70 font-light mb-8 max-w-lg mx-auto">Book a free consultation and our specialists will guide you through the best options for your smile.</p>
        <Link to="/contact-us" className="inline-flex items-center px-10 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-6 transition-all rounded-full">
          Book Free Consultation
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
