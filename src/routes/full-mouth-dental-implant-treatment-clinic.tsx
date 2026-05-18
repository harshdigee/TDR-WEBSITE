import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/full-mouth-dental-implant-treatment-clinic")({
  head: () => ({
    meta: [
      { title: "Best Dental Implants in Gurgaon | Global Standard | The Dental Roots" },
      { name: "description", content: "World-class dental implants in Gurgaon & Delhi. Single tooth, All-on-4/6/8. Book a free consultation at The Dental Roots." },
    ],
  }),
  component: DentalImplantsPage,
});

const faqs = [
  { q: "What is the cost of dental implants in India?", a: "Dental implant costs vary according to manufacturer and case requirements. As every patient and case is unique, outline costs are given for reference only. A single dental implant can range from Rs 40,000 to 50,000. Additional procedures such as grafting, sinus lift surgery etc. are sometimes required and determined through scans done during treatment planning." },
  { q: "Will dental implants work for me? How can I know if I'm a candidate?", a: "Any individual who is missing at least one tooth because of damage or decay can be a suitable patient for a dental implant. The key component is the measure of accessible bone and tissue. In case of insufficient bone, artificial bone graft may be used. The best way to know is to schedule a consultation with our team." },
  { q: "Is seniority an issue for dental implants?", a: "Many patients worry that age may limit them. This is not true. Well-being is the key factor, not age. If your mouth and surrounding bone is strong enough to have a tooth extracted, you are technically fit for dental implants." },
  { q: "What will it feel like to have dental implants?", a: "Implants look, feel, and work like natural teeth. You can eat and drink whatever you want. Unlike dentures, they won't come loose and you won't develop the bruising that makes dentures difficult to wear." },
  { q: "What kind of maintenance is required?", a: "Your new teeth must be checked routinely, similar to your natural teeth. Brush and floss as recommended. Even implants can develop gum issues, so it's important to maintain good oral hygiene and visit your specialist for maintenance periodically." },
  { q: "What's the difference between All-on-4 and traditional implants?", a: "With the All-on-4 system, you don't need to replace each lost tooth individually. Instead, as few as 4 implants serve as the anchors to hold a permanent denture." },
  { q: "Are All-on-4 implants better than dentures?", a: "Traditional dentures are removable and typically a final resort. Dentures are often uncomfortable, limit what you can eat, and offer no support for your jawbone. All-on-4 implants provide a permanent, stable, natural-looking solution." },
  { q: "Is it a good idea to get implants in one day?", a: "We only recommend same day implants to someone we've identified as a good candidate. If you've experienced significant decay or bone loss, a longer process will be necessary to ensure the best outcome." },
];

const testimonialVideos = [
  { img: "/assets/images/GalleryImageServices/patient-2-patients-testimonial.webp", name: "Patient", type: "Patient Testimonial", videoId: "rjXuCqL3G4I" },
  { img: "/assets/images/GalleryImageServices/patient-1-patients-testimonial.webp", name: "Saniya", type: "Patient Testimonial", videoId: "encIs7M3wmk" },
  { img: "/assets/images/GalleryImageServices/patient-patients-testimonial.webp", name: "Patient", type: "Patient Testimonial", videoId: "pkGLJNjUevg" },
  { img: "/assets/images/GalleryImageServices/rashalika-sabharwal-celebrity-testimonials.webp", name: "Rashalika Sabharwal", type: "Celebrity Testimonial", videoId: "yRO28v1eldQ" },
  { img: "/assets/images/GalleryImageServices/srishti-rana-1-celebrity-testimonials.webp", name: "Srishti Rana", type: "Celebrity Testimonial", videoId: "s8gu2FA110U" },
  { img: "/assets/images/GalleryImageServices/rannvijay-singh-singha-2-celebrity-testimonials.webp", name: "Rannvijay Singh Singha", type: "Celebrity Testimonial", videoId: "OpaI0tV9h7E" },
];

