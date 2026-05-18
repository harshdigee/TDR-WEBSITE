import { createFileRoute } from '@tanstack/react-router';
import { ScrollReveal, GlassCard, GradientOrb } from '@/components/ui/design-system';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: 'Privacy Policy — The Dental Roots' },
      {
        name: 'description',
        content:
          'Privacy policy for The Dental Roots dental clinics. Learn how we collect, use, and protect your personal information.',
      },
    ],
  }),
});

const sections = [
  {
    id: '1',
    title: '1. Information We Collect',
    content: `We collect personal information that you voluntarily provide to us when you register at our clinic, make an appointment, or contact us. This includes:

• Personal identification: Full name, date of birth, gender, address, phone number, and email address.
• Medical and dental history: Previous treatments, medications, allergies, and health conditions relevant to your dental care.
• Treatment records: Clinical notes, X-rays, photographs, treatment plans, and correspondence related to your dental care.
• Contact information: Details used to schedule appointments, send reminders, and follow up on your care.
• Financial information: Billing details required to process payment for services rendered (we do not store full card details).`,
  },
  {
    id: '2',
    title: '2. How We Use Your Information',
    content: `Your personal information is used solely to provide you with high-quality dental care. Specifically, we use your information to:

• Provide and manage your dental treatment.
• Schedule and confirm appointments and send reminders.
• Communicate with you regarding your treatment plan, follow-up care, and any changes to services.
• Process payments and issue invoices.
• Comply with our legal and regulatory obligations as a healthcare provider.
• Improve our services through anonymised, aggregated data analysis.

We will never sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    id: '3',
    title: '3. Treatment',
    content: `Clinical information — including your dental records, X-rays, treatment notes, and prescriptions — is used exclusively for providing your dental care. This information may be accessed by treating dentists, dental nurses, and administrative staff within The Dental Roots as necessary to deliver your care.

With your explicit written consent, we may share relevant clinical information with other healthcare providers involved in your treatment (e.g., referring specialists, GPs, or oral surgeons).`,
  },
  {
    id: '4',
    title: '4. Payment',
    content: `We collect billing information necessary to process payment for dental services. This includes invoicing details and, where applicable, insurance information. Payment card data is processed through secure, PCI-DSS compliant payment processors. We do not store full payment card numbers on our systems.

Outstanding balances may be referred to a debt collection agency if unpaid after reasonable notice; in such cases, only information necessary to recover the debt will be shared.`,
  },
  {
    id: '5',
    title: '5. Health Care Operations',
    content: `We may use your anonymised information for internal quality improvement purposes, including:

• Clinical audits to ensure we meet the highest standards of care.
• Staff training and professional development programmes.
• Service planning and resource allocation.
• Infection control and sterilisation monitoring.

Any data used for these purposes will be de-identified wherever possible and will never be shared externally in an identifiable form without your consent.`,
  },
  {
    id: '6',
    title: '6. Your Individual Rights',
    content: `You have the following rights regarding your personal information held by The Dental Roots:

• Right to Access: You may request a copy of your dental records and personal data held by us at any time.
• Right to Rectification: If any of your information is inaccurate or incomplete, you have the right to request that it be corrected.
• Right to Erasure: In certain circumstances, you may request that we delete your personal data, subject to our legal obligations to retain clinical records.
• Right to Object: You may object to certain uses of your data, including communications not directly related to your care.
• Right to Portability: You may request that we transfer your records to another dental provider.

To exercise any of these rights, please contact us at any of our clinic locations listed below.`,
  },
  {
    id: '7',
    title: '7. Contact Us Regarding Privacy',
    content: `If you have any questions, concerns, or requests regarding this privacy policy or how we handle your personal information, please contact us at any of our clinic locations:

• The Dental Roots — Panchsheel Park, New Delhi
• The Dental Roots — Golf Course Road, Gurgaon
• The Dental Roots — Sushant Lok, Gurgaon
• The Dental Roots — Green Park, New Delhi

You may also reach us by email at: info@thedentalroots.com
Or by phone: +91 98188 65678`,
  },
];

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-20">
        <GradientOrb className="absolute -top-40 -left-40 opacity-15" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="text-[#00d4ff]" size={26} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-white/50 text-sm">
                Last updated: May 2026
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <GlassCard className="mb-8">
              <p className="text-white/70 leading-relaxed">
                At <span className="text-white font-medium">The Dental Roots</span>, we are committed to protecting your privacy and maintaining the confidentiality of your personal and medical information. This policy explains how we collect, use, and safeguard your data in accordance with applicable data protection laws and healthcare regulations in India.
              </p>
            </GlassCard>
          </ScrollReveal>

          <div className="space-y-5">
            {sections.map((section, i) => (
              <ScrollReveal key={section.id} delay={i * 0.05}>
                <GlassCard>
                  <h2 className="text-xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <div className="text-white/65 leading-relaxed text-sm whitespace-pre-line">
                    {section.content}
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center text-white/30 text-xs">
              © {new Date().getFullYear()} The Dental Roots. All rights reserved.
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
