"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TECHNOLOGY } from "@/lib/constants";

const EASE = "easeOut" as const;

export default function Technology() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Technology"
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
          Technology
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
          className="mb-6 text-3xl font-extrabold leading-snug tracking-tight text-forest sm:text-4xl max-w-2xl"
        >
          Built different — from the math up.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mb-14 text-base leading-7 text-forest-soft max-w-xl"
        >
          Three layers of intelligence designed to work together, so every forecast gets sharper over time.
        </motion.p>

        {/* Numbered items */}
        <ol className="flex flex-col gap-10">
          {TECHNOLOGY.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.12 }}
              className="flex gap-5 md:gap-7"
            >
              {/* Step number */}
              <span
                aria-hidden
                className="
                  flex h-10 w-10 flex-shrink-0 items-center justify-center
                  rounded-full border-2 border-terracotta
                  text-sm font-extrabold text-terracotta
                "
              >
                {i + 1}
              </span>

              <div className="border-b border-line pb-8 last:border-0">
                <h3 className="text-lg font-bold text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-forest-soft max-w-lg">
                  {item.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
