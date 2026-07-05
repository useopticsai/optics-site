"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MISSION } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function MissionSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="mission"
      ref={ref}
      aria-label="Our Mission"
      className="bg-transparent border-b border-line px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3 text-xs font-bold uppercase tracking-widest text-charcoal"
        >
          Our mission
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold tracking-tight text-forest sm:text-5xl md:text-6xl max-w-4xl"
        >
          {MISSION.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="mb-10 text-xl font-semibold leading-relaxed text-forest md:text-2xl max-w-3xl"
        >
          {MISSION.lead}
        </motion.p>

        <div className="space-y-6 max-w-3xl">
          {MISSION.body.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 + index * 0.1 }}
              className="text-base sm:text-lg leading-relaxed text-forest-soft"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
