"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface CtaBandProps {
  headline: string;
  subline?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaId: string;
}

export default function CtaBand({
  headline,
  subline,
  ctaLabel,
  ctaHref,
  ctaId,
}: CtaBandProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      aria-label={headline}
      className="bg-charcoal border-t border-charcoal px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-extrabold leading-tight tracking-tight text-cream sm:text-4xl"
        >
          {headline}
        </motion.h2>

        {subline && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-base leading-7 text-cream/80"
          >
            {subline}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-9"
        >
          <Link
            href={ctaHref}
            id={ctaId}
            className="
              inline-flex items-center rounded-full
              bg-cream px-8 py-3.5
              text-base font-bold text-charcoal
              shadow-[0_4px_20px_rgba(42,42,40,0.12)]
              hover:bg-deep transition-colors duration-200
            "
          >
            {ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
