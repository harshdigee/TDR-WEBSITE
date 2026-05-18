import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/dentures")({
  head: () => ({ meta: [{ title: "Complete Dentures Treatment in Gurgaon, Delhi — The Dental Roots" }, { name: "description", content: "Find the right denture for you! Modern, custom-made dentures at The Dental Roots, Delhi & Gurgaon." }] }),
  component: DenturesPage,
});

const faqs = [
  { q: "Do you need to replace missing teeth?", a: "Yes. Living with missing teeth can cause a variety of dental problems, including gum disease, bone loss, and damage to remaining healthy teeth. It also affects your ability to eat, smile, and enjoy your day-to-day life." },
  { q: "How long does it take to get used to wearing dentures?", a: "When you first start wearing full dentures, it will likely take a few weeks of getting used to. During this time, you might come back for a small adjustment. Soon your mouth and jaw will be accustomed to wearing your removable dentures." },
  { q: "How do you take care of dentures?", a: "Implant-supported dentures should be cared for like natural teeth with regular brushing and flossing. For removable dentures: daily cleanings with denture cleaner, avoiding coffee or other dark foods/drinks to prevent staining, and regular trips to our office." },
  { q: "How long do dentures last?", a: "With proper maintenance, dentures should last upwards of 6-8 years. Natural wear and tear accumulate no matter how well you maintain your dentures, and your mouth will naturally change over the years." },
  { q: "You can love your smile", a: "The Dental Roots, located in New Delhi and Gurgaon, is proud to offer state-of-the-art dental care to help our patients feel great about their smiles. We're here to help you find the best solution for your missing teeth in a compassionate, stress-free environment." },
];

const dentureTypes = [
  { name: "Full Dentures", desc: "Used when no healthy teeth remain in either your upper or lower jaw. Dentures will provide support to the lips and face so you can eat, drink, and smile with confidence.", img: "/assets/images/mask-img1.webp" },
  { name: "Partial Dentures", desc: "A great option when you still have some healthy natural teeth. A partial denture uses healthy teeth as attachment points for support and stability.", img: "/assets/images/mask-img2.webp" },
  { name: "Implant-supported Dentures", desc: "Our most highly recommended denture solution! As few as 2–4 dental implants are placed, and your denture will be permanently secured. Prevents bone loss, offers more stability.", img: "/assets/images/dentures-left-img.webp" },
];

const moreServices = [
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Dental Bridges", img: "/assets/images/dental-bridges-the-dental-roots.webp", href: "/dental-bridges" },
  { title: "Porcelain Crowns", img: "/assets/images/crowns-the-dental-roots.webp", href: "/porcelain-crowns" },
  { title: "Root Canal", img: "/assets/images/painless-root-canal-treatment-the-dental-roots.webp", href: "/painless-root-canal-treatment" },
  { title: "Smile Makeovers", img: "/assets/images/smile-makeovers-the-dental-roots.webp", href: "/best-smile-makeover-clinic" },
];

function DenturesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/dentures-banner.webp" alt="Dentures" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Restorative Dentistry</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Complete Dentures Treatment <em className="italic">in Gurgaon, Delhi</em></h1>
          <p className="text-white/75 font-light max-w-xl">Find the right denture for you!</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-5 text-ink-2 leading-relaxed">
            <p>At The Dental Roots, we use modern technology to deliver effective denture treatments for missing teeth. We offer a variety of complete denture options created with top-of-the-line materials to perfectly fit your mouth and restore your ability to chew, speak, and live your life.</p>
            <h3 className="font-serif text-xl text-ink">Custom-made Dentures @ The Dental Roots</h3>
            <p>We custom-make dentures in our laboratory, based on impressions and measurements taken of your mouth. This approach guarantees you a set of dentures that fit comfortably, give you a proper bite, and look like your natural teeth did.</p>
            <p>During your consultation, we will discuss all aspects of teeth replacement systems, such as:</p>
            <ul className="space-y-2">{["Aesthetics","Function","Comfort","Longevity"].map((item) => (<li key={item} className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" />{item}</li>))}</ul>

            <h2 className="font-serif text-2xl text-ink pt-4">Types of Dentures</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {dentureTypes.map((d) => (
                <div key={d.name} className="border border-brand-3/10 rounded-sm overflow-hidden">
                  <img src={d.img} alt={d.name} className="w-full aspect-video object-cover" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                  <div className="p-4"><h3 className="font-serif text-base mb-2">{d.name}</h3><p className="text-[12px] text-ink-2">{d.desc}</p></div>
                </div>
              ))}
            </div>
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
        <img src="/assets/images/dentures-right-img.webp" alt="Denture Care" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-8">Advice and Tips on Caring for your <em className="italic text-brand-4">Dentures</em></h2>
          <div className="grid md:grid-cols-2 gap-3 mb-8">{["Only your dental professional is qualified to diagnose your oral health and adjust your denture or partial.","Dentures should be brushed inside and outside daily with a soft, large nylon denture toothbrush.","Use denture creams instead of toothpaste, which are too abrasive and will scratch your denture.","Dentures warp if placed in hot water. Rinse with cold water.","Inspect your denture regularly for worn teeth.","When not in use, cover dentures with water or a denture-cleaning solution to prevent them from drying out."].map((item) => (<div key={item} className="flex gap-3 bg-white/10 p-3 rounded-sm"><span className="w-2 h-2 rounded-full bg-brand-4 mt-1 flex-shrink-0" /><span className="text-[13px] text-white/80">{item}</span></div>))}</div>
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

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-10">Explore More <em className="italic text-brand-2">Services</em></h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">{moreServices.map((s) => (<Link key={s.title} to={s.href} className="group text-center"><div className="aspect-square overflow-hidden rounded-sm mb-3"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div><span className="font-serif text-sm group-hover:text-brand-2 transition-colors">{s.title}</span></Link>))}</div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
