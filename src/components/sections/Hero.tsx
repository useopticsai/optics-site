"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { HERO, PRIMARY_CTA } from "@/lib/constants";

const EASE = "easeOut" as const;
const DURATION = 0.55;

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATION, ease: EASE, delay },
  };
}

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="
        relative overflow-hidden bg-transparent
        border-b border-line
        px-6 pt-12 pb-10 md:pt-16 md:pb-14
      "
    >
      <div className="relative mx-auto max-w-3xl text-center">
        {/* Status badge */}
        <motion.div
          {...fadeUpProps(0)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-sand px-4 py-1.5"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-forest-soft">
            {HERO.status}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUpProps(0.1)}
          className="text-4xl font-extrabold leading-tight tracking-tight text-forest sm:text-5xl md:text-6xl"
        >
          {HERO.tagline}
        </motion.h1>

        {/* Core function */}
        <motion.p
          {...fadeUpProps(0.2)}
          className="mt-6 text-lg leading-8 text-forest-soft sm:text-xl"
        >
          {HERO.coreFunction}
        </motion.p>

        {/* Impact — projection-framed */}
        <motion.p
          {...fadeUpProps(0.3)}
          className="mt-3 text-base leading-7 text-forest-soft"
        >
          {HERO.impact}
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUpProps(0.4)}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href={PRIMARY_CTA.href}
            id="hero-join-pilot"
            className="
              inline-flex items-center rounded-full bg-charcoal
              px-8 py-3.5 text-base font-bold text-cream
              shadow-[0_4px_20px_rgba(42,42,40,0.25)]
              hover:opacity-90 transition-opacity duration-200
            "
          >
            {PRIMARY_CTA.label}
          </Link>

          {/* Onboarding reassurance */}
          <span className="flex items-center gap-1.5 text-sm text-forest-soft">
            <svg
              aria-hidden
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="flex-shrink-0 text-charcoal"
            >
              <path
                d="M13.5 4.5L6.5 11.5L3 8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {HERO.onboarding}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
