import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/painless-root-canal-treatment")({
  head: () => ({
    meta: [
      { title: "Painless Root Canal Treatment in Gurgaon, India — The Dental Roots" },
      { name: "description", content: "Save your tooth from decay! Expert Endodontists at The Dental Roots perform painless Root Canal Treatments using advanced technology in Delhi & Gurgaon." },
    ],
  }),
  component: RCTPage,
});

const faqs = [
  { q: "What is a root canal treatment and why do I need it?", a: "Root Canal Treatment is a procedure to repair and save a badly damaged or infected tooth instead of removing it. The term Root Canal comes from cleaning of the canal inside the tooth's root. The procedure involves removing the damaged/infected area of the tooth (the pulp), cleaning and disinfecting it, then filling and sealing it." },
  { q: "What will happen during the RCT procedure?", a: "The first step is to take an X-ray to see the shape of the root canals. Your Endodontist will then use Local Anaesthesia to numb the area. An access hole will be drilled into the tooth, and the pulp along with bacteria and decayed tissue is removed. The tooth is then sealed with a rubber-like filling material. After RCT, the tooth will likely need a crown." },
  { q: "Is root canal treatment painful?", a: "When a person is told they need RCT, they usually think of pain. However, the pain is caused by the infection — not the RCT itself. RCT is done to eliminate the pain and is virtually painless. Our specialized Endodontists administer local anaesthesia with utmost care to reduce anxiety and provide pain-free RCT." },
  { q: "Would extraction be a better alternative?", a: "If you have a choice, it is always better to retain your natural teeth by Root Canal treatment. There is no point replacing your natural teeth with artificial ones. Root canal treatment holds several advantages over extraction — cost being one of them. RCT has a high success rate with results that last a lifetime." },
  { q: "How can I avoid the need for root canal treatment in the future?", a: "Keep your teeth free of decay by brushing and flossing each day. Follow a healthy diet low in sugar and stay away from strong acidic drinks. Visit your dentist regularly for check-ups. If you play sports, consider a custom-designed mouthguard." },
];

const moreServices = [
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Veneers", img: "/assets/images/veneers-the-dental-roots.webp", href: "/veneers" },
  { title: "Porcelain Crowns", img: "/assets/images/crowns-the-dental-roots.webp", href: "/porcelain-crowns" },
  { title: "Laser Dentistry", img: "/assets/images/laser-dentistry-the-dental-roots.webp", href: "/laser-dentistry" },
  { title: "Smile Makeovers", img: "/assets/images/smile-makeovers-the-dental-roots.webp", href: "/best-smile-makeover-clinic" },
];

const rctSteps = [
  { img: "/assets/images/infected-tooth.webp", label: "Infected Tooth" },
  { img: "/assets/images/opening-image.webp", label: "Opening made in the Tooth" },
  { img: "/assets/images/infected-images.webp", label: "Infected Tissue Removed, Canals Cleaned" },
  { img: "/assets/images/permanent-images.webp", label: "Canal Filled with Permanent Material" },
  { img: "/assets/images/opening-image2.webp", label: "Opening Sealed with Filling" },
  { img: "/assets/images/crown-img-wrap.webp", label: "New Crown Cemented onto Rebuilt Tooth" },
];

function RCTPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/dental-rct-gbanner.webp" alt="Root Canal Treatment" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Endodontics</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Painless Root Canal Treatment <em className="italic">in Gurgaon, India</em></h1>
          <p className="text-white/75 font-light max-w-xl">Save your tooth from decay — Expert Endodontists, Latest Technology, Single-Visit RCT available</p>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-5 text-ink-2 leading-relaxed">
            <p>Many people assume getting a root canal is stressful. Not so! In fact, our patients are always surprised by how comfortable and easy it is. This restorative treatment is the best way to stop painful decay and infection and save your tooth from extraction.</p>
            <p>It is designed to eliminate bacteria from the infected root canal, prevent reinfection of the tooth and save the natural tooth. During RCT, the inflamed or infected pulp is removed, and the inside of the tooth is thoroughly cleaned and disinfected, then filled with a rubber-like material and sealed.</p>
            <p>The Dental Roots is the only dental clinic in Delhi NCR with more than FIVE highly qualified and experienced Endodontists. With our modern technology and over 10 years of experience, root canal treatment in New Delhi and Gurgaon is painless and relieves toothache effectively.</p>

            <h3 className="font-serif text-xl text-ink">Save your Tooth from Decay!</h3>
            <p>When you undergo a Root Canal Treatment at our clinic, you'll be treated by a team of specialized Endodontists led by Dr. Dheeraj Setia. At The Dental Roots, we focus on providing RCT utilizing the latest techniques of rotary Endodontics, reducing clinical procedure time. The procedures usually take 30–35 minutes and can be completed in one or two visits.</p>

            <h3 className="font-serif text-xl text-ink">What will Happen During the RCT Dental Procedure?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {rctSteps.map((step) => (
                <div key={step.label} className="text-center">
                  <img src={step.img} alt={step.label} className="w-24 h-24 object-contain mx-auto mb-2" loading="lazy" />
                  <p className="text-[11px] text-ink-2 font-medium">{step.label}</p>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-xl text-ink">Single Visit RCT</h3>
            <ul className="space-y-2">
              <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" /><span>At The Dental Roots, our experienced endodontists perform single-visit root canal treatments using advanced endodontics technologies incorporating rotatory equipment, apex locators, surgical operating microscope, digital radiography, and lasers.</span></li>
              <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" /><span>To ensure 100% clinical success, patients are thoroughly examined and educated about the clinical situation and accordingly advised for the best-suited treatment.</span></li>
            </ul>
          </div>

          {/* Sidebar */}
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

      {/* Laser RCT highlight */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <img src="/assets/images/painless-root-canal -image.webp" alt="Laser Root Canal" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-6">Laser Root Canal <em className="italic text-brand-4">Treatment</em></h2>
          <ul className="space-y-4 mb-8">
            {["Laser root canal treatment uses a parallel beam of intense light to clean the root canals.", "Even after cleaning and shaping the canals thoroughly, some bacteria can remain in the canal wall. When the laser beam is fired into the canal, it completely kills the remaining bacteria and makes the canal sterile.", "Post-operative problems of traditional root canals are practically eliminated — the laser reduces inflammation, swelling, and discomfort often felt as the anesthesia wears off."].map((item) => (
              <li key={item} className="flex gap-3 text-white/80 text-[14px]"><span className="w-2 h-2 rounded-full bg-brand-4 mt-1.5 flex-shrink-0" />{item}</li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">Book an Appointment</Link>
            <a href="tel:+918130750008" className="inline-flex items-center px-8 py-4 border border-white text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all rounded-full">Call: +91 81307 50008</a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-12">FAQs About <em className="italic text-brand-2">Root Canal Treatment</em></h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-brand-3/20 rounded-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-brand-6/30 transition-colors">
                  <span className="font-serif text-[15px] pr-4">{faq.q}</span>
                  <span className={`text-brand-2 text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && <div className="px-6 py-4 bg-brand-6/30 text-ink-2 text-[13px] leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Services */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-10">Explore More <em className="italic text-brand-2">Services</em></h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {moreServices.map((s) => (<Link key={s.title} to={s.href} className="group text-center"><div className="aspect-square overflow-hidden rounded-sm mb-3"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div><span className="font-serif text-sm group-hover:text-brand-2 transition-colors">{s.title}</span></Link>))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
