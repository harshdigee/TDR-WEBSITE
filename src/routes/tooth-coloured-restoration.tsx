import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/tooth-coloured-restoration")({
  head: () => ({ meta: [{ title: "Tooth-Coloured (Composite Fillings) & Restorations — The Dental Roots" }, { name: "description", content: "A painless cosmetic solution for a smile you'll love. Expert composite fillings and tooth bonding at The Dental Roots, Delhi & Gurgaon." }] }),
  component: ToothColouredRestorationPage,
});

const faqs = [
  { q: "How long do tooth-colored fillings last?", a: "Tooth-colored fillings, also known as composite fillings, typically last between 5 to 10 years. The lifespan depends on various factors, including the size and location of the filling, oral hygiene practices, and daily habits." },
  { q: "Which filling is best for teeth?", a: "Composite fillings blend seamlessly with natural teeth, providing a more aesthetic option. Determining the best filling depends on the extent of decay, location of the tooth, and individual preferences." },
  { q: "Are tooth-colored fillings safe?", a: "Yes, tooth-colored fillings are considered safe for dental use. The composite materials used are non-toxic and biocompatible, posing a minimal risk of allergic reactions." },
  { q: "Are tooth-colored fillings more expensive?", a: "Yes, tooth-colored fillings are generally more expensive than traditional amalgam (metal) fillings. The cost difference is primarily due to the materials used and the more intricate application process." },
  { q: "Is composite filling good for teeth?", a: "Yes, composite fillings have several advantages: Aesthetics (matches natural tooth colour), Preservation of Tooth Structure (bonds directly, requires less drilling), Reduced Sensitivity (non-conductive), Versatility (used for both front and back teeth), and Durability (modern materials are strong and long-lasting)." },
];

const bondingBenefits = ["Repair decayed teeth","Repair chipped or cracked teeth","Change the shape of teeth","Make teeth look longer","Close gaps between teeth","Recolour stained teeth"];
const compositeBenefits = ["Same colour as your teeth","Look like a natural part of your teeth","Durable bond with the tooth enamel","Mercury-free","Preserves more natural tooth structure than metal fillings","Not as vulnerable to leaking and breaking as metal fillings"];

const moreServices = [
  { title: "Veneers", img: "/assets/images/veneers-the-dental-roots.webp", href: "/veneers" },
  { title: "Teeth Whitening", img: "/assets/images/teeth-whitening-the-dental-roots.webp", href: "/teeth-whitening" },
  { title: "Smile Makeovers", img: "/assets/images/smile-makeovers-the-dental-roots.webp", href: "/best-smile-makeover-clinic" },
  { title: "Porcelain Crowns", img: "/assets/images/crowns-the-dental-roots.webp", href: "/porcelain-crowns" },
  { title: "Root Canal", img: "/assets/images/painless-root-canal-treatment-the-dental-roots.webp", href: "/painless-root-canal-treatment" },
];

function ToothColouredRestorationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/tooth-coloured-restoration-banner-the-dental-roots.webp" alt="Tooth Coloured Restoration" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/images/tooth-coloured-restoration-the-dental-roots.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Cosmetic Dentistry</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Tooth-Coloured Fillings & <em className="italic">Composite Restorations</em></h1>
          <p className="text-white/75 font-light max-w-xl">A painless cosmetic solution for a smile you'll love</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-5 text-ink-2 leading-relaxed">
            <p>In the realm of modern dentistry, the quest for the perfect smile often involves not only impeccable oral hygiene but also the artistry of restorative procedures. Enter tooth-coloured fillings and composite restorations — a cutting-edge approach that transcends traditional dentistry, offering a seamless blend of aesthetics and functionality.</p>

            <h2 className="font-serif text-2xl text-ink">Tooth-Coloured Fillings</h2>
            <p><strong>Tooth-coloured fillings</strong>, also known as composite fillings, have emerged as a beacon of progress in the dental world. Crafted from a mixture of resin and fine glass particles, these fillings not only match the natural colour of your teeth but also provide structural integrity.</p>

            <h2 className="font-serif text-2xl text-ink">What is Tooth Bonding?</h2>
            <p>Teeth bonding, or dental composite bonding, is a cosmetic dental procedure used to improve the appearance of teeth and restore a beautiful smile. A composite resin is applied to the tooth and hardened with a curing ultraviolet light. Some ways tooth bonding can improve your smile:</p>
            <div className="grid grid-cols-2 gap-2">{bondingBenefits.map((b) => (<div key={b} className="flex gap-2 bg-brand-6/30 p-3 rounded-sm text-[13px]"><span className="text-brand-2 font-bold">✓</span>{b}</div>))}</div>

            <h2 className="font-serif text-2xl text-ink">Reasons to Choose Composite Filling</h2>
            <div className="grid grid-cols-2 gap-2">{compositeBenefits.map((b) => (<div key={b} className="flex gap-2 bg-brand-6/30 p-3 rounded-sm text-[13px]"><span className="text-brand-2 font-bold">✓</span>{b}</div>))}</div>

            <h2 className="font-serif text-2xl text-ink">The Dental Bonding Process</h2>
            <ul className="space-y-3">{["The first stage is to select a shade of composite material that best matches the colour of the tooth.","Having chosen the colour and prepared the tooth, we apply the putty-like material and mould it into shape. The soft bonding material is hardened using a painless laser.","Once the tooth bonding materials have hardened, we make final cosmetic adjustments and polish it to match the look and texture of your teeth.","A tooth can normally be bonded in a single 30–60-minute visit. The lifespan of dental bonding is typically 5–10 years."].map((item, i) => (<li key={i} className="flex gap-3"><span className="w-6 h-6 rounded-full bg-brand-1 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>{item}</li>))}</ul>
          </div>
          <aside className="bg-brand-6/30 border border-brand-3/10 p-6 rounded-sm h-fit sticky top-24">
            <h3 className="font-serif text-xl mb-5">Book an Appointment</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {["Full Name", "Email", "Phone Number"].map((p) => (<input key={p} placeholder={p + "*"} required className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" />))}
              <textarea rows={3} placeholder="Message" className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white resize-none" />
              <button type="submit" className="w-full bg-brand-1 text-white py-3 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-colors rounded-sm">Submit</button>
            </form>
            <div className="mt-4 text-center"><a href="tel:+918130750008" className="text-brand-2 text-[11px] font-semibold hover:underline">📞 +91 81307 50008</a></div>
          </aside>
        </div>
      </section>

      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <img src="/assets/images/tooth-restoration-img.webp" alt="Tooth Restoration" className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/images/tooth-coloured-restoration-the-dental-roots.webp"; }} />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-6">Who is a Good Candidate for <em className="italic text-brand-4">Cosmetic Bonding?</em></h2>
          <p className="text-white/80 mb-5">Ideal candidates for tooth bonding are those that are happy with the overall colour and appearance of their teeth, but simply need a tooth repaired that's discoloured, damaged, or oddly shaped.</p>
          <p className="text-white/80 mb-5"><strong className="text-white">Minor Damage and Misshapen Teeth:</strong> Tooth bonding is ideal for those who have generally healthy teeth but have incurred slight damage, like a chipped front tooth, or a visible tooth that has a shape or length that's unesthetic.</p>
          <p className="text-white/80 mb-8"><strong className="text-white">Localized Tooth Discoloration:</strong> While tooth bonding can address discoloration in a single tooth, those with widespread discoloration should consider getting their teeth professionally whitened before bonding.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">Book an Appointment</Link>
            <a href="tel:+918130750008" className="inline-flex items-center px-8 py-4 border border-white text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all rounded-full">Call: +91 81307 50008</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-brand-6/30"><div className="max-w-[900px] mx-auto"><h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-12">Frequently Asked <em className="italic text-brand-2">Questions</em></h2><div className="space-y-3">{faqs.map((faq, i) => (<div key={i} className="border border-brand-3/20 rounded-sm overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-brand-6/30 transition-colors"><span className="font-serif text-[15px] pr-4">{faq.q}</span><span className={`text-brand-2 text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span></button>{openFaq === i && <div className="px-6 py-4 bg-brand-6/30 text-ink-2 text-[13px] leading-relaxed">{faq.a}</div>}</div>))}</div></div></section>
      <section className="py-20 px-6 md:px-12 bg-white"><div className="max-w-[1260px] mx-auto"><h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-10">Explore More <em className="italic text-brand-2">Services</em></h2><div className="grid grid-cols-2 md:grid-cols-5 gap-4">{moreServices.map((s) => (<Link key={s.title} to={s.href} className="group text-center"><div className="aspect-square overflow-hidden rounded-sm mb-3"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div><span className="font-serif text-sm group-hover:text-brand-2 transition-colors">{s.title}</span></Link>))}</div></div></section>
      <SiteFooter />
    </div>
  );
}
