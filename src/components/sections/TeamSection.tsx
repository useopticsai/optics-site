"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TEAM_HEADLINE, TEAM } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function TeamSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="team"
      ref={ref}
      aria-label="Team"
      className="bg-transparent border-b border-line px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3 text-xs font-bold uppercase tracking-widest text-charcoal"
        >
          People
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mb-12 text-3xl font-extrabold tracking-tight text-forest sm:text-4xl md:text-5xl"
        >
          {TEAM_HEADLINE}
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 + index * 0.15 }}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-line bg-cream p-8 shadow-[0_4px_20px_rgba(42,42,40,0.04)]"
            >
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-forest">{member.name}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-charcoal">{member.role}</p>
                <p className="text-sm font-medium text-forest/70">{member.education}</p>
                <p className="pt-2 text-base leading-relaxed text-forest-soft">{member.focus}</p>
              </div>
              <div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-charcoal hover:underline underline-offset-4 transition"
                >
                  LinkedIn ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
