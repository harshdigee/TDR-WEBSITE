import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/international-patients")({
  head: () => ({
    meta: [
      { title: "International Patients — The Dental Roots, India" },
      { name: "description", content: "Get Treated at the Best Dental Clinic in India. Trusted globally, rooted in excellence — book your dental travel with The Dental Roots today." },
    ],
  }),
  component: InternationalPatientsPage,
});

const engineeringCards = [
  { img: "/assets/images/new-transport-img1.webp", title: "Proven & Advanced Dental Expertise", text: "Leveraging premium dental tech like AI-guided implants & advanced systems trusted across continents." },
  { img: "/assets/images/new-transport-img2.webp", title: "Hygiene & Comfort Focus", text: "Patients enjoy minimal wait times, pain-free treatments, and a focus on comfort and safety at every step." },
  { img: "/assets/images/new-transport-img3.webp", title: "Effortless Communication", text: "Our fluent English-speaking staff ensures a zero language barrier experience, making treatment smooth, clear, and stress-free." },
  { img: "/assets/images/new-transport-img4.webp", title: "Smiles Within Your Reach (Prime Locations)", text: "Strategically located clinics across Delhi NCR, offering easy access by metro, road, and airport." },
  { img: "/assets/images/new-transport-img5.webp", title: "Accommodation Support & Assistance", text: "We help patients with nearby stay arrangements and local guidance for a smooth & reassuring treatment." },
];

const journeySteps = [
  { img: "/assets/images/patients-icon-new1.webp", title: "Analysis of Your Medical History", text: "Expert medical specialists review your history to recommend the best treatments & streamline your care." },
  { img: "/assets/images/patients-icon-new2.webp", title: "Pre-Arrival Consultation", text: "Before you travel, easily schedule a convenient telemedicine consultation for a thorough and personalized health assessment." },
  { img: "/assets/images/patients-icon-new3.webp", title: "Care Beyond Travel Arrangements", text: "We offer complete support, from airport pickup to local guidance, for a smooth, stress-free dental journey." },
  { img: "/assets/images/patients-icon-new4.webp", title: "Hassle-Free Health Journey", text: "Enjoy a seamless dental experience with full support, from travel planning to post-treatment care, ensuring you focus on recovery." },
  { img: "/assets/images/patients-icon-new5.webp", title: "Post Treatment Care", text: "Comprehensive follow-up care and recovery support to ensure lasting results and complete peace of mind after your dental treatment." },
  { img: "/assets/images/patients-icon-new6.webp", title: "We Travel Back With You", text: "Our care continues after you return — post-treatment support and recovery guidance for a complete healthcare journey." },
];

const testimonials = [
  { img: "/assets/images/international-client1.webp", text: "I travelled from Australia to The Dental Roots for a smile makeover in New Delhi. Dr. Dheeraj Setia's expertise restored my teeth, giving me a white, gap-free smile and bringing back my confidence.", name: "Medina, from Australia" },
  { img: "/assets/images/international-client2.webp", text: "I came to The Dental Roots for orthodontic treatment that lasted nearly a year. The care I received was gentle, professional, and highly effective, and now I have perfectly aligned teeth and a confident smile.", name: "Saya Indo, from Japan" },
  { img: "/assets/images/international-client3.webp", text: "I visited The Dental Roots for dental treatment while serving at the Embassy of Japan in New Delhi. The team provided attentive care, and the entire procedure was handled with great professionalism and precision.", name: "Kunihiko Kawazu, Japanese Diplomat" },
  { img: "/assets/images/international-client4.webp", text: "I travelled from Los Angeles to The Dental Roots while visiting my son in Gurgaon. A 37-year-old dental issue that no doctor in the U.S. could fix was treated here quickly and painlessly.", name: "Sarah Kreigel, from Los Angeles, USA" },
];

const locations = [
  { img: "/assets/images/new-golf-location-img1.webp", title: "Golf Course Road — Gurugram", distance: "18 km from IGI Airport", link: "https://maps.app.goo.gl/koQWeTU73tQaobSc9" },
  { img: "/assets/images/punchsheel-location-img2.webp", title: "Panchsheel Park — Delhi", distance: "11.3 km from IGI Airport", link: "https://maps.app.goo.gl/2xkk3DzcCL9LC1zt9" },
  { img: "/assets/images/new-sushant-lok-smile.webp", title: "Sushant Lok — Gurugram", distance: "15 km from IGI Airport", link: "https://maps.app.goo.gl/Vv3v8asauAvwTcBR7" },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "", message: "" });
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      {["name","email","phone","country"].map((f) => (
        <input key={f} placeholder={f.charAt(0).toUpperCase() + f.slice(1) + "*"} required
          className="w-full border border-brand-3/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2"
          value={(form as any)[f]} onChange={(e) => setForm((p) => ({ ...p, [f]: e.target.value }))} />
      ))}
      <textarea rows={4} placeholder="Message*" required
        className="w-full border border-brand-3/30 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 resize-none"
        value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} />
      <button type="submit" className="w-full bg-brand-1 text-white py-4 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-colors rounded-sm">
        Book Consultation
      </button>
    </form>
  );
}

function InternationalPatientsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/international-patients-new-banner.webp" alt="International Patients" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/80 via-brand-1/50 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-brand-4" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">International Patients</span>
            </div>
            <h1 className="font-serif font-light text-white text-[clamp(28px,4vw,58px)] leading-[1.1] mb-4">
              Get Treated at the Best Dental Clinic in India
            </h1>
            <p className="text-white/75 font-light text-lg mb-6">Trusted globally and rooted in excellence — book your dental travel with us today. Your journey to premium dental care in India starts here.</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-sm">
            <h3 className="font-serif text-xl mb-6 text-brand-1">Book Your Free Consultation</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-serif font-light text-[clamp(26px,3.5vw,46px)] mb-4">
            Global Patients, Local Trust: <em className="italic text-brand-2">22+ Years</em> of Premium Dental Care
          </h2>
          <p className="text-[13px] text-ink-2 italic mb-6">"Exceptional care, thoughtfully priced"</p>
          <p className="text-ink-2 max-w-3xl mx-auto leading-relaxed">
            For more than two decades, The Dental Roots has been a preferred choice for international patients seeking expert dental treatments in India. From implants and smile makeovers to painless root canals and cosmetic dentistry, we've treated people from over 30 countries with perfection and care. Many choose to combine their treatment with a holiday in India, making world-class dental care accessible at a fraction of the cost abroad — without compromising on quality or safety.
          </p>
        </div>
      </section>

      {/* Engineering smiles */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif font-light text-[clamp(26px,3.5vw,46px)] mb-3">Engineering Smiles, <em className="italic text-brand-2">Restoring Confidence</em></h2>
            <p className="text-ink-2">Precision, aesthetics, and comfort — all under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {engineeringCards.map((c, i) => (
              <div key={i} className="bg-brand-6/30 border border-brand-3/10 p-6 rounded-sm text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4">
                  <img src={c.img} alt={c.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-serif text-sm font-medium mb-2">{c.title}</h3>
                <p className="text-[12px] text-ink-2 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 bg-brand-1">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-4" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Patient Stories</span>
              </div>
              <h2 className="font-serif font-light text-white text-[clamp(26px,3.5vw,46px)] mb-4">Stories of <em className="italic text-brand-4">Transformation</em></h2>
              <p className="text-white/70 mb-8">No two smiles are alike. At The Dental Roots, we understand that every patient is unique. Our personalized approach ensures treatments as individual as your smile.</p>
              <Link to="/testimonials" className="inline-flex items-center gap-2 text-brand-4 text-[11px] tracking-[0.3em] uppercase font-bold hover:gap-4 transition-all">
                Read More Testimonials <span>→</span>
              </Link>
            </div>
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`w-full text-left p-5 rounded-sm transition-all ${activeTestimonial === i ? "bg-white/15" : "bg-white/5 hover:bg-white/10"}`}>
                  <div className="flex gap-4 items-start">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                    <div>
                      <p className="text-white/80 text-[13px] leading-relaxed line-clamp-2">{t.text}</p>
                      <p className="text-brand-4 text-[11px] mt-2 font-medium">{t.name}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif font-light text-[clamp(26px,3.5vw,46px)] mb-3">Your Treatment Journey at <em className="italic text-brand-2">The Dental Roots</em></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {journeySteps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-6/40 rounded-full flex items-center justify-center group-hover:bg-brand-2/10 transition-colors">
                  <img src={step.img} alt={step.title} className="w-10 h-10 object-contain" />
                </div>
                <div className="w-6 h-6 mx-auto mb-3 bg-brand-1 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-serif text-xs font-medium mb-2 leading-snug">{step.title}</h3>
                <p className="text-[11px] text-ink-2 leading-relaxed">{step.text}</p>
                <button className="mt-3 text-[10px] text-brand-2 tracking-wider uppercase font-semibold hover:text-brand-1 transition-colors">
                  Consult now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Locations */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-light text-[clamp(26px,3.5vw,46px)] mb-3">Multiple Locations, <em className="italic text-brand-2">One Standard of Care</em></h2>
            <p className="text-ink-2">Visit any of our conveniently located clinics for world-class dental care close to you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <div key={i} className="group overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={loc.img} alt={loc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="bg-white p-5">
                  <h3 className="font-serif text-base mb-1">{loc.title}</h3>
                  <div className="flex items-center gap-2 text-[12px] text-ink-2 mb-3">
                    <img src="/assets/images/map-arrow.webp" alt="map" className="w-4 h-4" />
                    {loc.distance}
                  </div>
                  <a href={loc.link} target="_blank" rel="noopener noreferrer"
                    className="text-[10px] tracking-[0.25em] uppercase text-brand-2 font-bold hover:text-brand-1 transition-colors">
                    Get Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
