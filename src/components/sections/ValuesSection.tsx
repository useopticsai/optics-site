"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ValuesShowcase from "@/components/sections/ValuesShowcase";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ValuesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="values"
      ref={ref}
      aria-label="Values"
      className="bg-sand/80 border-b border-line px-6 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <ValuesShowcase />
      </div>
    </section>
  );
}
