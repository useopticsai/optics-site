"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const EASE = "easeOut" as const;

export default function DemoPlaceholder() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="demo"
      ref={ref}
      aria-label="Product demo"
      className="bg-transparent border-t border-line px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3 text-xs font-bold uppercase tracking-widest text-charcoal"
        >
          See it in action
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
          className="mb-6 text-2xl font-bold leading-snug text-forest sm:text-3xl"
        >
          MVP Demo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mb-10 text-sm leading-6 text-forest-soft max-w-md mx-auto"
        >
          A walkthrough of the Optics forecasting dashboard is coming soon.
        </motion.p>

        {/* Placeholder slot for GIF / video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
          className="
            mx-auto aspect-video max-w-2xl rounded-2xl
            border-2 border-dashed border-line bg-sand/60
            flex flex-col items-center justify-center gap-3
          "
        >
          {/* Play icon */}
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-deep text-forest-soft">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M8 5.5v13l11-6.5L8 5.5z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-forest-soft">
            Demo video coming soon
          </span>
        </motion.div>
      </div>
    </section>
  );
}
