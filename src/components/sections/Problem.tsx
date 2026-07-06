"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PROBLEM, PROBLEM_HEADLINE, PROBLEM_SUBLINE } from "@/lib/constants";

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
  /* Enterprise tools — blocks */
  <svg key="blocks" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 17.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  /* Gut feel — question mark */
  <svg key="question" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
    />
  </svg>,
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="problem"
      ref={ref}
      aria-label="The problem"
      className="bg-sand px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3 text-xs font-bold uppercase tracking-widest text-charcoal"
        >
          The problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
          className="mb-6 text-3xl font-extrabold leading-snug tracking-tight text-forest sm:text-4xl max-w-2xl"
        >
          {PROBLEM_HEADLINE}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mb-14 text-base leading-7 text-forest-soft max-w-xl"
        >
          {PROBLEM_SUBLINE}
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
                shadow-warm-sm
              "
            >
              {/* Icon chip */}
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-deep text-charcoal">
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
