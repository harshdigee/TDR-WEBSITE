import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | Book an Appointment | The Dental Roots" },
      { name: "description", content: "Contact The Dental Roots to book an appointment at our Delhi & Gurgaon clinics. Call +91-9650440004 or fill out the form." },
    ],
  }),
  component: ContactPage,
});

const locations = [
  {
    name: "Golf Course Road — Gurugram",
    address: "Golf Course Road, Sector 54, Gurugram, Haryana 122011",
    phone: "+91-9650440004",
    mapLink: "https://maps.app.goo.gl/koQWeTU73tQaobSc9",
    img: "/assets/images/multiple-location-img1.webp",
  },
  {
    name: "Sushant Lok — Gurugram",
    address: "A – 738, Sushant Lok 1 Rd, Block A, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122001",
    phone: "+91-9650440004",
    mapLink: "https://maps.app.goo.gl/7YBPSFCwhjPcZQwD9",
    img: "/assets/images/sushant-lock-img1.webp",
  },
  {
    name: "Panchsheel Park — South Delhi",
    address: "Panchsheel Park, New Delhi - 110017",
    phone: "+91-9650440004",
    mapLink: "https://maps.app.goo.gl/2xkk3DzcCL9LC1zt9",
    img: "/assets/images/panchshhel-img-new.webp",
  },
  {
    name: "Tata Primanti — Gurugram",
    address: "Tata Primanti, Sohna Road, Gurugram, Haryana",
    phone: "+91-9650440004",
    mapLink: "https://maps.app.goo.gl/Vv3v8asauAvwTcBR7",
    img: "/assets/images/tata-parmiti-img.webp",
  },
];

function ContactPage() {
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
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── BANNER ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/contact-banner-the-dental-roots.webp" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" onError={(e) => { (e.target as HTMLImageElement).src = "/assets/images/dental-roots-bg.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">We're here to help</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-4 max-w-2xl">
            Contact Us
          </h1>
          <p className="text-white/70 font-light max-w-lg">Book an appointment or reach out to us at any of our four premium clinics across Delhi & Gurugram.</p>
        </div>
      </section>

      {/* ─── CONTACT FORM + INFO ─── */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Book an Appointment</span>
            </div>
            <h2 className="font-serif font-light text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-tight mb-8">
              Schedule Your <em className="italic text-brand-2">Consultation</em>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-ink-3 mb-2 tracking-wide">Full Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange} className="w-full border border-brand-3/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs text-ink-3 mb-2 tracking-wide">Email Address *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full border border-brand-3/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-ink-3 mb-2 tracking-wide">Phone Number *</label>
                  <input name="mobile" type="tel" required value={form.mobile} onChange={handleChange} className="w-full border border-brand-3/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" placeholder="+91 XXXXXXXXXX" />
                </div>
                <div>
                  <label className="block text-xs text-ink-3 mb-2 tracking-wide">Select Treatment *</label>
                  <select name="location" required value={form.location} onChange={handleChange} className="w-full border border-brand-3/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white">
                    <option value="" disabled>Select Treatment</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Veneers">Veneers</option>
                    <option value="Smile Makeover">Smile Makeover</option>
                    <option value="Invisalign">Invisalign</option>
                    <option value="Kids Dentistry">Kids Dentistry</option>
                    <option value="Root Canal">Root Canal</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-ink-3 mb-2 tracking-wide">Select Location *</label>
                <select name="clinic_location" required className="w-full border border-brand-3/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white">
                  <option value="" disabled selected>Choose Clinic Location</option>
                  <option value="Sushant Lok">Sushant Lok, Gurugram</option>
                  <option value="Golf Course">Golf Course Road, Gurugram</option>
                  <option value="Panchsheel Park">Panchsheel Park, South Delhi</option>
                  <option value="Tata Primanti">Tata Primanti, Gurugram</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-ink-3 mb-2 tracking-wide">Your Message</label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange} className="w-full border border-brand-3/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white resize-none" placeholder="Tell us about your dental concern..." />
              </div>
              <button type="submit" disabled={loading} className="w-full py-4 bg-brand-2 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-1 transition-colors rounded-full disabled:opacity-50">
                {loading ? "Submitting..." : "Book an Appointment"}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-brand-2" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Contact Details</span>
              </div>
              <h2 className="font-serif font-light text-[clamp(26px,3.5vw,44px)] leading-[1.1] tracking-tight mb-8">
                We'd love to <em className="italic text-brand-2">hear from you</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "📞", label: "Call Us", value: "+91-9650440004", href: "tel:+91-9650440004" },
                { icon: "💬", label: "WhatsApp", value: "+91-8130755004", href: "https://api.whatsapp.com/send?phone=8130755004&text=Hi%20Dental%20Roots" },
                { icon: "✉️", label: "Email", value: "info@thedentalroots.com", href: "mailto:info@thedentalroots.com" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 p-5 bg-white border border-brand-3/10 rounded-xl hover:border-brand-2/30 hover:shadow-sm transition-all group">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-ink-3 font-medium">{item.label}</p>
                    <p className="font-serif text-lg font-medium group-hover:text-brand-2 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-brand-1 rounded-2xl text-white">
              <h3 className="font-serif text-xl font-medium mb-4">Social Media</h3>
              <div className="flex gap-4">
                {[
                  { label: "Facebook", href: "https://facebook.com" },
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "YouTube", href: "https://youtube.com" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-[10px] tracking-[0.2em] uppercase text-brand-5 hover:text-white transition-colors font-medium">{s.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Our Clinics</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,52px)] leading-[1.08] tracking-tight">
              Find Us <em className="italic text-brand-2">Near You</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0.5">
            {locations.map((loc) => (
              <a key={loc.name} href={loc.mapLink} target="_blank" rel="noreferrer" className="group relative overflow-hidden aspect-[16/9] block">
                <img src={loc.img} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-1/90 via-brand-1/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-medium mb-1">{loc.name}</h3>
                  <p className="text-sm text-white/80 mb-2">{loc.address}</p>
                  <p className="text-sm font-medium text-brand-4">{loc.phone}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-brand-4 mt-2 group-hover:text-white transition-colors">Get Directions →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
