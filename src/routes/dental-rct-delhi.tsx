import { createFileRoute, Link } from '@tanstack/react-router';
import { ScrollReveal, GlassCard, GradientOrb } from '@/components/ui/design-system';
import { ChevronRight, ArrowRight, CheckCircle2, Phone, Star } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Route = createFileRoute('/dental-rct-delhi')({
  head: () => ({
    meta: [
      { title: 'Painless Root Canal Treatment in Delhi — The Dental Roots' },
      { name: 'description', content: 'Get single-visit painless root canal treatment in Delhi at The Dental Roots, Panchsheel Park. Specialist endodontists with dental microscopes.' },
    ],
  }),
  component: DentalRctDelhiPage,
});

const benefits = [
  'Single-Visit RCT',
  'Specialist Endodontists',
  'Dental Microscope',
  'Digital X-rays',
  'Painless Technique',
  'South Delhi Clinic',
];

const testimonials = [
  { name: 'Geeta S.', text: 'I was terrified of root canals, but the Dental Roots team made it completely painless. I didn\'t feel a thing!', rating: 5 },
  { name: 'Harish V.', text: 'Single-visit RCT is a game-changer. Done in under 90 minutes with the dental microscope — exceptional precision.', rating: 5 },
  { name: 'Priya L.', text: 'The specialist endodontist at Panchsheel Park is superb. My tooth was saved perfectly.', rating: 5 },
];

const faqs = [
  {
    q: 'Is root canal treatment really painless?',
    a: 'Yes! Modern root canal treatment with proper local anaesthesia is no more uncomfortable than getting a filling. Our specialist endodontists are experts in pain-free technique.',
  },
  {
    q: 'Can root canal be done in one visit?',
    a: 'In most cases, yes. Our single-visit RCT using rotary endodontics and dental microscope allows us to complete treatment in a single appointment.',
  },
  {
    q: 'What is a dental microscope used for in RCT?',
    a: 'A dental microscope provides 20x magnification, allowing our endodontist to identify and treat all canals precisely — even tiny accessory canals that might otherwise be missed.',
  },
];

const moreServices = [
  { name: 'Dental Implants Delhi', to: '/dental-implants-delhi' },
  { name: 'Dental Veneers Delhi', to: '/dental-veneers-delhi' },
  { name: 'Porcelain Crowns', to: '/porcelain-crowns' },
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

function DentalRctDelhiPage() {
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
              <Link to="/contact-us" className="hover:text-primary transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary">Root Canal Treatment Delhi</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Painless Root Canal <span className="text-gradient">Treatment</span> in Delhi
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">Single-visit, painless root canal treatment in Delhi at The Dental Roots, Panchsheel Park. Specialist endodontists with dental microscopes.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <p className="text-white/80 text-lg leading-relaxed">Get single-visit painless root canal treatment in Delhi at The Dental Roots, Panchsheel Park. Our specialist endodontists use the latest rotary technology and dental microscopes.</p>
                <p className="text-white/80 leading-relaxed">No more fear of root canal — our team has perfected the art of pain-free endodontic treatment. Using precise anaesthetic technique, rotary instrumentation, and dental microscopes, we deliver comfortable, efficient treatment in most cases in a single appointment.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl font-bold text-white mb-6">Our Root Canal Advantages</h2>
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
              <h2 className="text-2xl font-bold text-white mb-6">Patient Experiences</h2>
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
                <h2 className="text-2xl font-bold text-white">Book Your Painless RCT Today</h2>
                <p className="text-white/60">Don't delay treatment — get a same-day appointment at our Panchsheel Park clinic.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact-us" className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary text-background font-bold hover:opacity-90 transition-opacity">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+919650440004" className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" /> Call Now
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2 className="text-2xl font-bold text-white mb-6">Explore More Services</h2>
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
