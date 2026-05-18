import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { GradientOrb } from '@/components/ui/design-system';
import { CheckCircle2, Home } from 'lucide-react';

export const Route = createFileRoute('/thank-you')({
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <GradientOrb className="absolute -top-40 -left-40 opacity-20" />
      <GradientOrb
        className="absolute -bottom-40 -right-40 opacity-10"
        color="bg-[#7c3aed]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <CheckCircle2 size={80} className="text-[#00d4ff]" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="text-white/70 text-lg leading-relaxed mb-10"
        >
          Your appointment request has been received. Our team will contact you
          within{' '}
          <span className="text-[#00d4ff] font-semibold">24 hours</span> to
          confirm your appointment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00d4ff] text-[#0a0f1e] font-semibold hover:bg-[#00d4ff]/90 transition-all"
          >
            <Home size={18} />
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