const moreServices = [
  { img: "/assets/images/DetailServiceImages/implants-the-dental-roots.webp", title: "Implants", href: "/full-mouth-dental-implant-treatment-clinic" },
  { img: "/assets/images/DetailServiceImages/invisalign-and-braces-the-dental-roots.webp", title: "Invisalign", href: "/invisalign-clear-aligners-teeth-straightening" },
  { img: "/assets/images/DetailServiceImages/veneers-the-dental-roots.webp", title: "Veneers", href: "/veneers" },
  { img: "/assets/images/DetailServiceImages/smile-makeovers-the-dental-roots.webp", title: "Smile Makeovers", href: "/best-smile-makeover-clinic" },
  { img: "/assets/images/DetailServiceImages/kid-s-dentistry-pedodontics-the-dental-roots.webp", title: "Kid's Dentistry", href: "/kids-dentistry" },
  { img: "/assets/images/DetailServiceImages/laser-dentistry-the-dental-roots.webp", title: "Laser Dentistry", href: "/laser-dentistry" },
];

const implantBrands = [
  { img: "/assets/images/implant/implant-tbl1.webp", logo: "/assets/images/implant/implant-logo1.webp", desc: "Immediate or Delayed crown in 4–6 months" },
  { img: "/assets/images/implant/implant-tbl2.webp", logo: "/assets/images/implant/implant-logo2.webp", desc: "Immediate or Delayed crown in 4–6 months" },
  { img: "/assets/images/implant/implant-tbl3.webp", logo: "/assets/images/implant/implant-logo3.webp", desc: "Immediate or Delayed crown in 4–6 months" },
  { img: "/assets/images/implant/implant-tbl4.webp", logo: "/assets/images/implant/implant-logo4.webp", desc: "Immediate or Delayed crown in 4–6 months" },
];

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <iframe src={src} className="w-full h-full rounded-lg" allow="autoplay; encrypted-media" allowFullScreen title="Video" />
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-brand-4 transition-colors">✕ Close</button>
      </div>
    </div>
  );
}

function AppointmentForm() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", location: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); window.location.href = "/thank-you"; }, 1200);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
      <h3 className="font-serif text-2xl text-white mb-2">Permanent Dental Implant<br /><em className="italic text-brand-4">in Just 1 Day</em></h3>
      <p className="text-white/60 text-sm mb-6">Fill the form to request a call back</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input name="name" placeholder="Full Name*" required value={form.name} onChange={handleChange} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4 w-full" />
          <input name="email" type="email" placeholder="Email Address*" required value={form.email} onChange={handleChange} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4 w-full" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input name="mobile" type="tel" placeholder="Phone Number*" required value={form.mobile} onChange={handleChange} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4 w-full" />
          <select name="location" required value={form.location} onChange={handleChange} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-brand-4 w-full">
            <option value="" disabled>Select Treatment*</option>
            <option value="Single Tooth Implant">Single Tooth Implant</option>
            <option value="All-on-4">All-on-4</option>
            <option value="All-on-6/8">All-on-6/8</option>
            <option value="Full Mouth">Full Mouth Rehabilitation</option>
          </select>
        </div>
        <select name="location" required onChange={handleChange} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-brand-4 w-full">
          <option value="" disabled selected>Select Location*</option>
          <option value="Sushant Lok">Sushant Lok</option>
          <option value="Golf Course">Golf Course Road</option>
          <option value="Panchsheel Park">Panchsheel Park</option>
          <option value="Tata Primanti">Tata Primanti</option>
        </select>
        <textarea name="message" placeholder="Your Message*" rows={3} value={form.message} onChange={handleChange} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4 w-full resize-none" />
        <button type="submit" disabled={loading} className="w-full py-3.5 bg-brand-2 text-white text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-brand-1 transition-colors rounded-lg disabled:opacity-50">
          {loading ? "Submitting..." : "Get Radiant Smile"}
        </button>
      </form>
    </div>
  );
}

