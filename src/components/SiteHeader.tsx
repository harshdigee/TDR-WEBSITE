import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

const topNavLinks = [
  { label: "Implants", href: "/full-mouth-dental-implant-treatment-clinic" },
  { label: "Veneers", href: "/veneers" },
  { label: "Smile Makeovers", href: "/best-smile-makeover-clinic" },
  { label: "Invisalign", href: "/invisalign-clear-aligners-teeth-straightening" },
  { label: "Kid's Dentistry", href: "/kids-dentistry" },
  { label: "International Patients", href: "/international-patients" },
];

const menuNavLinks = [
  { label: "Home", href: "/", icon: "/assets/images/home-icon.webp" },
  { label: "About", href: "/about-us", icon: "/assets/images/about-icon.webp" },
  { label: "Services", href: "/services", icon: "/assets/images/services-icon.webp" },
  { label: "International Patients", href: "/international-patients", icon: "/assets/images/patients--icon.webp" },
  { label: "Dental Tourism", href: "/dental-tourism", icon: "/assets/images/tourism-icon.webp" },
  { label: "Gallery", href: "/gallery", icon: "/assets/images/gallery-icon.webp" },
  { label: "Testimonials", href: "/testimonials", icon: "/assets/images/testimonial-icon.webp" },
  { label: "Blog", href: "/blog", icon: "/assets/images/blogs-icon.webp" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <div className="bg-[#2a1638]/90 backdrop-blur-md">
          <div className="max-w-[1400px] mx-auto px-4 md:px-10 h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img src="/assets/images/logo.webp" alt="The Dental Roots — top dentist in India" className="h-10 w-auto" fetchPriority="high" />
            </Link>

            {/* Desktop quick links */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
              {topNavLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-[10px] tracking-[0.18em] uppercase font-medium text-white/65 hover:text-white transition-colors relative group whitespace-nowrap"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-brand-4 scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Link>
              ))}
            </nav>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex flex-col gap-[5px] p-2 shrink-0"
            >
              <span className="block w-6 h-px bg-white/80" />
              <span className="block w-4 h-px bg-white/80" />
              <span className="block w-6 h-px bg-white/80" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex"
          >
            {/* Column 1 — Nav links */}
            <motion.div
              initial={{ x: "-10vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-10vw", opacity: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-col justify-center bg-white w-full md:w-1/2 lg:w-[45%] px-8 md:px-14 py-12 overflow-y-auto z-10"
            >
              <ul className="space-y-1">
                {menuNavLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-4 py-3 px-3 rounded-lg group hover:bg-brand-6/60 transition-colors"
                    >
                      <div className="w-9 h-9 bg-brand-6 rounded-lg flex items-center justify-center shrink-0">
                        <img src={l.icon} alt={l.label} className="w-5 h-5 object-contain" loading="lazy" />
                      </div>
                      <span className="font-serif text-2xl font-light text-ink group-hover:text-brand-2 transition-colors">
                        {l.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2 — Contact panel + background image */}
            <motion.div
              initial={{ x: "10vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "10vw", opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="hidden md:flex flex-col justify-end relative flex-1 overflow-hidden"
            >
              {/* Background image */}
              <img
                src="/assets/images/full-bg.webp"
                alt="Clinic"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-1/95 via-brand-1/50 to-transparent" />

              {/* Contact info card */}
              <div className="relative z-10 p-10 text-white">
                <p className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold mb-4">Contact</p>
                <p className="text-sm text-white/70 leading-relaxed mb-3">
                  A – 738, Sushant Lok 1 Rd, Block A, Sushant Lok Phase I,<br />
                  Sector 43, Gurugram, Haryana 122001
                </p>
                <a href="tel:+919650440004" className="text-lg font-serif text-white hover:text-brand-4 transition-colors block mb-5">
                  +91-9650440004
                </a>
                <div className="flex gap-4 text-[11px] tracking-widest uppercase text-white/60 mb-6">
                  <Link to="/career" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Careers</Link>
                  <span className="text-white/30">|</span>
                  <Link to="/contact-us" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">Contact</Link>
                  <span className="text-white/30">|</span>
                  <Link to="/faqs" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">FAQ's</Link>
                </div>
                <div className="flex gap-3 mb-8">
                  {[
                    { href: "https://www.facebook.com/thedentalrootsgurgaon/", label: "F" },
                    { href: "https://www.instagram.com/thedentalroots_in/", label: "I" },
                    { href: "https://twitter.com/thedental_roots", label: "T" },
                    { href: "https://www.linkedin.com/company/thedentalroots/", label: "in" },
                    { href: "https://www.youtube.com/channel/UCa_HxKrNIOJWI-cGjGLsKUw", label: "Y" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors text-xs font-bold"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
                <Link
                  to="/contact-us"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-brand-2 text-white text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-brand-1 transition-colors rounded-full"
                >
                  Book an Appointment
                </Link>
              </div>
            </motion.div>

            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors rounded-full"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Book An Appointment button — fixed bottom-right, clear of stats bar */}
      <Link
        to="/contact-us"
        className="fixed bottom-6 right-4 md:right-6 z-40 w-[68px] h-[68px] bg-brand-2 rounded-full flex items-center justify-center text-white shadow-[0_4px_24px_rgba(107,44,126,0.5)] hover:bg-brand-1 hover:scale-105 transition-all"
        aria-label="Book an appointment"
      >
        <span className="text-[7px] text-center tracking-wide font-semibold uppercase leading-tight px-2">BOOK AN APPOINTMENT</span>
      </Link>
    </>
  );
}
