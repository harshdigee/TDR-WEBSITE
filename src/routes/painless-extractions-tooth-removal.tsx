import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/painless-extractions-tooth-removal")({
  head: () => ({ meta: [{ title: "Painless Tooth Extractions (Tooth Removal) — The Dental Roots" }, { name: "description", content: "Painless Tooth Extraction in Delhi NCR, India. Expert oral surgeons at The Dental Roots provide gentle, painless extractions." }] }),
  component: ExtractionPage,
});

const faqs = [
  { q: "Will I feel pain during the procedure?", a: "No, depending on the complexity of the extraction different aesthetic options can be administered during the procedure which will minimize the pain and discomfort during the extraction." },
  { q: "Can I eat and drink immediately following an extraction?", a: "After your tooth is removed, we'll ask you to stick to soft foods and liquids for about a day. Avoid chewy, crunchy, sharp, and sticky foods until you're fully healed." },
  { q: "Do all wisdom teeth have to be removed?", a: "No, not all wisdom teeth need to be removed — it's very subjective and based on the dental situation of each individual patient. Typically, wisdom teeth do NOT need to be removed if they're healthy, have fully erupted, are positioned correctly, and can be properly cleaned and flossed." },
  { q: "How long does it take to recover from surgery?", a: "The average recovery time is about 3 days (though it may be longer) and swelling, soreness, and discomfort are likely side effects. Your mouth may need a few weeks to heal completely after surgery." },
  { q: "What are dry sockets?", a: "A blood clot forms in the extraction area to protect the bone and nerves. If that clot becomes dislodged, it will cause the bone and nerve to be exposed to air, fluids and food, causing infection — a dry socket. Dry socket can happen 3–4 days after extraction. It causes pain and bad breath." },
  { q: "Do you offer emergency visits?", a: "If a problematic tooth is causing you pain, contact us right away. We do offer emergency care, including same-day extractions." },
];

const moreServices = [
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Root Canal", img: "/assets/images/painless-root-canal-treatment-the-dental-roots.webp", href: "/painless-root-canal-treatment" },
  { title: "Porcelain Crowns", img: "/assets/images/crowns-the-dental-roots.webp", href: "/porcelain-crowns" },
  { title: "Dental Bridges", img: "/assets/images/dental-bridges-the-dental-roots.webp", href: "/dental-bridges" },
  { title: "Dentures", img: "/assets/images/dentures-and-bridges-the-dental-roots.webp", href: "/dentures" },
];

function ExtractionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/painless-extractions-image.webp" alt="Tooth Extractions" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Oral Surgery</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Painless Tooth Extractions <em className="italic">(Tooth Removal)</em></h1>
          <p className="text-white/75 font-light max-w-xl">Painless Tooth Extraction in Delhi NCR, India</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-5 text-ink-2 leading-relaxed">
            <p>Tooth extraction, also known as tooth removal, is a procedure available at our clinic located in Panchsheel Park New Delhi, Sushant Lok Gurgaon, and Tata Primanti Sohna Road. If you're in pain and looking for a <strong>painless tooth extraction in Delhi NCR</strong>, The Dental Roots is here to help.</p>
            <h3 className="font-serif text-xl text-ink">A Tooth Extraction can Maintain Oral Health</h3>
            <p>When tooth damage is so extensive that it cannot be repaired with a filling, crown, or root canal, a dental extraction may be necessary. Trust our team to provide an accurate diagnosis, expert guidance, and answers to all your questions.</p>
            <h3 className="font-serif text-xl text-ink">Tooth Extraction is Never Our First Choice:</h3>
            <p>Incredible restorative options exist that can allow you to keep your natural tooth for as long as possible. However, an extraction may be recommended if your tooth is:</p>
            <ul className="space-y-2">{["Severely decayed/infected","Cracked or damaged","Causing intense pain","Crowding other teeth"].map((item) => (<li key={item} className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" />{item}</li>))}</ul>

            <h3 className="font-serif text-xl text-ink">What is Tooth Extraction Socket Preservation?</h3>
            <p>After having a tooth extracted, there will be an empty "socket" where the tooth used to be. If the socket is not kept stimulated, the bone that supports the tooth starts to resorb and becomes thin and shallow. Socket preservation minimizes bone shrinkage, preserving the bone's depth and height to allow for a better outcome for future denture, bridge, or implant.</p>

            <h3 className="font-serif text-xl text-ink">Advantages of Tooth Extraction Socket Preservation</h3>
            <ul className="space-y-2">{["Prevents the bone from shrinking, maintaining horizontal facial bone structure","Less likely for a replacement denture or reline to be needed","Reduced gap formation under the pontic of a bridge","Better bone depth and height for placing a dental implant","Saves 6 months of healing time compared to having a bone graft after socket healing"].map((item) => (<li key={item} className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" />{item}</li>))}</ul>
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
        <img src="/assets/images/painless-extractions-img.webp" alt="Extraction Procedure" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-6">The Tooth Extraction <em className="italic text-brand-4">Procedure</em></h2>
          <ul className="space-y-4 mb-8">{["When we extract a tooth, we normally use a local anesthetic, which will numb your mouth. You will be awake during the procedure but won't feel any pain.","The time taken depends on the reason for extraction and where the tooth is located in your mouth. It could take 5 minutes or it could take 30 minutes.","To extract the tooth, we will widen your tooth socket and then softly rock the tooth to loosen it, to the point where it can be pulled out."].map((item) => (<li key={item} className="flex gap-3 text-white/80 text-[14px]"><span className="w-2 h-2 rounded-full bg-brand-4 mt-1.5 flex-shrink-0" />{item}</li>))}</ul>
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
