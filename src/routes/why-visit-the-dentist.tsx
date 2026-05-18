import { createFileRoute, Link } from '@tanstack/react-router';
import { ScrollReveal, GlassCard, GradientOrb } from '@/components/ui/design-system';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, AlertTriangle, Heart } from 'lucide-react';

export const Route = createFileRoute('/why-visit-the-dentist')({
  component: WhyVisitTheDentistPage,
  head: () => ({
    meta: [
      { title: 'Why Visit The Dentist — The Dental Roots' },
      {
        name: 'description',
        content:
          'Discover why regular dental visits are essential for your overall health. Prevention, early detection, and more.',
      },
    ],
  }),
});

const sections = [
  {
    icon: CheckCircle2,
    title: 'Prevention is Always Better Than Cure',
    content: `Most dental problems — cavities, gum disease, and even oral cancer — can be detected and treated early with regular checkups. By the time a tooth starts causing pain, the problem has usually become significantly worse (and more expensive) to treat. A simple filling caught early can save you from a root canal or extraction later.`,
  },
  {
    icon: AlertTriangle,
    title: 'The Hidden Dangers of Bleeding Gums',
    content: `If your gums bleed when you brush, this is not normal — it is a sign of gum disease (gingivitis or periodontitis). Untreated gum disease is linked to heart disease, diabetes, and even premature births. Regular professional cleaning removes the hardened plaque (tartar/calculus) that your toothbrush simply cannot reach, stopping gum disease in its tracks.`,
  },
  {
    icon: Heart,
    title: 'Oral Health Is Overall Health',
    content: `Your mouth is a window to your body's health. Conditions like diabetes, vitamin deficiencies, and even some cancers first show signs in the mouth. Regular dental visits don't just protect your teeth — they can be an early warning system for your general wellbeing. Research shows strong links between poor oral health and cardiovascular disease.`,
  },
  {
    icon: CheckCircle2,
    title: 'Did You Know? Bad Breath',
    content: `Up to 85% of bad breath (halitosis) originates from bacteria on the tongue, not from the stomach. Professional tongue cleaning and guidance on your oral hygiene routine can dramatically improve bad breath. Regular dental visits allow your dentist to identify the source and recommend targeted treatment.`,
  },
  {
    icon: AlertTriangle,
    title: 'Cavities — More Common Than You Think',
    content: `Cavities are one of the most prevalent chronic diseases worldwide. They form when bacteria in your mouth produce acids that erode enamel. In the early stages, cavities cause no pain — which is why routine X-rays and examinations are essential. Left untreated, cavities progress to the pulp, requiring root canal treatment, or even tooth loss. Early detection means a simple filling rather than complex treatment.`,
  },
  {
    icon: Heart,
    title: 'How Often Should You Visit?',
    content: `The standard recommendation is every 6 months — but some patients with higher cavity risk, gum disease, or orthodontic treatment may benefit from more frequent visits. Your dentist will recommend the ideal schedule for you. Children should have their first dental visit by their first birthday or when their first tooth appears.`,
  },
];

function WhyVisitTheDentistPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-20">
        <GradientOrb className="absolute -top-40 -left-40 opacity-20" />
        <GradientOrb
          className="absolute -bottom-40 -right-40 opacity-10"
          color="bg-[#7c3aed]"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-6">
                🦷 Patient Education
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Why Visit{' '}
                <span className="text-gradient">The Dentist?</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                The single best thing you can do for your long-term oral health
                is simple — visit your dentist regularly.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <GlassCard className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Should I Visit The Dentist?
              </h2>
              <p className="text-white/70 leading-relaxed text-base">
                Many people only visit the dentist when something hurts. But
                waiting for pain means waiting too long. Dental problems rarely
                announce themselves early — they quietly grow in the dark until
                they become unavoidable. Regular dental visits are the single
                most effective way to maintain a healthy mouth, prevent
                expensive problems, and even protect your overall health.
              </p>
            </GlassCard>
          </ScrollReveal>

          <div className="space-y-6">
            {sections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.08}>
                <GlassCard>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center">
                      <section.icon className="text-[#00d4ff]" size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {section.title}
                      </h3>
                      <p className="text-white/65 leading-relaxed text-sm">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <GlassCard className="!p-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {[
                  { value: '85%', label: 'of bad breath is from tongue bacteria' },
                  { value: 'Every 6 months', label: 'recommended visit frequency' },
                  { value: 'Early', label: 'detection = simpler, cheaper treatment' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center py-10 px-6 text-center"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                      {item.value}
                    </span>
                    <span className="text-white/60 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to take control of your{' '}
              <span className="text-gradient">oral health?</span>
            </h2>
            <p className="text-white/60 mb-8">
              Book your checkup at The Dental Roots today. We have 4 convenient
              locations across Delhi NCR.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#00d4ff] text-[#0a0f1e] font-semibold text-lg hover:bg-[#00d4ff]/90 transition-all"
            >
              <Calendar size={20} />
              Book Your Checkup
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
