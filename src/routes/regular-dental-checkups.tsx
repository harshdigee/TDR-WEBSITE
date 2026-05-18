import { createFileRoute, Link } from '@tanstack/react-router';
import { ScrollReveal, GlassCard, GradientOrb } from '@/components/ui/design-system';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Calendar,
  Shield,
  Search,
  Zap,
  SmilePlus,
  ActivitySquare,
  MessageCircle,
} from 'lucide-react';

export const Route = createFileRoute('/regular-dental-checkups')({
  component: RegularDentalCheckupsPage,
  head: () => ({
    meta: [
      { title: 'Regular Dental Checkups — The Dental Roots' },
      {
        name: 'description',
        content:
          'Regular dental checkups at The Dental Roots. Prevention is better than cure — protect your smile with professional care every 6 months.',
      },
    ],
  }),
});

const included = [
  'Full oral examination',
  'Professional scaling & cleaning',
  'X-rays when needed',
  'Oral cancer screening',
  'Gum disease assessment',
  'Treatment planning',
];

const benefits = [
  {
    icon: Search,
    text: 'Early detection of cavities',
  },
  {
    icon: Shield,
    text: 'Professional plaque & tartar removal',
  },
  {
    icon: ActivitySquare,
    text: 'Gum disease prevention',
  },
  {
    icon: SmilePlus,
    text: 'Oral cancer screening',
  },
  {
    icon: Zap,
    text: 'Digital RVG X-rays (80–90% less radiation)',
  },
  {
    icon: CheckCircle2,
    text: 'Personalized oral hygiene advice',
  },
];

function RegularDentalCheckupsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/images/regular-dental-checkups_banner.webp"
          alt="Regular Dental Checkups"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/60 via-[#0a0f1e]/40 to-[#0a0f1e]" />
        <GradientOrb className="absolute -top-40 -left-40 opacity-20" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-6">
                🦷 Preventive Care
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Regular Dental{' '}
                <span className="text-gradient">Checkups</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Prevention is better than cure — protect your smile with regular
                professional care.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
              <GlassCard>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Why Regular Checkups?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Regular dental visits every{' '}
                  <span className="text-[#00d4ff] font-medium">6 months</span>{' '}
                  allow us to catch problems early, before they become painful
                  and expensive. Professional cleaning removes hardened plaque
                  (tartar) that regular brushing misses — keeping your gums
                  healthy and your smile bright.
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <GlassCard>
                <h2 className="text-2xl font-bold text-white mb-5">
                  What's Included in Your Checkup?
                </h2>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white/70"
                    >
                      <CheckCircle2
                        className="text-[#00d4ff] flex-shrink-0"
                        size={18}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Right Column — CTA */}
          <div className="lg:col-span-1">
            <ScrollReveal delay={0.15}>
              <GlassCard className="sticky top-28 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-5">
                  <Calendar className="text-[#00d4ff]" size={26} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Book Your Checkup
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Schedule your 6-month dental checkup at any of our 4
                  locations across Delhi NCR.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact-us"
                    className="block w-full px-6 py-3 rounded-xl bg-[#00d4ff] text-[#0a0f1e] font-semibold hover:bg-[#00d4ff]/90 transition-all text-sm"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="https://wa.me/919818865678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl border border-[#25d366]/30 text-[#25d366] hover:bg-[#25d366]/10 transition-all text-sm"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
                <p className="text-white/30 text-xs mt-4">
                  📍 Delhi · Gurgaon · Panchsheel Park · Golf Course Road
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of{' '}
                <span className="text-gradient">Regular Checkups</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.text} delay={i * 0.08}>
                <GlassCard className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center">
                    <b.icon className="text-[#00d4ff]" size={18} />
                  </div>
                  <span className="text-white/80 text-sm font-medium">
                    {b.text}
                  </span>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't wait until it{' '}
              <span className="text-gradient">hurts.</span>
            </h2>
            <p className="text-white/60 mb-8">
              Book your 6-month checkup today and keep your smile healthy for
              life.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#00d4ff] text-[#0a0f1e] font-semibold text-lg hover:bg-[#00d4ff]/90 transition-all"
            >
              <Calendar size={20} />
              Book My Checkup
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
