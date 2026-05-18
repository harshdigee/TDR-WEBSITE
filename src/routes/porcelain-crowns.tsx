import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/porcelain-crowns")({
  head: () => ({ meta: [{ title: "Porcelain Dental Crowns in Delhi NCR, India — The Dental Roots" }, { name: "description", content: "This restorative procedure uses prosthetic devices to return your smile to its natural state. Expert crown treatments at The Dental Roots." }] }),
  component: PorcelainCrownsPage,
});

const faqs = [
  { q: "How long will a crown last?", a: "Life of your Crown depends on the effectiveness and regularity of your dental hygiene. As a general rule, they last between 7–15 years but longer periods are certainly possible with outstanding oral hygiene and regular dental check-ups." },
  { q: "Will my porcelain crowns break?", a: "Porcelain is exceptionally strong. Crows can be scratched, stained, broken, and damaged from lifestyle choices such as poor oral hygiene and dietary selections. Breaking a crown isn't something you should expect, but it is possible. Fortunately, we can replace crowns quickly when they break." },
  { q: "Is the porcelain crown process painful?", a: "The process of placing a crown is not painful. Topical numbing and local anaesthesia are used to help ensure optimal comfort, making the experience similar to getting a filling." },
  { q: "Will porcelain crowns stain?", a: "Porcelain is stain-resistant but not stain-proof. You can help prevent stains through proper maintenance. Porcelain restorations cannot be whitened — once stained, they must be replaced to restore appearance." },
];

const crownTypes = [
  { name: "PFM Crowns", desc: "Porcelain-fused-to-metal crowns provide great aesthetics and durability. Less costly than all-porcelain crowns.", img: "/assets/images/porcelain-crowns-image1.webp" },
  { name: "Zirconia Crowns", desc: "Strong as metal with aesthetic properties of porcelain. Great aesthetics, strong and long-lasting.", img: "/assets/images/porcelain-crowns-image2.webp" },
  { name: "Porcelain Crowns", desc: "Most popular type. Provide the best and most natural-looking smile. Best options for front teeth restorations.", img: "/assets/images/porcelain-crowns-image3.webp" },
  { name: "E-Max Crowns", desc: "Lithium Disilicate Crowns — great aesthetics and durability. A great choice for front and back teeth.", img: "/assets/images/porcelain-crowns-image4.webp" },
  { name: "Gold Crowns", desc: "Strong and highly resistant, wear down slowly. Poor aesthetic qualities but excellent durability.", img: "/assets/images/porcelain-crowns-image5.webp" },
];

const moreServices = [
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Root Canal", img: "/assets/images/painless-root-canal-treatment-the-dental-roots.webp", href: "/painless-root-canal-treatment" },
  { title: "Dental Bridges", img: "/assets/images/dental-bridges-the-dental-roots.webp", href: "/dental-bridges" },
  { title: "Veneers", img: "/assets/images/veneers-the-dental-roots.webp", href: "/veneers" },
  { title: "Laser Dentistry", img: "/assets/images/laser-dentistry-the-dental-roots.webp", href: "/laser-dentistry" },
];

function PorcelainCrownsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/crowns-the-dental-roots.webp" alt="Porcelain Crowns" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/images/crowns-the-dental-roots.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Restorative Dentistry</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Porcelain Dental Crowns <em className="italic">in Delhi NCR, India</em></h1>
          <p className="text-white/75 font-light max-w-xl">This restorative procedure uses prosthetic devices to return your smile to its natural state.</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-5 text-ink-2 leading-relaxed">
            <p>This restorative procedure uses prosthetic devices to return your smile to its natural state. A crown is used when the tooth structure is damaged or fractured. <strong>The Dental Roots</strong> is a multi-specialty dental clinic offering a wide variety of crowns and bridges.</p>
            <h3 className="font-serif text-xl text-ink">What is a Dental Crown? Do I need one?</h3>
            <p>A <strong>dental crown</strong> is like a cap that covers the entire visible portion of the tooth, protecting its remaining structure and bringing back its original shape, size, and colour. You might need a dental crown for:</p>
            <ul className="space-y-2">{["Severe Tooth Decay — when decay has spread over a large surface area","Root Canal — tooth needs reinforcement after root canal","Dental Implant — crown acts as your new, artificial tooth","To protect a weak, damaged tooth","To hold together a fractured tooth"].map((item) => (<li key={item} className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" />{item}</li>))}</ul>

            <h2 className="font-serif text-2xl text-ink pt-4">Types of Dental Crowns</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {crownTypes.map((c) => (
                <div key={c.name} className="border border-brand-3/10 rounded-sm overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full aspect-video object-cover" loading="lazy" />
                  <div className="p-4"><h3 className="font-serif text-base mb-2">{c.name}</h3><p className="text-[12px] text-ink-2">{c.desc}</p></div>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-xl text-ink">Only the Best for your Smile</h3>
            <p>No matter the reason you require a crown, seeking treatment from a top-of-the-line provider is key to not only having a positive experience but also ensuring a successful outcome. At <strong>The Dental Roots</strong>, we've painstakingly crafted an environment focused on making you smile.</p>
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
        <img src="/assets/images/crowns-other-left.webp" alt="Crown Procedure" className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/images/crowns-the-dental-roots.webp"; }} />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-8">What to Expect During the <em className="italic text-brand-4">Procedure?</em></h2>
          <div className="grid md:grid-cols-2 gap-3 mb-8">{["You won't feel any discomfort as the entire procedure is done under local anesthesia.","Your dentist will prepare your tooth which may involve removing decayed tooth structure or doing a root canal.","An impression of the prepared tooth is taken before placing a temporary crown.","In a few days, the permanent crown is placed with the help of special cement.","Once the crown gets bonded, the dentist will ensure that it matches the function and appearance of your teeth."].map((item) => (<div key={item} className="flex gap-3 bg-white/10 p-3 rounded-sm"><span className="w-2 h-2 rounded-full bg-brand-4 mt-1 flex-shrink-0" /><span className="text-[13px] text-white/80">{item}</span></div>))}</div>
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
