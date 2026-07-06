"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { VALUES, VALUES_LABEL, VALUES_TITLE } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Compact 50/50 split values showcase with uncropped 4:3 images and zero top space.
 */
export default function ValuesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeValue = VALUES[activeIndex] || VALUES[0];

  return (
    <>
      {/* Desktop Showcase: 50/50 split down the middle with items-start for zero top space */}
      <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Left Column (50%): Headings + Stacked selector titles */}
        <div className="col-span-6 flex flex-col gap-6">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-forest-soft">
              {VALUES_LABEL}
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-forest sm:text-4xl md:text-5xl">
              {VALUES_TITLE}
            </h2>
          </div>

          <div className="flex flex-col gap-2" role="tablist" aria-label="Company values">
            {VALUES.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`value-panel-${index}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`group text-left px-5 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border focus:outline-none focus:ring-2 focus:ring-forest/30 ${
                    isActive
                      ? "bg-cream border-line/80 shadow-warm-md translate-x-1.5"
                      : "border-transparent hover:bg-sand/60 hover:translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-mono text-xs font-bold tracking-widest transition-colors ${isActive ? "text-charcoal" : "text-forest/40 group-hover:text-forest/70"}`}>
                      0{index + 1}
                    </span>
                    <h3 className={`text-xl lg:text-2xl font-extrabold tracking-tight transition-colors ${isActive ? "text-forest" : "text-forest/60 group-hover:text-forest"}`}>
                      {item.title}
                    </h3>
                  </div>
                  <span className={`text-lg transition-all duration-200 ${isActive ? "opacity-100 translate-x-0 text-charcoal font-bold" : "opacity-0 -translate-x-2 text-forest/30"}`} aria-hidden="true">
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column (50%): Uncropped 4:3 picture + bio card */}
        <div className="col-span-6 relative w-full flex items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeValue.title}
              id={`value-panel-${activeIndex}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="w-full flex flex-col gap-4"
            >
              {activeValue.image ? (
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-sand/40 border border-line/60 shadow-warm-lg">
                  <Image
                    src={activeValue.image}
                    alt={`${activeValue.title} — Optics value`}
                    fill
                    sizes="(max-width: 1200px) 50vw, 45vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="flex w-full aspect-[4/3] items-center justify-center rounded-2xl bg-sand/60 text-forest/40 shadow-warm-lg font-bold text-lg border border-line/60">
                  {activeValue.title}
                </div>
              )}

              <div className="rounded-xl border border-line/60 bg-cream/80 p-5 md:p-6 shadow-warm-sm backdrop-blur-sm">
                <p className="text-base md:text-lg leading-relaxed text-forest font-medium">
                  {activeValue.body}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Showcase: Headings + Interactive accordion stack */}
      <div className="md:hidden flex flex-col gap-6">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-forest-soft">
            {VALUES_LABEL}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-forest sm:text-4xl">
            {VALUES_TITLE}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {VALUES.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={item.title}
                className={`flex flex-col rounded-xl border transition-all duration-200 overflow-hidden ${
                  isActive ? "bg-cream border-line/80 shadow-warm-md" : "bg-sand/40 border-line/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="w-full text-left p-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-charcoal">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-extrabold text-forest">{item.title}</h3>
                  </div>
                  <span className={`text-base text-forest/60 transition-transform duration-200 ${isActive ? "rotate-90" : ""}`}>
                    →
                  </span>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 flex flex-col gap-3 border-t border-line/40">
                        {item.image && (
                          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-line/60 bg-sand/40 shadow-sm">
                            <Image src={item.image} alt={`${item.title} — Optics value`} fill sizes="100vw" className="object-cover" />
                          </div>
                        )}
                        <p className="text-sm sm:text-base leading-relaxed text-forest font-medium">{item.body}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
