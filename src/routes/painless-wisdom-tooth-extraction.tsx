import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/painless-wisdom-tooth-extraction")({
  head: () => ({ meta: [{ title: "Painless Wisdom Tooth Extraction (Removal) — The Dental Roots" }, { name: "description", content: "A surgical procedure to remove one or more wisdom teeth. Expert Oral and Maxillofacial Surgeons at The Dental Roots, Delhi & Gurgaon." }] }),
  component: WisdomExtractionPage,
});

const faqs = [
  { q: "Will I feel pain during the procedure?", a: "You will not feel pain during the procedure. We administer local anesthetic to numb the area completely, ensuring the extraction is comfortable. For more complex cases or patients with anxiety, we also offer additional sedation options." },
  { q: "Can I eat and drink immediately following an extraction?", a: "It's best to wait until the anesthetic has completely worn off before eating. For the first 24 hours, stick to a diet of soft foods and liquids. Avoid anything crunchy, chewy, or hot, as these can irritate the extraction site and dislodge the protective blood clot." },
  { q: "Do all wisdom teeth have to be removed?", a: "No, the necessity of removing wisdom teeth is highly individual. Removal is typically not required if the teeth are healthy, fully erupted, and correctly positioned without affecting your bite." },
  { q: "How long does it take to recover from surgery?", a: "Most people can expect to feel better in about 3 days, though it may take a bit longer. While swelling and soreness are normal, your mouth will continue to heal and improve over the following weeks." },
  { q: "How is the diagnosis of an impacted wisdom tooth made?", a: "The diagnosis is confirmed using an in-house OPG (Orthopantomogram) and CT scan machine to get a detailed view of the tooth's position." },
  { q: "What kind of anesthesia is used for the procedure?", a: "The procedure is typically performed under local anesthesia to ensure a painless experience, but sedation or general anesthesia options are also available." },
  { q: "What kind of specialist performs the extraction?", a: "The extraction is performed by a dedicated Oral and Maxillofacial Surgeon, a specialist trained to handle complex surgical procedures." },
];

const moreServices = [
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Root Canal", img: "/assets/images/painless-root-canal-treatment-the-dental-roots.webp", href: "/painless-root-canal-treatment" },
  { title: "Porcelain Crowns", img: "/assets/images/crowns-the-dental-roots.webp", href: "/porcelain-crowns" },
  { title: "Dental Bridges", img: "/assets/images/dental-bridges-the-dental-roots.webp", href: "/dental-bridges" },
  { title: "Laser Dentistry", img: "/assets/images/laser-dentistry-the-dental-roots.webp", href: "/laser-dentistry" },
];

function WisdomExtractionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/painless-extractions-imgs.webp" alt="Wisdom Tooth Extraction" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/images/painless-extractions-image.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Oral Surgery</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Painless Wisdom Tooth Extraction <em className="italic">(Removal)</em></h1>
          <p className="text-white/75 font-light max-w-xl">A surgical procedure to remove one or more wisdom teeth — Expert Oral & Maxillofacial Surgeons</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-5 text-ink-2 leading-relaxed">
            <h3 className="font-serif text-xl text-ink">What is Wisdom Tooth Removal?</h3>
            <p>Wisdom tooth extraction is a surgical procedure to remove one or more wisdom teeth. At The Dental Roots, our main goal is to preserve and keep your natural teeth strong and healthy for life. We are a multi-specialty center in Gurgaon and South Delhi with specialized Oral and Maxillofacial Surgeons.</p>
            <h3 className="font-serif text-xl text-ink">Wisdom Teeth Treatment in Gurgaon and South Delhi</h3>
            <p>At The Dental Roots, we do not advise wisdom tooth extraction if they are correctly positioned and do not cause any discomfort. However, if there is impaction or crowding, our dentist may recommend a wisdom tooth extraction. Tooth Extraction Surgery is mostly a single sitting session carried out under local anesthesia to ensure painless treatment.</p>
            <h3 className="font-serif text-xl text-ink">What Causes an Impacted Wisdom Tooth?</h3>
            <p>Mostly, wisdom teeth become impacted because it is the last tooth to enter the oral cavity and by then your jaw doesn't have enough space for it to emerge. Sometimes, partial impaction is seen when the tooth grows in the wrong direction.</p>
            <h3 className="font-serif text-xl text-ink">What are the Symptoms?</h3>
            <ul className="space-y-2">{["Pain or swelling around the jaw","Red, swollen, or bleeding gums","Bad breath","An unpleasant taste in your mouth","Problems opening your mouth"].map((item) => (<li key={item} className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" />{item}</li>))}</ul>
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
        <img src="/assets/images/painless-wisdom-left.webp" alt="Impacted Wisdom Teeth" className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/images/painless-extractions-imgs.webp"; }} />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-6">How are Impacted Wisdom Teeth <em className="italic text-brand-4">Treated?</em></h2>
          <p className="text-white/80 mb-5 leading-relaxed">If your impacted wisdom teeth cause symptoms or dental problems, your dentist may suggest a surgical extraction which is usually an outpatient procedure. Your doctor may use anaesthetic drugs to induce a type of anaesthesia, such as:</p>
          <ul className="space-y-3 mb-8">{["Local anaesthesia to numb your mouth","Sedation anaesthesia relaxes you and blocks pain","General anaesthesia to make you sleep and not feel anything during the procedure"].map((item) => (<li key={item} className="flex gap-3 text-white/80 text-[14px]"><span className="w-2 h-2 rounded-full bg-brand-4 mt-1.5 flex-shrink-0" />{item}</li>))}</ul>
          <p className="text-white/80 mb-8">The entire surgery usually takes about 30 to 60 minutes. Sometimes the procedure may take longer if the tooth is completely impacted and buried within your gums or jawbone.</p>
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
