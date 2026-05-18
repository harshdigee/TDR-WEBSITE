import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src="/assets/images/footer-logo.webp" alt="The Dental Roots" className="h-12 mb-6" />
            <p className="text-white/60 mb-6">
              India's leading and most trusted Dental Clinic. Award-winning treatments providing excellence in dentistry.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/thedentalrootsgurgaon/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/thedentalroots_in/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/thedental_roots" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/thedentalroots/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCa_HxKrNIOJWI-cGjGLsKUw" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about-us" className="text-white/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">All Treatments</Link></li>
              <li><Link to="/international-patients" className="text-white/60 hover:text-primary transition-colors">International Patients</Link></li>
              <li><Link to="/gallery" className="text-white/60 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-white/60 hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/faqs" className="text-white/60 hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Top Treatments</h4>
            <ul className="space-y-4">
              <li><Link to="/dental-implants-in-gurgaon" className="text-white/60 hover:text-primary transition-colors">Dental Implants</Link></li>
              <li><Link to="/invisalign-treatment-in-delhi-ncr" className="text-white/60 hover:text-primary transition-colors">Invisalign Aligners</Link></li>
              <li><Link to="/smile-makeovers" className="text-white/60 hover:text-primary transition-colors">Smile Makeover</Link></li>
              <li><Link to="/veneers" className="text-white/60 hover:text-primary transition-colors">Porcelain Veneers</Link></li>
              <li><Link to="/painless-root-canal-treatment" className="text-white/60 hover:text-primary transition-colors">Painless Root Canal</Link></li>
              <li><Link to="/teeth-whitening" className="text-white/60 hover:text-primary transition-colors">Teeth Whitening</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Our Clinics</h4>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white/90">Sushant Lok</div>
                  <div className="text-sm text-white/60">A-738, Sushant Lok Phase I, Gurugram</div>
                  <a href="tel:+919650440004" className="text-sm text-primary hover:underline">+91 9650440004</a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white/90">Panchsheel Park</div>
                  <div className="text-sm text-white/60">S-115, Block S, South Delhi</div>
                  <a href="tel:+918130750008" className="text-sm text-primary hover:underline">+91 81307 50008</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} The Dental Roots. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm text-white/60 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/career" className="text-sm text-white/60 hover:text-primary transition-colors">Careers</Link>
            <Link to="/contact-us" className="text-sm text-white/60 hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
      
      {/* Decorative vectors */}
      <img src="/assets/images/footer-vector-img.webp" alt="" className="absolute bottom-0 right-0 w-1/3 opacity-20 pointer-events-none" />
    </footer>
  );
}
