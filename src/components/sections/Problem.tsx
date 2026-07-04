"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PROBLEM } from "@/lib/constants";

const EASE = "easeOut" as const;

/* Simple inline SVG icons — one per problem card */
const ICONS = [
  /* Financial waste — dollar sign */
  <svg key="dollar" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>,
  /* High barriers — shield lock */
  <svg key="barrier" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
    />
    <rect x="10" y="10" width="4" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
    <path d="M10 10v-1a2 2 0 1 1 4 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  /* Unscientific ordering — dice */
  <svg key="dice" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" />
    <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" />
    <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" />
  </svg>,
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="The problem"
      className="bg-cream border-b border-line px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3 text-xs font-bold uppercase tracking-widest text-terracotta"
        >
          The problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
          className="mb-6 text-3xl font-extrabold leading-snug tracking-tight text-forest sm:text-4xl max-w-2xl"
        >
          Bakeries weren't built to waste — but the tools haven't caught up.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mb-14 text-base leading-7 text-forest-soft max-w-xl"
        >
          Independent bakeries face systemic inefficiencies that quietly erode margins every day.
        </motion.p>

        {/* Vertical card list */}
        <div className="flex flex-col gap-6">
          {PROBLEM.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.1 }}
              className="
                flex gap-5 rounded-2xl border border-line bg-sand/50
                p-6 md:p-8
                shadow-[0_2px_12px_rgba(64,42,28,0.04)]
              "
            >
              {/* Icon chip */}
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-deep text-terracotta">
                {ICONS[i]}
              </span>

              <div>
                <h3 className="text-lg font-bold text-forest">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-forest-soft">{item.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
