import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/braces")({
  head: () => ({
    meta: [
      { title: "Dental Braces in India: Delhi and Gurgaon — The Dental Roots" },
      { name: "description", content: "We perfect your smile with love, braces, and aligners. Expert orthodontic treatments at The Dental Roots, Delhi & Gurgaon." },
    ],
  }),
  component: BracesPage,
});

const faqs = [
  { q: "How much does it cost for braces in India?", a: "Traditional Metal Braces: INR 25,000–60,000. Ceramic Braces: INR 40,000–85,000. Lingual Braces: INR 70,000–2,50,000. Invisalign: INR 1,50,000–3,50,000. Costs vary based on clinic location, case complexity, and the type of braces." },
  { q: "What is the cheapest cost of braces in India?", a: "On average, traditional metal braces in India can cost anywhere from INR 25,000 to INR 50,000 or more. This cost can be lower in some rural areas or smaller cities and higher in metropolitan areas." },
  { q: "How much do 6-month braces cost in India?", a: "On average, you can expect the cost of 6-month braces in India to range from INR 25,000 to INR 50,000 or more." },
  { q: "Why should I get braces?", a: "If you feel hesitant to smile because your teeth are misaligned, braces are an option to consider. Braces can change not just your teeth but also your confidence levels and attitude to life. They can close gaps, straighten misaligned teeth, and give you a picture-perfect smile." },
  { q: "How many visits before getting braces?", a: "This depends largely on the condition of your teeth. Generally, a pre-ortho consultation for acquiring your dental records is required. The visit also depends on the type of braces chosen." },
  { q: "When do braces start hurting?", a: "Modern braces use nickel-titanium wires that are lighter, stronger, and more flexible than traditional hardened steel. These adapt to the shape of your mouth, avoiding soreness and requiring minimal adjustments." },
  { q: "Who are the ideal candidates for braces treatment?", a: "Orthodontic treatment can be sought by anyone regardless of age group, race, or gender. Our orthodontic treatments in Delhi NCR are ideal for crowded teeth, misaligned teeth, bad bite issues, and more." },
];

const moreServices = [
  { title: "Invisalign", img: "/assets/images/invisalign-and-braces-the-dental-roots.webp", href: "/invisalign-clear-aligners-teeth-straightening" },
  { title: "Veneers", img: "/assets/images/veneers-the-dental-roots.webp", href: "/veneers" },
  { title: "Smile Makeovers", img: "/assets/images/smile-makeovers-the-dental-roots.webp", href: "/best-smile-makeover-clinic" },
  { title: "Dental Implants", img: "/assets/images/implants-the-dental-roots.webp", href: "/full-mouth-dental-implant-treatment-clinic" },
  { title: "Kids Dentistry", img: "/assets/images/kid-s-dentistry.webp", href: "/kids-dentistry" },
];

const braceTypes = [
  { name: "Traditional Metal Braces", img: "/assets/images/braces/Metal-Braces.webp", desc: "Most common and well-known type. Metal brackets and wires, highly effective in correcting various dental issues. Modern metal braces are more comfortable and less conspicuous than ever before." },
  { name: "Ceramic Braces", img: "/assets/images/braces/Ceramic-braces.webp", desc: "Clear braces that blend with natural tooth colour. A discreet choice while providing excellent orthodontic results." },
  { name: "Lingual Braces", img: "/assets/images/braces/Lingual-Braces.webp", desc: "Hidden behind the teeth, completely invisible when you smile. Custom-made to fit the contours of your teeth." },
  { name: "Invisalign", img: "/assets/images/braces/Invisible-braces.webp", desc: "Revolutionary clear, removable aligners. Virtually invisible with ultimate convenience and aesthetics." },
];

function BracesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/braces-banner-the-dental-roots.webp" alt="Dental Braces" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Orthodontics</span></div>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Dental Braces in India: <em className="italic">Delhi and Gurgaon</em></h1>
          <p className="text-white/75 font-light max-w-xl">We perfect your smile with love, braces, and aligners</p>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_340px] gap-10">
          <div className="space-y-5 text-ink-2 leading-relaxed">
            <h2 className="font-serif text-2xl text-ink">The Ultimate Guide to Dental Braces Treatment and Cost</h2>
            <p>Are you considering getting dental braces in India? Look no further, as we, at <strong>The Dental Roots</strong>, are here to provide you with the most comprehensive and informative guide on dental braces and their cost in India. In this guide, we will cover everything you need to know about <strong>dental braces in India</strong>, from the types of braces available to their cost and the benefits they offer.</p>

            <h2 className="font-serif text-2xl text-ink pt-4">Types of Dental Braces in India</h2>
            <div className="grid grid-cols-2 gap-4">
              {braceTypes.map((b) => (
                <div key={b.name} className="border border-brand-3/10 rounded-sm overflow-hidden">
                  <img src={b.img} alt={b.name} className="w-full aspect-video object-cover" loading="lazy" />
                  <div className="p-4">
                    <h3 className="font-serif text-base mb-2">{b.name}</h3>
                    <p className="text-[12px] text-ink-2">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl text-ink pt-4">Best Orthodontic Treatment in Delhi & Gurgaon!</h2>
            <p>All of us are unique in many ways and it is natural to have a different smile. We, at The Dental Roots, believe that everyone deserves to feel confident with a beautiful smile. We offer advanced orthodontic treatments in our clinics in Panchsheel Park New Delhi, Sushant Lok Gurgaon, and Tata Primanti Sohna Road.</p>

            <h2 className="font-serif text-2xl text-ink pt-4">The Cost of Dental Braces in India</h2>
            <ul className="space-y-2">
              <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" /><span><strong>Traditional Metal Braces:</strong> INR 25,000 to INR 60,000</span></li>
              <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" /><span><strong>Ceramic Braces:</strong> INR 40,000 to INR 85,000</span></li>
              <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" /><span><strong>Lingual Braces:</strong> INR 70,000 to INR 2,50,000</span></li>
              <li className="flex gap-3"><span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" /><span><strong>Invisalign:</strong> INR 1,50,000 to INR 3,50,000</span></li>
            </ul>

            <h2 className="font-serif text-2xl text-ink pt-4">Benefits of Getting Dental Braces in India</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[["Enhanced Confidence", "Straightening your teeth can transform your smile, helping you feel more self-assured in social and professional settings."],["Improved Oral Health", "Misaligned teeth can lead to gum disease and tooth decay. Dental braces correct these issues, promoting better oral health."],["Functional Improvements", "Orthodontic treatment enhances your bite, making it easier to chew food and speak clearly."],["Long-Term Investment", "A straighter smile not only improves your appearance but also contributes to your overall quality of life."]].map(([title, text]) => (
                <div key={title} className="bg-brand-6/30 p-5 rounded-sm">
                  <h3 className="font-serif text-base mb-2">{title}</h3>
                  <p className="text-[12px] text-ink-2">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="bg-brand-6/30 border border-brand-3/10 p-6 rounded-sm h-fit sticky top-24">
            <h3 className="font-serif text-xl mb-5">Book an Appointment</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {["Full Name", "Email", "Phone Number"].map((p) => (<input key={p} placeholder={p + "*"} required className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" />))}
              <select className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white text-ink-2"><option>Select Braces Type</option><option>Metal Braces</option><option>Ceramic Braces</option><option>Lingual Braces</option><option>Invisalign</option></select>
              <textarea rows={3} placeholder="Message" className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white resize-none" />
              <button type="submit" className="w-full bg-brand-1 text-white py-3 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-colors rounded-sm">Submit</button>
            </form>
            <div className="mt-4 text-center"><a href="tel:+918130750008" className="text-brand-2 text-[11px] font-semibold hover:underline">📞 +91 81307 50008</a></div>
          </aside>
        </div>
      </section>

      {/* Why orthodontic treatment */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <img src="/assets/images/braces-other_img_1.webp" alt="Why Braces" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-1/85" />
        <div className="relative z-10 max-w-[900px] mx-auto text-white">
          <h2 className="font-serif font-light text-[clamp(24px,3.5vw,44px)] mb-6">Why is Orthodontic Treatment <em className="italic text-brand-4">Important?</em></h2>
          <p className="text-white/80 mb-5 leading-relaxed">Teeth that are crowded and crooked are more difficult to keep clean. Tooth decay, gum disease, and tooth loss may arise from this. The abnormal wear of tooth surfaces, poor chewing function, and excessive stress on the bone that supports the teeth are some other dental problems that can arise with a misaligned dental structure.</p>
          <p className="text-white/80 mb-8 leading-relaxed">To provide painless orthodontic treatment, we at The Dental Roots are well-equipped with cutting-edge technology and contemporary equipment. Along with endodontics and implantology, our chief dentist, Dr. Dheeraj Setia, has a wealth of expertise in the field of orthodontics.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">Book an Appointment</Link>
            <a href="tel:+918130750008" className="inline-flex items-center px-8 py-4 border border-white text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all rounded-full">Call: +91 81307 50008</a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] text-center mb-12">FAQs About <em className="italic text-brand-2">Braces</em></h2>
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
            {moreServices.map((s) => (
              <Link key={s.title} to={s.href} className="group text-center">
                <div className="aspect-square overflow-hidden rounded-sm mb-3"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div>
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
