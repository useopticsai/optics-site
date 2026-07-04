"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { COMPETITIVE_EDGE } from "@/lib/constants";

const EASE = "easeOut" as const;

export default function CompetitiveEdge() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      aria-label="Competitive edge"
      className="bg-espresso border-t border-espresso px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3 text-xs font-bold uppercase tracking-widest text-cream/50"
        >
          Competitive edge
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
          className="mb-14 text-3xl font-extrabold leading-snug tracking-tight text-cream sm:text-4xl"
        >
          What legacy POS can't do.
        </motion.h2>

        {/* Edge items */}
        <ul className="mx-auto max-w-2xl flex flex-col gap-6 text-left">
          {COMPETITIVE_EDGE.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: EASE, delay: 0.12 + i * 0.1 }}
              className="flex items-start gap-4"
            >
              {/* Check mark */}
              <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-terracotta">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M13 4.5L6.5 11.5L3 8"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-cream"
                  />
                </svg>
              </span>
              <p className="text-base leading-7 text-cream/85">{point}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
