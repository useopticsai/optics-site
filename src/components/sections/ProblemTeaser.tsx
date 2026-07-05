"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PROBLEM } from "@/lib/constants";

const EASE = "easeOut" as const;

const ICONS = [
  /* Dollar / Financial waste */
  <svg key="dollar" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  /* Barrier / High cost */
  <svg key="barrier" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="3" y="11" width="18" height="2" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 3v5M12 16v5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
  /* Intuition / Unscientific */
  <svg key="intuition" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
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
      className="bg-sand/80 border-t border-line px-6 py-20 md:py-28"
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
          Independent bakeries lose thousands every year — silently.
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
                shadow-[0_2px_12px_rgba(42,42,40,0.05)]
                hover:shadow-[0_4px_20px_rgba(42,42,40,0.08)]
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
            className="text-sm font-semibold text-charcoal hover:underline underline-offset-4 transition"
          >
            See how Optics solves this →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
