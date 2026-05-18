import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/teeth-whitening")({
  head: () => ({
    meta: [
      { title: "Instant Teeth Whitening Treatment in Delhi NCR, India — The Dental Roots" },
      { name: "description", content: "Bring Back the Glow of your Smile — Safe, Effective, and Fast with Long-Lasting White Results. Book Zoom Teeth Whitening at The Dental Roots." },
    ],
  }),
  component: TeethWhiteningPage,
});

const faqs = [
  { q: "We're making New Delhi and Gurgaon smile", a: "At The Dental Roots, we've carefully created an environment focused on incredible results. We care about our community and believe in delivering world-class care right here in Panchsheel Park, Sushant Lok and Tata Primanti. With years of experience and a commitment to advanced technology and the latest techniques, your smile is in good hands." },
  { q: "Do I need a teeth whitening treatment?", a: "Most stains are caused by darkly pigmented foods and drinks or tobacco use. However, some stains may be the result of a dental health concern. We, at The Dental Roots, determine whether or not teeth whitening is the best treatment or if a deep cleaning, crown, filling, or veneers are a better option." },
  { q: "How white will my teeth get?", a: "Whitening results may vary from person to person, it depends on the source and gravity of the tooth discoloration and the nature of your tooth structure. However, significant satisfactory results with the IN-OFFICE ZOOM TEETH WHITENING have been seen. Here, at The Dental Roots, this technology can whiten your teeth up to 8 shades in only one application of 20 minutes." },
  { q: "How does teeth whitening work?", a: "Stains on teeth can appear due to the plaque and tartar on the surface of our teeth, it can be removed by dental cleaning. But sometimes the stains still appear in the layer below called the dentin. The bleaching solution applied to the teeth combines with oxygen from the air and carbon in the dentin to break apart the staining molecules stuck on the teeth." },
  { q: "Will teeth whitening work for me?", a: "Results from whitening vary from person to person and on the type of stains. Teeth whitening generally works best on yellowish-brown stains compared to grey stains." },
  { q: "Is teeth whitening good for sensitive teeth?", a: "If you have sensitive teeth, we recommend that you avoid over-the-counter whitening strips and other DIY treatments without first talking to your dentist. We'll outline a professional treatment that will help you avoid irritation and ensure a comfortable and successful experience." },
  { q: "Is Teeth Whitening Safe?", a: "Absolutely! At The Dental Roots we use only clinically proven systems that have been developed through extensive research and testing. Zoom whitening system uses carbamide peroxide or hydrogen peroxide which is perfectly safe for teeth and gums, provided that it is applied under the supervision of a trained and accredited dental professional." },
  { q: "Who can get teeth whitening?", a: "Almost anyone can benefit from teeth whitening. However, we typically do not recommend teeth whitening to pregnant or lactating women, children under 16 years of age, or those with allergic reactions to teeth bleaching whitening agents." },
  { q: "How long will my teeth stay white after the treatment?", a: "Our professional whitening system is designed to remove stains and discoloration from your teeth and leave them up to 8 shades whiter in one short session. However, over time with the consumption of certain foods and drinks as well as natural ageing, your teeth may become discoloured again. Avoiding foods and beverages that may cause staining can help you keep your teeth white for longer." },
  { q: "Do teeth whiteners damage tooth enamel?", a: "The answer to this is NO! Multiple clinical studies and research have shown that Zoom helps in strengthening tooth enamel along with whitening your teeth, no known effect has been seen on your overall health." },
];

const advantages = ["Fast and convenient", "Whitens teeth up to 8* shades", "Even, consistent teeth whitening", "Long-lasting white results", "Low sensitivity", "Safe, comfortable, and effective", "Performed by a Dentist"];

const moreServices = [
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Veneers", img: "/assets/images/veneers-the-dental-roots.webp", href: "/veneers" },
  { title: "Invisalign", img: "/assets/images/invisalign-and-braces-the-dental-roots.webp", href: "/invisalign-clear-aligners-teeth-straightening" },
  { title: "Smile Makeovers", img: "/assets/images/smile-makeovers-the-dental-roots.webp", href: "/best-smile-makeover-clinic" },
  { title: "Laser Dentistry", img: "/assets/images/laser-dentistry-the-dental-roots.webp", href: "/laser-dentistry" },
];

function TeethWhiteningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/teeth-whitening-banner.webp" alt="Teeth Whitening" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Teeth Whitening</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Instant Teeth Whitening Treatment <em className="italic">in Delhi NCR, India</em></h1>
          <p className="text-white/75 font-light max-w-xl">Bring Back the Glow of your Smile — Safe, Effective, and Fast with Long-Lasting White Results</p>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div>
            <p className="text-ink-2 mb-5 leading-relaxed">Nothing improves your appearance quite like a bright, pearly white smile. Our dentist-guided whitening treatments are safe, quick, and effective. You'll see a noticeable improvement in the brightness of your smile in a single treatment.</p>
            <p className="text-ink-2 mb-5 leading-relaxed">Professional <strong>teeth whitening</strong> or bleaching can get your smile looking its best. Whitening is a one-time procedure performed by a dentist at <strong>The Dental Roots</strong>, New Delhi, and Gurgaon. It is amongst the most common and widely adopted cosmetic procedures. Our Smile is one of your most important assets — it really is the first thing people notice, and having an attractive brighter smile can give your self-confidence a boost.</p>
            <p className="text-ink-2 mb-8 leading-relaxed">At <strong>The Dental Roots</strong>, South Delhi, and Gurgaon, we use <strong>Philips ZOOM Whitening</strong>, the #1 patient-requested whitening brand.</p>

            <h2 className="font-serif text-2xl mb-4">Zoom! Laser Teeth Whitening</h2>
            <p className="text-ink-2 mb-5 leading-relaxed">Zoom! is the safe and effective <strong>laser teeth whitening treatment</strong> that our cosmetic dentists use for in-office <strong>teeth whitening</strong>. With Zoom!, we can lighten your teeth several shades over the course of just one office visit. In fact, in-office tooth whitening can often lighten teeth up to ten shades in one hour.</p>
            <p className="text-ink-2 leading-relaxed">During your in-office <strong>teeth whitening</strong>, a bleaching solution is applied to the teeth with the assistance of specially designed trays. Once the trays are in place, a laser is used to gently heat the solution, working to activate oxygen molecules that can penetrate the enamel to remove stains.</p>
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
                <option>Zoom Teeth Whitening</option>
                <option>Laser Whitening</option>
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

      {/* Advantages banner */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <img src="/assets/images/teeth-whitening-img.webp" alt="Teeth Whitening" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white text-center">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-8">Advantages of In-Office Zoom <em className="italic text-brand-4">Teeth Whitening</em></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {advantages.map((a) => (
              <div key={a} className="flex items-center gap-3 bg-white/10 p-4 rounded-sm text-left">
                <span className="w-2 h-2 rounded-full bg-brand-4 flex-shrink-0" />
                <span className="text-[13px] font-light">{a}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">Book an Appointment</Link>
            <a href="tel:+918130750008" className="inline-flex items-center px-8 py-4 border border-white text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all rounded-full">Call us: +91 81307 50008</a>
          </div>
        </div>
      </section>

      {/* Why recommend section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-12">Why Recommend us for <em className="italic text-brand-2">Teeth Whitening Treatment?</em></h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/assets/images/teeth-other_img.webp" alt="Teeth Whitening" className="w-full rounded-sm" loading="lazy" />
            <div className="space-y-5 text-ink-2 leading-relaxed">
              <p>The Dental Roots provides the most cost-effective and highly comfortable teeth whitening procedure in <strong>Sushant Lok Gurgaon</strong>, <strong>Tata Primanti Sohna Road</strong>, and <strong>Panchsheel Park Delhi</strong>. It is carried out by dentists who are proficient in cosmetic dentistry.</p>
              <p>Professional Teeth Whitening done at <strong>The Dental Roots</strong> clinic is a relatively inexpensive and effective way to enhance a faded smile in just 1 hour. Our efficient and well-trained team at <strong>The Dental Roots</strong> ensures that you experience a comfortable and painless treatment.</p>
              <p>Recommend <strong>The Dental Roots</strong> for <strong>teeth whitening treatment</strong> for guaranteed results and personalized care. With state-of-the-art technology and experienced professionals, we ensure safe and effective whitening procedures tailored to your needs.</p>
              <p>Choose <strong>The Dental Roots</strong> for your teeth whitening needs and experience the difference firsthand. Your radiant smile awaits!</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-brand-1 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-all rounded-full">Book an Appointment</Link>
                <a href="tel:+918130750008" className="inline-flex items-center px-8 py-4 border-2 border-brand-1 text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-1 hover:text-white transition-all rounded-full">Call us: +91 81307 50008</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-12">Frequently Asked <em className="italic text-brand-2">Questions</em></h2>
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
