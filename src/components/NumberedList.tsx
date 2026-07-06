"use client";

import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface NumberedListItem {
  title: string;
  body: string;
}

interface NumberedListProps {
  items: NumberedListItem[];
}

/**
 * Reusable editorial numbered list in "01 / 04" style.
 * Used by CareersSection (values) and PilotSection (involves).
 */
export default function NumberedList({ items }: NumberedListProps) {
  const totalCount = String(items.length).padStart(2, "0");

  return (
    <div className="divide-y divide-line/60 border-y border-line/60">
      {items.map((item, index) => {
        const idxStr = String(index + 1).padStart(2, "0");
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
            className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-baseline"
          >
            <div className="md:col-span-3 font-mono text-sm font-bold tracking-widest text-charcoal flex items-center gap-2">
              <span>{idxStr}</span>
              <span className="text-forest/30">/</span>
              <span className="text-forest/50">{totalCount}</span>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-2xl font-extrabold text-forest">{item.title}</h3>
            </div>
            <div className="md:col-span-5">
              <p className="text-base sm:text-lg leading-relaxed text-forest-soft">{item.body}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
