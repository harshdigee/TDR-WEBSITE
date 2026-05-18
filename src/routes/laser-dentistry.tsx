import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/laser-dentistry")({
  head: () => ({
    meta: [
      { title: "Advanced Clinical Laser Dentistry (Painless) Treatment in Delhi NCR, India — The Dental Roots" },
      { name: "description", content: "In recent years, laser dentistry has superseded many traditional dentistry practices. Book advanced, painless laser dentistry at The Dental Roots in Delhi & Gurgaon." },
    ],
  }),
  component: LaserDentistryPage,
});

const faqs = [
  { q: "What is a laser used for in dentistry?", a: "In dentistry, lasers are utilized for a variety of purposes, such as gum contouring, frenectomies (removing tissue between teeth), and treating gum disease. Lasers can also be used to remove decay from teeth, particularly in cases where traditional drilling may not be ideal, as they can minimize discomfort and preserve more of the healthy tooth structure. Overall, lasers in dentistry offer advantages like reduced pain, faster healing times, and enhanced precision, making them a valuable tool for various treatments." },
  { q: "Is laser dentistry painful?", a: "One of the major benefits of opting for laser dentistry at The Dental Roots is that it's much less invasive than scalpel treatment, with significantly less pain and a quicker recovery time. We use lasers to replace scalpels and drills, removing the need for as much anaesthetic and also reducing the risk of infection as there's no need for stitches with laser dentistry." },
  { q: "Do you need anaesthesia for laser dentistry?", a: "Typically, laser dentistry at The Dental Roots reduces the need for anaesthesia, because laser dentistry is much less invasive and much less uncomfortable. Because our lasers are so precise, we are able to target the exact issue, without affecting the surrounding healthy tissue, so bleeding is usually kept at bay and stitches aren't usually necessary." },
  { q: "How long does the gums take to heal after laser dentistry?", a: "If you've had laser dentistry to treat gum disease, recovery could take between 2–4 weeks, however this period will differ from person to person depending on the severity of the periodontitis. Although recovery from laser dentistry is much shorter and less painful compared to traditional dentistry, you should still try and stick to a soft food diet during the weeks after your treatment." },
];

const moreServices = [
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Veneers", img: "/assets/images/veneers-the-dental-roots.webp", href: "/veneers" },
  { title: "Invisalign", img: "/assets/images/invisalign-and-braces-the-dental-roots.webp", href: "/invisalign-clear-aligners-teeth-straightening" },
  { title: "Smile Makeovers", img: "/assets/images/smile-makeovers-the-dental-roots.webp", href: "/best-smile-makeover-clinic" },
  { title: "Teeth Whitening", img: "/assets/images/teeth-whitening-the-dental-roots.webp", href: "/teeth-whitening" },
];

function LaserDentistryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/laser-dentistry-banner-the-dental-roots.webp" alt="Laser Dentistry" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Laser Dentistry</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Advanced Clinical Laser Dentistry <em className="italic">(Painless)</em></h1>
          <p className="text-white/75 font-light max-w-xl">In recent years, laser dentistry has superseded many traditional dentistry practices, making treatments more precise and less painful.</p>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="prose-dental">
            <p className="text-ink-2 mb-5 leading-relaxed">In recent years, laser dentistry has superseded many traditional dentistry practices, making treatments more precise and less painful. This newer class of dentistry utilizes intense beams of light projected by a dental laser. The specialists at <strong>The Dental Roots</strong>, Panchsheel Park New Delhi, Sushant Lok Gurgaon, Golf Course Rd and Tata Primanti Sohna Road use dental lasers to perform a wide variety of treatments, including soft tissue shaping and removal.</p>
            <p className="text-ink-2 mb-6 leading-relaxed"><strong>Dr. Dheeraj Setia</strong> and his team at <strong>The Dental Roots</strong> believe in staying at the forefront of emerging dental technology for his procedural options, and, more importantly, for his patients.</p>

            <h2 className="font-serif text-2xl mb-4">How can Lasers be used in Dental Treatments?</h2>
            <p className="text-ink-2 mb-4 leading-relaxed"><strong>The Dental Roots</strong> continues to expand its use of lasers. Here are some areas we have incorporated this technology:</p>
            <ul className="space-y-3 mb-8">
              {[
                ["Periodontal disease", "When cleaning periodontal pockets, the laser vaporizes infected tissue, disinfecting the area and triggering tissue re-growth at the same time. As the laser energy penetrates the gum tissue, it instantly seals blood vessels and nerve endings. This dramatically reduces post-procedure pain and encourages faster healing."],
                ["Gum contouring", "Lasers are excellent for addressing gummy smiles, creating a more symmetrical gumline, and preparing the gumline when readying a tooth for a crown."],
                ["Other soft tissue uses", "From exposing unerupted permanent teeth in children to freeing the tongue in a frenectomy, from removing tissue from partially exposed wisdom teeth to treating canker sores and other lesions."],
                ["Hard tissue uses", "We use our lasers to remove tooth decay without needing to drill. We also use the laser to prepare the surrounding enamel for the composite resin filling of the cavity."],
              ].map(([title, text]) => (
                <li key={title} className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-2 mt-2 flex-shrink-0" />
                  <div><strong>{title}: </strong><span className="text-ink-2">{text}</span></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar form */}
          <aside className="bg-brand-6/30 border border-brand-3/10 p-6 rounded-sm h-fit sticky top-24">
            <h3 className="font-serif text-xl mb-5">Book an Appointment</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {["Full Name", "Email", "Phone Number"].map((p) => (
                <input key={p} placeholder={p + "*"} required className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" />
              ))}
              <select className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white text-ink-2">
                <option value="">Select Service</option>
                <option>Laser Dentistry</option>
                <option>Gum Contouring</option>
                <option>Periodontal Treatment</option>
              </select>
              <textarea rows={3} placeholder="Message" className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white resize-none" />
              <button type="submit" className="w-full bg-brand-1 text-white py-3 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-colors rounded-sm">Submit</button>
            </form>
            <div className="mt-4 text-center text-[11px] text-ink-2">
              <a href="tel:+918130750008" className="text-brand-2 font-semibold hover:underline">📞 +91 81307 50008</a>
            </div>
          </aside>
        </div>
      </section>

      {/* Benefits banner */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <img src="/assets/images/laser-dentistry-img.webp" alt="Laser Dentistry Benefits" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white text-center">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-8">Here are Some of the other Benefits Associated with <em className="italic text-brand-4">Laser Dentistry</em></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Faster healing and tissue regeneration","Preservation of more of the natural tooth","Reduced bleeding during and after treatment","Reduced need for anesthesia","Reduced need for stitches and sutures","Reduced risk of bacterial infections after procedures"].map((b) => (
              <div key={b} className="flex items-start gap-3 bg-white/10 p-4 rounded-sm text-left">
                <span className="w-2 h-2 rounded-full bg-brand-4 mt-1.5 flex-shrink-0" />
                <span className="text-[13px] font-light">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">Book an Appointment</Link>
            <a href="tel:+918130750008" className="inline-flex items-center px-8 py-4 border border-white text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all rounded-full">Call us: +91 81307 50008</a>
          </div>
        </div>
      </section>

      {/* How effective section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-12">How Effective is Laser Dentistry Compared to <em className="italic text-brand-2">Other Dental Procedures?</em></h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/assets/images/laser-dentistry-image.webp" alt="Laser Dentistry" className="w-full rounded-sm" loading="lazy" />
            <div className="space-y-5 text-ink-2 leading-relaxed">
              <p>The team at <strong>The Dental Roots</strong> in New Delhi and Gurgaon is fully trained in the performance of all necessary dental procedures. Each is performed with the utmost care regardless of the inclusion of laser technology. That said, laser dentistry does offer benefits over traditional drill dentistry. The precision of the beam of light has been found as accurate, if not more so, than a scalpel.</p>
              <p>When it comes to advanced clinical laser dentistry, you're in for a game-changer. In Delhi NCR, India, <strong>The Dental Roots</strong> is leading the charge in painless dental treatments using cutting-edge laser technology. Imagine saying goodbye to those dreaded dental drills and hello to a virtually pain-free experience.</p>
              <p>Forget the anxiety-inducing dental experiences of the past; <strong>The Dental Roots</strong> brings advanced clinical laser dentistry to your doorstep. Say farewell to discomfort and hello to a new era of painless dental treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-12">FAQs About <em className="italic text-brand-2">Laser Dentistry</em></h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-brand-3/20 rounded-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-brand-6/30 transition-colors">
                  <span className="font-serif text-[15px] pr-4">{faq.q}</span>
                  <span className={`text-brand-2 text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
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
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-10">Explore More <em className="italic text-brand-2">Services</em></h2>
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
