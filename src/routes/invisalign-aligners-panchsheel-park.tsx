import { createFileRoute, Link } from '@tanstack/react-router';
import { ScrollReveal, GlassCard, GradientOrb } from '@/components/ui/design-system';
import { ChevronRight, ArrowRight, CheckCircle2, Phone, Star, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Route = createFileRoute('/invisalign-aligners-panchsheel-park')({
  head: () => ({
    meta: [
      { title: 'Invisalign Aligners in Panchsheel Park, Delhi — The Dental Roots' },
      { name: 'description', content: 'Get Invisalign clear aligner treatment at The Dental Roots, Panchsheel Park, South Delhi. Gold Provider orthodontist. Free consultation.' },
    ],
  }),
  component: InvisalignAlignersPanchsheelParkPage,
});

const benefits = [
  'Invisalign Gold Provider',
  'South Delhi Location',
  '700+ Cases Completed',
  'Free Consultation',
  'Flexible Scheduling',
  'Family-Friendly',
];

const testimonials = [
  { name: 'Shreya N.', text: 'So convenient for South Delhi residents. The Panchsheel Park clinic is beautiful and the treatment was seamless.', rating: 5 },
  { name: 'Varun M.', text: 'The Gold Provider status is well-earned. My Invisalign finished on time with perfect results.', rating: 5 },
  { name: 'Ritu A.', text: 'Family-friendly atmosphere — even got my teenager started on Invisalign Teen here!', rating: 5 },
];

const faqs = [
  {
    q: 'Where is the Panchsheel Park clinic?',
    a: 'The clinic is at S-115, Basement, Block S, Panchsheel Park South, New Delhi. It\'s conveniently located for patients from Panchsheel, Green Park, Hauz Khas, and Safdarjung.',
  },
  {
    q: 'What is an Invisalign Gold Provider?',
    a: 'Gold Provider is a prestigious tier awarded by Align Technology to orthodontists who have treated a high volume of Invisalign cases with excellent clinical outcomes.',
  },
  {
    q: 'Is Invisalign suitable for teenagers?',
    a: 'Yes, Invisalign Teen® is specifically designed for growing patients. Our team at Panchsheel Park regularly treats teenagers with Invisalign.',
  },
];

const moreServices = [
  { name: 'Dental Implants — Panchsheel', to: '/best-dental-implant-clinic-panchsheel-park' },
  { name: 'Smile Makeovers', to: '/smile-makeovers' },
  { name: 'Teeth Whitening', to: '/teeth-whitening' },
];

function AppointmentCard() {
  return (
    <GlassCard className="sticky top-28">
      <h3 className="text-xl font-bold text-white mb-4">Book Your Consultation</h3>
      <p className="text-white/60 text-sm mb-6">Ready to get started? Reach out to us today.</p>
      <a
        href="tel:+919650440004"
        className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
      >
        <Phone className="w-5 h-5 text-primary shrink-0" />
        <span className="text-white font-medium group-hover:text-primary transition-colors">+91-9650440004</span>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=919891255501"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full mb-3 py-3 px-4 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/30 text-[#25D366] font-semibold transition-all"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp Us
      </a>
      <Link
        to="/contact-us"
        className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-primary/20 hover:bg-primary/30 border border-primary/30 text-primary font-semibold transition-all"
      >
        Book Online <ArrowRight className="w-4 h-4" />
      </Link>
    </GlassCard>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:bg-white/5 transition-colors"
      >
        <span>{q}</span>
        <ChevronRight className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 text-white/70 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InvisalignAlignersPanchsheelParkPage() {
  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GradientOrb className="absolute -top-40 -right-40 opacity-20" size="w-[600px] h-[600px]" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/contact-us" className="hover:text-primary transition-colors">Delhi Clinics</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary">Invisalign — Panchsheel Park</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Invisalign Aligners — <span className="text-gradient">Panchsheel Park</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">Expert Invisalign treatment from a Gold Provider orthodontist in the heart of South Delhi, Panchsheel Park.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <p className="text-white/80 text-lg leading-relaxed">Get Invisalign treatment at our Panchsheel Park clinic. Our expert orthodontist with Invisalign Gold Provider status delivers outstanding clear aligner results.</p>
                <p className="text-white/80 leading-relaxed">Conveniently located in South Delhi for patients from Panchsheel, Green Park, Hauz Khas, and nearby areas. Our family-friendly clinic offers flexible scheduling so treatment fits seamlessly into your lifestyle.</p>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-white/70 text-sm">S-115, Basement, Block S, Panchsheel Park South, New Delhi</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl font-bold text-white mb-6">Why Choose The Dental Roots, Panchsheel Park?</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {benefits.map((b) => (
                  <GlassCard key={b} className="flex items-start gap-3 p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{b}</span>
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>

            {/* Testimonials */}
            <ScrollReveal delay={0.15}>
              <h2 className="text-2xl font-bold text-white mb-6">Patient Reviews</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {testimonials.map((t) => (
                  <GlassCard key={t.name} className="p-4 space-y-3">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">"{t.text}"</p>
                    <p className="text-primary text-sm font-semibold">— {t.name}</p>
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
              </div>
            </ScrollReveal>

            {/* Book Now CTA */}
            <ScrollReveal delay={0.25}>
              <GlassCard className="p-8 text-center space-y-4 border-primary/20">
                <h2 className="text-2xl font-bold text-white">Book Your Free Invisalign Consultation</h2>
                <p className="text-white/60">Visit our Panchsheel Park clinic for a complimentary smile assessment today.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact-us" className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary text-background font-bold hover:opacity-90 transition-opacity">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+919650440004" className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" /> Call Now
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2 className="text-2xl font-bold text-white mb-6">Other Services at Panchsheel Park</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {moreServices.map((s) => (
                  <Link key={s.to} to={s.to}>
                    <GlassCard className="flex items-center justify-between p-4 hover:border-primary/40 transition-colors cursor-pointer">
                      <span className="text-white/80 text-sm font-medium">{s.name}</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1">
            <ScrollReveal>
              <AppointmentCard />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