function DentalImplantsPage() {
  const [videoSrc, setVideoSrc] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── BANNER ─── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden mt-16">
        <img
          src="/assets/images/dental-implants-in-gurgaon-banner-the-dental-roots.webp"
          alt="Dental Implants in Gurgaon"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
          <div className="flex flex-col lg:flex-row items-end gap-12">
            {/* Left — text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brand-4" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Restoring Smiles with World-Class Dental Implants</span>
              </div>
              <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-5 max-w-2xl">
                Global Standard Dental Implants in Gurgaon
              </h1>
              <p className="text-white/70 font-light leading-relaxed max-w-lg mb-6">
                Trust the experts in smile restoration, cosmetic dentistry, &amp; high-quality dental implants where advanced care meets lasting results.
              </p>
              <div className="flex items-center gap-3 mb-8">
                <img src="/assets/images/google-icon.webp" alt="Google" className="h-6" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-white/70 text-sm">4.8/5</span>
              </div>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-2 text-white text-[10px] tracking-[0.22em] uppercase font-semibold rounded-full hover:bg-brand-1 transition-all hover:shadow-[0_18px_40px_-10px_rgba(107,44,126,0.6)]"
              >
                Book Free Consultation
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=8130755004&text=Hi%20Dental%20Roots"
                target="_blank"
                rel="noreferrer"
                className="ml-4 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
              >
                <img src="/assets/icons/whatsapp_.webp" alt="WhatsApp" className="h-5 w-5" />
                WhatsApp Chat
              </a>
            </div>
            {/* Right — form */}
            <div className="w-full lg:w-[420px] shrink-0">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACCESSIBLE IMPLANTS — COST COMPARISON ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">World-Class Care</span>
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,52px)] leading-[1.08] tracking-tight mb-5">
              The Most Accessible Dental Implant Treatments in Delhi NCR
            </h2>
            <p className="text-ink-3 leading-loose font-light mb-6">
              You no longer need to travel abroad for accessible yet effective dental implants. Get expert care in Gurgaon at prices similar to clinics in the UK and UAE with the trust and quality you deserve.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "All dentures & restorations are made in an in-house laboratory.",
                "We specialise in full-jaw restorations with implants.",
                "Working in high volumes for costs reduction.",
                "Efficient high-tech equipment, 3D printers and zirconia teeth milling machines.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-2">
                  <span className="w-5 h-5 rounded-full bg-brand-2 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-2 text-white text-[10px] tracking-[0.22em] uppercase font-semibold rounded-full hover:bg-brand-1 transition-all">
              Book a Consultation
            </Link>
          </div>
          {/* Cost comparison bar chart */}
          <div className="bg-white border border-brand-3/15 rounded-2xl p-8">
            <h3 className="font-serif text-lg font-medium mb-6 text-center">Cost Comparison (INR)</h3>
            <div className="flex items-end gap-8 justify-center h-52">
              {[
                { label: "Dentists in UK", value: 90, color: "bg-brand-5" },
                { label: "Dentists in Dubai", value: 65, color: "bg-brand-5" },
                { label: "The Dental Roots", value: 30, color: "bg-brand-2" },
              ].map((bar) => (
                <div key={bar.label} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full flex items-end justify-center" style={{ height: "160px" }}>
                    <div
                      className={`w-full ${bar.color} rounded-t-md transition-all duration-1000`}
                      style={{ height: `${bar.value}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-ink-3 text-center leading-tight">{bar.label}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-ink-3 text-center mt-4">Average price (INR) of Fixed Teeth compared to The Dental Roots</p>
          </div>
        </div>
      </section>

      {/* ─── CONTENT + FORM ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-3 gap-12">
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Excellence in Implants</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-tight mb-5">
                Ditch the Dentures, Embrace a <em className="italic text-brand-2">Permanent Smile</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <img
                src="/assets/images/implants-other_img.webp"
                alt="Dental Implants"
                className="w-full rounded-xl object-cover"
                loading="lazy"
              />
              <div className="space-y-4 text-sm text-ink-2 leading-relaxed">
                <h3 className="font-serif text-xl font-medium">Your Smile Deserves the Very Best</h3>
                <p>A beautiful, natural-looking smile can be life-changing. If you are looking for the best that implant dentistry has to offer, <strong>The Dental Roots</strong> is the elite of the elite.</p>
                <p>We offer the best quality dental implant services, personalized and designed for every patient. Now you don't need to shy away from smiling — get a painless dental implant in Delhi and Gurgaon with simultaneous rehabilitation of the entire jaw using the latest technology.</p>
                <h3 className="font-serif text-xl font-medium">What are Dental Implants?</h3>
                <p>Dental implants are a durable, long-term alternative to removable dentures. Usually made of titanium, they serve as artificial roots for your new teeth, topped with dental crowns. Implants look, feel, and function like natural teeth.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium">Why Choose Dental Implants at Our Clinic?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Aesthetics", d: "Cosmetically look like natural teeth, sitting in the gum just like a natural tooth." },
                  { t: "No damage to other teeth", d: "Unlike bridges or dentures, implants don't require support from adjacent teeth." },
                  { t: "Prevent bone loss", d: "Implants stop bone from shrinking, maintaining facial support and structure." },
                  { t: "Increase life of remaining teeth", d: "Spreads chewing load, stops teeth from migrating, tilting, and over-erupting." },
                  { t: "Fixed & permanent", d: "Dental Implants are fixed in your mouth and do not require removal as with dentures." },
                  { t: "No fillings or sensitivity", d: "Implants will never need a filling or root canal and will never be sensitive." },
                ].map((item) => (
                  <div key={item.t} className="p-5 bg-white border border-brand-3/10 rounded-lg">
                    <div className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-brand-2 flex items-center justify-center text-white text-xs shrink-0 mt-0.5">✓</span>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{item.t}</h4>
                        <p className="text-xs text-ink-3 leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Implant Process */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-medium">The Dental Implant Process</h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { n: "01", t: "Planning", d: "Careful, intelligently thought-out treatment plan with specialized 3D imaging and treatment planning." },
                  { n: "02", t: "Implant Placement", d: "Our Smile Design specialist places the dental implant in the ideal spot to form the gum tissue." },
                  { n: "03", t: "Healing & Integration", d: "Bone around the implant grows and integrates with the new implant in a matter of weeks." },
                  { n: "04", t: "Temporary Restoration", d: "If in a visible area, a temporary restoration is placed while the site heals." },
                  { n: "05", t: "Abutment Placement", d: "When healing is complete, the abutment is placed to connect implant to the crown." },
                  { n: "06", t: "Porcelain Crown", d: "Our ceramist fabricates the new porcelain crown to exact specifications, then bonds it to the abutment." },
                ].map((s) => (
                  <div key={s.n} className="bg-white border border-brand-3/10 p-5 relative overflow-hidden group">
                    <div className="font-serif font-light text-5xl text-brand-5 leading-none mb-3">{s.n}</div>
                    <h4 className="font-serif text-base font-medium mb-2">{s.t}</h4>
                    <p className="text-xs text-ink-3 leading-relaxed">{s.d}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-1 to-brand-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </div>
                ))}
              </div>
            </div>

            {/* Types */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-medium">Types of Dental Implants</h2>

              <div>
                <h3 className="font-serif text-xl font-medium mb-3">Single Tooth Implant</h3>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/NmG9AisnHCI?si=bgWSIa6v7DbYtEfg"
                    title="Single Tooth Implant"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-ink-2 leading-relaxed">At The Dental Roots, we utilize the latest 3D implant planning and precision dentistry to offer implants that last a lifetime. An implant is one of the best ways to replace a single tooth without sacrificing the health of neighboring teeth. It looks and functions like a natural tooth.</p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-medium mb-3">All-on-4</h3>
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Ushnj78EvH4?controls=0"
                    title="All-on-4 Implants"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-ink-2 leading-relaxed">This procedure involves the total rehabilitation of edentulous patients. The dentist places 4 implants in each jaw. This guarantees immediate restoration of function and aesthetics. Bone resorption is also one of the consequences of tooth loss, alongside difficulty in eating and speaking.</p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-medium mb-3">All-on-6/8</h3>
                <p className="text-sm text-ink-2 leading-relaxed">All-on-6 or All-on-8 is the best type of dental implant treatment as it allows the patient to use their denture system to the maximum extent. It provides complete anchorage and support of the prosthesis and ensures the most natural appearance. It also helps in distributing force equally to all structures.</p>
              </div>
            </div>
          </div>

          {/* Sticky form sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-brand-1 rounded-2xl overflow-hidden p-8">
              <h3 className="font-serif text-2xl text-white mb-2">Book Your<br /><em className="italic text-brand-4">Appointment</em></h3>
              <p className="text-white/60 text-sm mb-6">Our specialists will call you back</p>
              <form
                onSubmit={(e) => { e.preventDefault(); window.location.href = "/thank-you"; }}
                className="space-y-3"
              >
                <input name="name" placeholder="Name*" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4" />
                <input name="email" type="email" placeholder="Email*" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4" />
                <input name="mobile" type="tel" placeholder="Phone*" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4" />
                <select name="location" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-brand-4">
                  <option value="" disabled selected>Choose Location</option>
                  <option value="Sushant Lok">Sushant Lok</option>
                  <option value="Golf Course">Golf Course</option>
                  <option value="Panchsheel Park">Panchsheel Park</option>
                  <option value="Tata Primanti">Tata Primanti</option>
                </select>
                <textarea name="message" placeholder="Message" rows={3} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-brand-4 resize-none" />
                <button type="submit" className="w-full py-3.5 bg-white text-brand-1 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-brand-6 transition-colors rounded-lg">
                  Schedule Appointment
                </button>
              </form>
            </div>
            <div className="mt-4 p-5 bg-white border border-brand-3/15 rounded-xl">
              <p className="text-xs text-ink-3 mb-3 font-medium">Trusted Implant Systems</p>
              <div className="grid grid-cols-2 gap-3">
                {implantBrands.map((b, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 p-2 border border-brand-3/10 rounded">
                    <img src={b.img} alt="Implant" className="h-10 object-contain" loading="lazy" />
                    <img src={b.logo} alt="Brand" className="h-6 object-contain" loading="lazy" />
                    <p className="text-[9px] text-ink-3 text-center leading-tight">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HIGH-TECH SAFE CARE ─── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Our Technology</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,52px)] leading-[1.08] tracking-tight">
              High-tech &amp; Safe Care at <em className="italic text-brand-2">The Dental Roots</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/assets/images/implants-other_img_2-the-dental-roots.webp"
              alt="High-tech implant care"
              className="w-full rounded-xl object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="space-y-5">
              <p className="text-ink-2 leading-loose font-light">
                We utilize state-of-the-art dental technology to deliver pleasant dental implants in India with amazing results. Offering local anaesthesia (painless), we ensure your comfort and help you relax. Our clinic is equipped with high-tech diagnostic tools, a built-in air purification system, medical-grade sterilization protocols, and modern patient rooms.
              </p>
              <h3 className="font-serif text-xl font-medium">Dental Implant Costs</h3>
              <p className="text-sm text-ink-3 leading-relaxed">The cost of dental implants in India is going to vary based on the services you require. Visit India's leading and most trusted dental clinic — The Dental Roots.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact-us" className="inline-flex items-center px-7 py-3.5 bg-brand-2 text-white text-[10px] tracking-[0.22em] uppercase font-semibold rounded-full hover:bg-brand-1 transition-all">
                  Book an Appointment
                </Link>
                <a href="tel:+91-9650440004" className="inline-flex items-center px-7 py-3.5 border border-brand-2 text-brand-2 text-[10px] tracking-[0.22em] uppercase font-semibold rounded-full hover:bg-brand-6 transition-all">
                  Call: +91-9650440004
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PATIENT TESTIMONIAL VIDEOS ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Patient Stories</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-tight">
              Patient <em className="italic text-brand-2">Testimonials</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0.5">
            {testimonialVideos.map((t) => (
              <div key={t.name} className="group relative overflow-hidden bg-white border border-brand-3/10 cursor-pointer" onClick={() => setVideoSrc(`https://www.youtube.com/embed/${t.videoId}?autoplay=1`)}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-brand-1/30 group-hover:bg-brand-1/50 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <span className="text-white text-xl ml-1">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-brand-2 font-semibold mb-1">{t.type}</p>
                  <h4 className="font-serif text-base font-medium">{t.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">FAQ's</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-tight">
              FAQs About <em className="italic text-brand-2">Dental Implants</em>
            </h2>
          </div>
          <div className="space-y-1">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-brand-3/15 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-brand-6/40 transition-colors"
                >
                  <span className="font-serif text-base font-medium pr-4">{faq.q}</span>
                  <span className={`text-brand-2 text-xl shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-ink-3 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MORE SERVICES ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-serif font-light text-[clamp(24px,3vw,40px)]">More <em className="italic text-brand-2">Services</em></h3>
            <p className="text-ink-3 font-light mt-2">India's leading and most trusted Dental Clinic</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5">
            {moreServices.map((s) => (
              <Link key={s.title} to={s.href} className="group bg-white border border-brand-3/10 overflow-hidden block hover:-translate-y-1 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-sm font-medium">{s.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <VideoModal src={videoSrc} onClose={() => setVideoSrc("")} />
    </div>
  );
}
