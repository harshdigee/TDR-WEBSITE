import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/dental-bridges")({
  head: () => ({ meta: [{ title: "Dental Bridges Treatment in Delhi NCR, India — The Dental Roots" }, { name: "description", content: "Restore Your Smile to Perfect Condition! Expert Dental Bridge treatments at The Dental Roots, Delhi & Gurgaon." }] }),
  component: DentalBridgesPage,
});

const faqs = [
  { q: "How much dental bridge cost in India?", a: "Generally, Dental Bridge costs around Rs. 5,000 to Rs. 10,000 per crown in India. The exact cost can vary based on factors like the number of bridges needed, materials used, and any additional procedures required." },
  { q: "How long will a dental bridge last?", a: "Most dental bridges will last for 5–15 years or even longer. Help increase the durability of your bridge through proper at-home hygiene and regular exams and check-ups." },
  { q: "How many teeth are needed for a bridge?", a: "A dental bridge typically requires at least two teeth to anchor it securely in place. These anchor teeth (abutment teeth) are usually healthy natural teeth on either side of the gap. In some cases, more than two abutment teeth may be needed for additional support." },
];

const moreServices = [
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Dentures", img: "/assets/images/dentures-and-bridges-the-dental-roots.webp", href: "/dentures" },
  { title: "Porcelain Crowns", img: "/assets/images/crowns-the-dental-roots.webp", href: "/porcelain-crowns" },
  { title: "Root Canal", img: "/assets/images/painless-root-canal-treatment-the-dental-roots.webp", href: "/painless-root-canal-treatment" },
  { title: "Veneers", img: "/assets/images/veneers-the-dental-roots.webp", href: "/veneers" },
];

function DentalBridgesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/dental-bridges-the-dental-roots.webp" alt="Dental Bridges" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Restorative Dentistry</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Dental Bridges Treatment <em className="italic">in Delhi NCR, India</em></h1>
          <p className="text-white/75 font-light max-w-xl">Restore Your Smile to Perfect Condition!</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-5 text-ink-2 leading-relaxed">
            <p>If you're considering <strong>dental bridges treatment</strong> in Delhi NCR, India, The Dental Roots is your go-to destination. With a stellar reputation for excellence in dental care, The Dental Roots offers top-notch services tailored to your needs.</p>
            <p>Have you lost a tooth or two? We often recommend this treatment for those who are missing one or more teeth, have an otherwise strong, stable bite, and aren't interested in surgical treatment.</p>
            <p>A dental bridge is so called because it is used to bridge the gap created by a single missing tooth or multiple missing teeth. The gap is bridged by inserting an artificial tooth (pontic) in the gap, which is anchored in place by attaching it to the teeth on either side (abutments) through the use of crowns.</p>
            <h3 className="font-serif text-xl text-ink">How Does a Dental Bridge Work?</h3>
            <p>A tooth bridge fills the empty space in your mouth — typically without the need for surgery — and can be completed in as little as 2–3 weeks. In some cases, we may recommend placing implants on either side of the gap to serve as the attachment point for your bridge.</p>
            <h3 className="font-serif text-xl text-ink">Why Choose a Dental Bridge?</h3>
            <ul className="space-y-2">{["The convenience of a fixed appliance means you do not have to remove it each night like removable dentures","Anchor to other teeth provides a stable, secure appliance for eating, speaking, and laughing","Restores an aesthetically pleasing smile"].map((item) => (<li key={item} className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" />{item}</li>))}</ul>
            <h3 className="font-serif text-xl text-ink">When is a Bridge Required?</h3>
            <ul className="space-y-2">{["Replace a large filling when there isn't enough tooth remaining","Protect a weak tooth from fracturing","Restore a fractured tooth","Cover a dental implant","Cover a discoloured or poorly shaped tooth","Cover a tooth that has had root canal treatment","Commonly used if you're missing one or more teeth — bridges cover the space and are cemented to natural teeth or implants"].map((item) => (<li key={item} className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" />{item}</li>))}</ul>
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
        <img src="/assets/images/dental-bridge-left.webp" alt="Bridge Procedure" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-8">What To Expect When <em className="italic text-brand-4">Getting a Bridge:</em></h2>
          <div className="grid md:grid-cols-2 gap-3 mb-8">{["You won't feel any discomfort as the entire procedure is done under local anaesthesia.","Your dentist will prepare your tooth which may involve extractions and root canal treatments.","An impression of the prepared area is taken to create a bridge that fits appropriately.","A temporary bridge is placed until the permanent one is ready.","In a few days, a permanent bridge is placed with the help of special cement.","Once the bridge gets bonded, the dentist will ensure it matches the function and appearance of your teeth."].map((item) => (<div key={item} className="flex gap-3 bg-white/10 p-3 rounded-sm"><span className="w-2 h-2 rounded-full bg-brand-4 mt-1 flex-shrink-0" /><span className="text-[13px] text-white/80">{item}</span></div>))}</div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">Book an Appointment</Link>
            <a href="tel:+918130750008" className="inline-flex items-center px-8 py-4 border border-white text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all rounded-full">Call: +91 81307 50008</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-12">Frequently Asked <em className="italic text-brand-2">Questions</em></h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<div key={i} className="border border-brand-3/20 rounded-sm overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-brand-6/30 transition-colors"><span className="font-serif text-[15px] pr-4">{faq.q}</span><span className={`text-brand-2 text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span></button>{openFaq === i && <div className="px-6 py-4 bg-brand-6/30 text-ink-2 text-[13px] leading-relaxed">{faq.a}</div>}</div>))}</div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-white"><div className="max-w-[1260px] mx-auto"><h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-10">Explore More <em className="italic text-brand-2">Services</em></h2><div className="grid grid-cols-2 md:grid-cols-5 gap-4">{moreServices.map((s) => (<Link key={s.title} to={s.href} className="group text-center"><div className="aspect-square overflow-hidden rounded-sm mb-3"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div><span className="font-serif text-sm group-hover:text-brand-2 transition-colors">{s.title}</span></Link>))}</div></div></section>
      <SiteFooter />
    </div>
  );
}
