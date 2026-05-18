import { Link } from "@tanstack/react-router";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLocations = [
  {
    area: "Gurugram",
    city: "Golf Course Road",
    addr: "B-10, Golf Course Rd, next to Cult Fit, Sushant Lok 2, Sector 56, Gurugram 122001",
    tel: "+91 81307 50003",
  },
  {
    area: "New Delhi",
    city: "Panchsheel Park",
    addr: "S-115, Basement, Block S, Panchsheel Park South, New Delhi 110017",
    tel: "+91 81307 50008",
  },
  {
    area: "Gurugram",
    city: "Sushant Lok",
    addr: "A-738, Sushant Lok 1 Rd, Block A, Phase I, Sector 43, Gurugram 122001",
    tel: "+91 96504 40004",
  },
];

const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact-us" },
  { label: "International Patients", href: "/international-patients" },
  { label: "Dental Tourism", href: "/dental-tourism" },
  { label: "Careers", href: "/career" },
  { label: "FAQ's", href: "/faqs" },
];

const iconProps: LucideProps = { size: 18, strokeWidth: 1.75, "aria-hidden": true };

const socials: { label: string; href: string; Icon: ComponentType<LucideProps> }[] = [
  { label: "Facebook", href: "https://www.facebook.com/thedentalrootsgurgaon/", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/thedentalroots_in/", Icon: Instagram },
  { label: "X (Twitter)", href: "https://twitter.com/thedental_roots", Icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/thedentalroots/", Icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCa_HxKrNIOJWI-cGjGLsKUw", Icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0e0716] py-20 px-6 md:px-12 border-t border-brand-3/10">
      <div className="max-w-[1260px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <img src="/assets/images/logo.webp" alt="The Dental Roots" className="h-10 w-auto mb-5" loading="lazy" />
            <p className="text-xs leading-loose text-white/40 font-light mb-6">
              Delivering world-class dental experiences across four premium clinics in Delhi and Gurugram.
            </p>
            <div className="flex gap-2 mb-8">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-brand-4/20 flex items-center justify-center text-white/50 hover:text-brand-4 hover:border-brand-4 transition-colors"
                >
                  <s.Icon {...iconProps} />
                </a>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1">
              {footerLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-brand-4 transition-colors py-0.5"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location columns */}
          {footerLocations.map((l) => (
            <div key={l.city}>
              <div className="text-[10px] tracking-[0.3em] uppercase text-brand-4 font-semibold mb-4">{l.area}</div>
              <h4 className="font-serif text-lg text-white mb-3">{l.city}</h4>
              <p className="text-xs text-white/40 leading-relaxed font-light mb-3">{l.addr}</p>
              <a
                href={`tel:${l.tel.replace(/\s/g, "")}`}
                className="text-sm text-brand-4 hover:text-white transition-colors block"
              >
                {l.tel}
              </a>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-wrap justify-between gap-4 items-center">
          <p className="text-[10px] text-white/25">© {new Date().getFullYear()} All Rights Reserved · The Dental Roots</p>
          <ul className="flex gap-6 list-none">
            {["Privacy Policy", "Terms", "Sitemap"].map((l) => (
              <li key={l}>
                <Link to="/privacy-policy" className="text-[10px] tracking-[0.2em] uppercase text-white/25 hover:text-brand-4 transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
