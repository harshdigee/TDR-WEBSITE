import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/dental-tourism")({
  head: () => ({
    meta: [
      { title: "Dental Tourism in India — The Dental Roots, Delhi NCR" },
      { name: "description", content: "Global Standard Dental Implants in Gurgaon. Trust the experts in smile restoration, cosmetic dentistry, & high-quality dental implants where advanced care meets lasting results." },
    ],
  }),
  component: DentalTourismPage,
});

const whyChoosePoints = [
  "They are the most natural solution, aesthetically and functionally.",
  "They fit harmoniously into the dental arch.",
  "They cannot be distinguished from real teeth in their function or appearance.",
  "They make it unnecessary to grind the neighbouring teeth.",
  "They provide a stable foundation for dentures, sparing patients the disadvantages of conventional dentures such as pressure points and poor fit.",
  "They are reliable and a more permanent solution to replacing missing teeth.",
];

const smileImages = [
  "/assets/images/smile-new-image1.webp",
  "/assets/images/art-dental6.webp",
  "/assets/images/art-dental1.webp",
  "/assets/images/art-dental2.webp",
  "/assets/images/art-dental3.webp",
  "/assets/images/art-dental4.webp",
];

const stories = [
  { name: "Rita Goodwin", designation: "Social Media Influencer", text: "Professional, friendly, and thorough The Dental Roots delivered outstanding, reliable, & long lasting results. Their exceptional attention to detail and patient-focused approach truly sets them apart from others." },
  { name: "Rashalika Sabharwal", designation: "Indian Actress, Social Media Influencer", text: "The Dental Roots team made me feel comfortable, supported, and genuinely cared for throughout my entire implant journey. My new smile looks natural, healthy, and the results exceeded my expectations!" },
  { name: "Shristi Rana", designation: "Miss Asia Pacific World 2013", text: "From the initial consultation to the final restoration, The Dental Roots provided expert care and personalized treatment. I'm thrilled with my implants and the confidence they've given me." },
];

const faqs = [
  { q: "What is full-mouth dental implant treatment at The Dental Roots?", a: "It is a complete restoration of the upper or lower jaw using multiple implants and fixed prosthetic teeth, designed to replace missing or damaged teeth permanently." },
  { q: "Who is an ideal candidate for full-mouth implants?", a: "Anyone with multiple missing teeth, severe decay, or loose dentures looking for a stable, long-term solution may qualify." },
  { q: "How long does the full-mouth implant procedure take?", a: "Depending on bone condition and case complexity, treatment can range from same-day provisional teeth to a few months for complete healing and final teeth." },
  { q: "Are full-mouth dental implants painful?", a: "With advanced techniques and modern sedation, The Dental Roots ensures minimal discomfort and a smooth, well-managed recovery." },
  { q: "Why choose The Dental Roots for full-mouth implants?", a: "The clinic offers experienced implant specialists, advanced technology, in-house prosthetic support, and personalised treatment planning for predictable, long-lasting results." },
];

function ContactFormSidebar() {
  return (
    <div className="bg-brand-6/30 border border-brand-3/10 p-6 rounded-sm">
      <h3 className="font-serif text-xl mb-1">Missing Tooth?</h3>
      <p className="text-[12px] text-ink-2 mb-5">Discover an Excellent Way to Regain Your Confidence!</p>
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        {["Full Name", "Email", "Phone Number"].map((p) => (
          <input key={p} placeholder={p + "*"} required className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" />
        ))}
        <textarea rows={3} placeholder="Message" className="w-full border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white resize-none" />
        <button type="submit" className="w-full bg-brand-1 text-white py-3 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-colors rounded-sm">
          Schedule an Appointment
        </button>
      </form>
    </div>
  );
}

function DentalTourismPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStory, setActiveStory] = useState(0);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/new-banner-image-implants.webp" alt="Dental Tourism" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Dental Tourism</span></div>
          <span className="block text-brand-4 font-light mb-2 text-sm">Restoring Smiles with World-Class Dental Implants</span>
          <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,60px)] leading-[1.08] mb-3 max-w-2xl">Global Standard Dental Implants in Gurgaon</h1>
          <p className="text-white/75 font-light max-w-xl mb-6">Trust the experts in smile restoration, cosmetic dentistry, & high-quality dental implants where advanced care meets lasting results.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">
              Book Free Consultation
            </Link>
          </div>
          <img src="/assets/images/google-rating.webp" alt="Google Rating" className="h-10" />
        </div>
      </section>

      {/* Why Choose Dental Implants */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-[1fr_380px] gap-12">
          <div>
            <h2 className="font-serif font-light text-[clamp(26px,3.5vw,46px)] mb-4">Why Choose <em className="italic text-brand-2">Dental Implants?</em></h2>
            <p className="text-ink-2 mb-8 leading-relaxed">Dental implants restore your smile, improve chewing, prevent bone loss, and offer a long-lasting, natural-looking solution for missing teeth.</p>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <img src="/assets/images/dental-choose-img.webp" alt="Dental Implants" className="w-full rounded-sm" loading="lazy" />
              <ul className="space-y-3">
                {whyChoosePoints.map((p) => (
                  <li key={p} className="flex gap-3 text-ink-2 text-sm leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
                <li>
                  <Link to="/contact-us" className="mt-4 inline-flex items-center px-6 py-3 bg-brand-1 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-all rounded-full">
                    Contact Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ContactFormSidebar />
        </div>
      </section>

      {/* Regain Your Smile */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto text-center">
          <h2 className="font-serif font-light text-[clamp(26px,3.5vw,46px)] mb-4">Regain Your <em className="italic text-brand-2">Smile</em></h2>
          <p className="text-ink-2 mb-12 max-w-2xl mx-auto">Whether you're missing one tooth or all, we offer solutions like single implants, zirconia bridges, All-on-4, All-on-6, and Smile in a Day tailored to your needs.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {smileImages.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-sm">
                <img src={img} alt={`Smile ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            ))}
          </div>
          <Link to="/contact-us" className="mt-10 inline-flex items-center px-8 py-4 bg-brand-1 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-all rounded-full">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Accessible Treatment */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] mb-4">The Most Accessible Dental Implant Treatments in <em className="italic text-brand-2">Delhi NCR</em></h2>
            <p className="text-ink-2 mb-6 leading-relaxed">You no longer need to travel abroad for accessible yet effective dental implants. Get expert care in Gurgaon at prices similar to clinics in the UK and UAE with the trust and quality you deserve.</p>
            <ul className="space-y-3 mb-8">
              {["All dentures & restorations are made in an in-house laboratory.", "We specialise in full-jaw restorations with implants.", "Working in high volumes for costs reduction.", "Efficient high-tech equipment, 3D printers and zirconia teeth milling machines."].map((item) => (
                <li key={item} className="flex gap-3 text-ink-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-2 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-brand-1 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-all rounded-full">
              Book a Consultation
            </Link>
          </div>
          <img src="/assets/images/graph-image1.webp" alt="Dental Treatment Chart" className="w-full rounded-sm" loading="lazy" />
        </div>
      </section>

      {/* Ditch the Dentures */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="/assets/images/denture-image1.webp" alt="Implants" className="w-full rounded-sm" loading="lazy" />
          <div>
            <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] mb-5">Ditch the Dentures, Embrace a <em className="italic text-brand-2">Permanent Smile</em></h2>
            <p className="text-ink-2 mb-5 leading-relaxed">It's time to discover a better, more permanent solution with dental implants. Unlike dentures that can slip, click, and cause embarrassment, implants are securely placed into your jawbone, acting just like your natural tooth roots.</p>
            <p className="text-ink-2 mb-8 leading-relaxed">At The Dental Roots, we're specialists in this life-altering process. We'll start with a detailed consultation to understand your needs and create a personalized plan just for you. Using our progressive technology, our dentists will precisely and comfortably place your new implants, then compose a stunning, custom-made set of teeth to go on top.</p>
            <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-brand-1 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-all rounded-full">
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 bg-brand-1">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Testimonials</span>
            <span className="w-8 h-px bg-brand-4" />
          </div>
          <h2 className="font-serif font-light text-white text-[clamp(24px,3.5vw,46px)] mb-4">Stories of <em className="italic text-brand-4">Transformation</em></h2>
          <p className="text-white/70 mb-12 max-w-xl mx-auto">No two smiles are alike. At The Dental Roots, we personalize treatments to your unique needs, ensuring results as individual and harmonious as your smile.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-sm text-left">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-brand-4 text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/80 text-[14px] leading-relaxed mb-6 italic">"{s.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{s.name}</p>
                  <p className="text-brand-4 text-[11px]">{s.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_400px] gap-12">
          <div>
            <h2 className="font-serif font-light text-[clamp(24px,3vw,42px)] mb-8">Answers to Your Dental Implant <em className="italic text-brand-2">Questions</em></h2>
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
          <div>
            <img src="/assets/images/tourism-faq-img.webp" alt="FAQ" className="w-full rounded-sm mb-6" loading="lazy" />
            <Link to="/contact-us" className="w-full inline-flex items-center justify-center px-8 py-4 bg-brand-1 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-all rounded-full">
              Consult Now
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
