import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// 1. SCROLL REVEAL
export function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 2. GLASSMORPHISM CARDS (with Hover Effects)
export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-card hover-glow p-6 overflow-hidden relative",
        className
      )}
    >
      {children}
    </div>
  );
}

// 3. PARALLAX HERO BACKGROUND
export function ParallaxHero({
  children,
  imageSrc,
  videoSrc,
  className,
}: {
  children: ReactNode;
  imageSrc?: string;
  videoSrc?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className={cn("relative w-full h-screen overflow-hidden bg-background", className)}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            src={videoSrc}
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/20 via-transparent to-[#0a0f1e]" />
      </motion.div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

// 4. PAGE TRANSITIONS WRAPPER
export function PageTransition({ children, className, locationKey }: { children: ReactNode; className?: string; locationKey?: string }) {
  return (
    <motion.div
      key={locationKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 6. STAT COUNTERS
export function AnimatedCounter({
  value,
  duration = 2,
  className,
  prefix = "",
  suffix = "",
}: {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const totalSteps = Math.min(end, 60 * duration);
      const stepValue = end / totalSteps;
      const interval = (duration * 1000) / totalSteps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// 7. IMAGE REVEAL
export function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="absolute inset-0 z-10 bg-accent"
      />
      <motion.img
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover", imageClassName)}
      />
    </div>
  );
}

// 10. GRADIENT ORBS
export function GradientOrb({
  className,
  color = "bg-[#00d4ff]",
  size = "w-[500px] h-[500px]",
}: {
  className?: string;
  color?: string;
  size?: string;
}) {
  return (
    <div
      className={cn("gradient-orb", size, color, className)}
    />
  );
}
