"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { VALUES } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ValuesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="values"
      ref={ref}
      aria-label="Values"
      className="bg-sand/80 border-b border-line px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-3 text-xs font-bold uppercase tracking-widest text-forest-soft"
        >
          How we operate
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mb-12 text-3xl font-extrabold tracking-tight text-forest sm:text-4xl md:text-5xl"
        >
          Values
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {VALUES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 + index * 0.1 }}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-line bg-cream p-6 md:p-8 shadow-[0_4px_20px_rgba(42,42,40,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(42,42,40,0.08)]"
            >
              <div className="space-y-4">
                {item.image && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-line/60 bg-sand/40 shadow-sm">
                    <Image
                      src={item.image}
                      alt={`${item.title} — Optics value`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-forest">{item.title}</h3>
                <p className="text-base leading-relaxed text-forest-soft">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
