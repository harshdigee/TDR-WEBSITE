import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const services = [
  // Column 1
  [
    { label: "Dental Implants", to: "/dental-implants-delhi" },
    { label: "Full Mouth Implants", to: "/full-mouth-dental-implant-treatment-clinic" },
    { label: "Root Canal Treatment", to: "/painless-root-canal-treatment" },
    { label: "Invisalign Aligners", to: "/invisalign-clear-aligners-teeth-straightening" },
    { label: "Braces", to: "/braces" },
  ],
  // Column 2
  [
    { label: "Veneers", to: "/veneers" },
    { label: "Smile Makeovers", to: "/best-smile-makeover-clinic" },
    { label: "Teeth Whitening", to: "/teeth-whitening" },
    { label: "Porcelain Crowns", to: "/porcelain-crowns" },
    { label: "Dental Bridges", to: "/dental-bridges" },
  ],
  // Column 3
  [
    { label: "Wisdom Tooth Removal", to: "/painless-wisdom-tooth-extraction" },
    { label: "Kids Dentistry", to: "/kids-dentistry" },
    { label: "Laser Dentistry", to: "/laser-dentistry" },
    { label: "Dentures", to: "/dentures" },
    { label: "Regular Checkups", to: "/regular-dental-checkups" },
  ],
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-us" },
  { label: "International Patients", to: "/international-patients" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact-us" },
];

const mobileLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "International Patients", to: "/international-patients" },
  { label: "Dental Tourism", to: "/dental-tourism" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "FAQs", to: "/faqs" },
  { label: "Careers", to: "/career" },
];

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleServicesMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="/assets/images/logo.webp"
              alt="The Dental Roots"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                  servicesOpen
                    ? "text-[#00d4ff] bg-[#00d4ff]/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                )}
              >
                Services
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] backdrop-blur-2xl bg-[#0a0f1e]/95 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <div className="p-6">
                      <p className="text-[#00d4ff] text-xs font-semibold uppercase tracking-widest mb-5">
                        Our Services
                      </p>
                      <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                        {services.map((col, ci) => (
                          <div key={ci} className="space-y-1">
                            {col.map((service) => (
                              <Link
                                key={service.to}
                                to={service.to as any}
                                onClick={() => setServicesOpen(false)}
                                className="block px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between">
                        <Link
                          to="/contact-us"
                          onClick={() => setServicesOpen(false)}
                          className="text-xs text-white/40 hover:text-[#00d4ff] transition-colors"
                        >
                          Can't find what you're looking for? Contact us →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/international-patients"
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              International
            </Link>
            <Link
              to="/gallery"
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Gallery
            </Link>
            <Link
              to="/testimonials"
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Testimonials
            </Link>
            <Link
              to="/blog"
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Blog
            </Link>
            <Link
              to="/contact-us"
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Contact
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact-us"
              className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#0a0f1e] bg-[#00d4ff] hover:bg-[#00d4ff]/90 transition-all shadow-lg shadow-[#00d4ff]/20"
            >
              <Phone size={14} />
              Book Appointment
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#0a0f1e]/98 backdrop-blur-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-20 border-b border-white/10">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="/assets/images/logo.webp"
                  alt="The Dental Roots"
                  className="h-10 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <nav className="space-y-1">
                {mobileLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to as any}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3.5 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-colors text-base font-medium"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Services */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: mobileLinks.length * 0.05 }}
                >
                  <p className="px-4 py-3 text-xs font-bold text-[#00d4ff] uppercase tracking-widest mt-4">
                    Services
                  </p>
                  {services.flat().map((service, i) => (
                    <Link
                      key={service.to}
                      to={service.to as any}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2.5 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors text-sm"
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              </nav>
            </div>

            {/* Footer CTA */}
            <div className="px-4 py-6 border-t border-white/10 space-y-3">
              <Link
                to="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#00d4ff] text-[#0a0f1e] font-bold text-base"
              >
                <Phone size={18} />
                Book Appointment
              </Link>
              <a
                href="https://wa.me/919818865678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-[#25d366]/30 text-[#25d366] font-medium text-base hover:bg-[#25d366]/10 transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
