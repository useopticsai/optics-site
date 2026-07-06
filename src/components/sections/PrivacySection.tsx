"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PRIVACY, CONTACT } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PrivacySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      aria-label="Privacy Policy"
      className="px-6 py-20 md:py-28 bg-cream min-h-[65vh]"
    >
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3 text-xs font-bold uppercase tracking-widest text-charcoal"
        >
          Data & Privacy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mb-10 text-4xl font-extrabold tracking-tight text-forest sm:text-5xl md:text-6xl"
        >
          {PRIVACY.headline}
        </motion.h1>

        <div className="space-y-6 max-w-3xl">
          {PRIVACY.body.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: 0.2 + index * 0.1 }}
              className="text-lg sm:text-xl leading-relaxed text-forest-soft"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-line/60 max-w-3xl text-sm text-forest-soft flex flex-wrap items-center gap-1.5"
        >
          <span>Have questions about your data? Reach us at </span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-bold text-charcoal underline underline-offset-4 hover:text-forest transition-colors"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
