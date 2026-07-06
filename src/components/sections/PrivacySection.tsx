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
      className="px-6 py-20 md:py-28 bg-cream min-h-[70vh]"
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
          className="mb-3 text-4xl font-extrabold tracking-tight text-forest sm:text-5xl md:text-6xl"
        >
          {PRIVACY.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
          className="mb-10 text-xs text-forest-soft font-mono"
        >
          {PRIVACY.lastUpdated}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          className="mb-14 text-lg sm:text-xl leading-relaxed text-forest-soft max-w-3xl pb-10 border-b border-line"
        >
          {PRIVACY.intro}
        </motion.p>

        <div className="space-y-12 max-w-3xl">
          {PRIVACY.sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: 0.25 + index * 0.05 }}
              className="pt-8 first:pt-0 border-t first:border-t-0 border-line/60"
            >
              <h2 className="mb-3 text-xl font-bold text-forest sm:text-2xl">
                {section.title}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-forest-soft">
                {section.body}
              </p>
              {section.title === "Contact" && (
                <div className="mt-4">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-2 font-bold text-charcoal underline underline-offset-4 hover:text-forest transition-colors text-base"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
