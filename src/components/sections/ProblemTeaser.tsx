"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PROBLEM, PROBLEM_TEASER_HEADLINE } from "@/lib/constants";

const EASE = "easeOut" as const;

const ICONS = [
  /* Dollar / Financial waste */
  <svg key="dollar" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  /* Enterprise integration / Blocks */
  <svg key="blocks" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <path d="M3 17.5h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  /* Gut feel / Question circle */
  <svg key="question" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,
];

export default function ProblemTeaser() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="The problem"
      className="bg-sand/80 border-t border-line px-6 pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3 text-xs font-bold uppercase tracking-widest text-forest-soft"
        >
          The problem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
          className="mb-12 text-2xl font-bold leading-snug text-forest sm:text-3xl max-w-xl"
        >
          {PROBLEM_TEASER_HEADLINE}
        </motion.h2>

        {/* Cards */}
        <ul className="grid gap-6 sm:grid-cols-3">
          {PROBLEM.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
              className="
                flex flex-col gap-4 rounded-2xl border border-line
                bg-cream p-6
                shadow-warm-sm
                hover:shadow-warm-hover
                transition-shadow duration-300
              "
            >
              {/* Icon */}
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-deep text-charcoal">
                {ICONS[i]}
              </span>
              <h3 className="text-base font-bold text-forest">{item.title}</h3>
              <p className="text-sm leading-6 text-forest-soft">{item.body}</p>
            </motion.li>
          ))}
        </ul>

        {/* Quiet link to /product for the curious */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
          className="mt-10"
        >
          <Link
            href="/product"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal hover:text-forest hover:underline underline-offset-8 transition-all inline-block"
          >
            See how Optics solves this →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
