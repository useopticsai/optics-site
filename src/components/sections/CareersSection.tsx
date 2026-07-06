"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CAREERS, CONTACT, CAREERS_FORM_CONFIG, CAREERS_FORM_MESSAGES } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CareersSection() {
  const headerRef = useRef<HTMLElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  const totalCount = String(CAREERS.values.length).padStart(2, "0");

  return (
    <div className="w-full">
      {/* 1. Header Section */}
      <section
        ref={headerRef}
        aria-label="Careers Introduction"
        className="px-6 py-20 md:py-28 bg-sand/30 border-b border-line"
      >
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-forest-soft"
          >
            Careers at Optics
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mb-8 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-forest max-w-4xl"
          >
            {CAREERS.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-forest-soft max-w-3xl font-normal"
          >
            {CAREERS.intro}
          </motion.p>
        </div>
      </section>

      {/* 2. "How we work" Values Section */}
      <section
        aria-label="How we work"
        className="px-6 py-20 md:py-28 bg-cream border-b border-line"
      >
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-12 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-forest"
          >
            {CAREERS.valuesHeadline}
          </motion.h2>

          <div className="divide-y divide-line/60 border-y border-line/60">
            {CAREERS.values.map((item, index) => {
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
        </div>
      </section>

      {/* 3. Apply Section */}
      <section
        aria-label="Apply to Optics"
        className="px-6 py-20 md:py-28 bg-sand/40"
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-12 max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-mono font-bold uppercase tracking-wider">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
              <span>{CAREERS.noOpenRoles}</span>
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-forest">
              {CAREERS.rolesHeadline}
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-forest-soft">
              {CAREERS.rolesBody}
            </p>
          </motion.div>

          {/* Primary CTA: Application Form */}
          <div className="max-w-2xl">
            <h3 className="mb-6 text-xl sm:text-2xl font-bold text-forest">
              {CAREERS.applyHeading}
            </h3>
            <ContactForm
              fields={CAREERS_FORM_CONFIG}
              subject={CAREERS_FORM_MESSAGES.subject}
              className="bg-cream shadow-[0_12px_36px_rgba(42,42,40,0.06)] border-line"
            />

            {/* Secondary CTA: Quieter Email Fallback */}
            <div className="mt-6 text-sm sm:text-base text-forest-soft flex flex-wrap items-center gap-1.5">
              <span>{CAREERS.preferEmailPrefix}</span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-bold text-charcoal underline underline-offset-4 hover:text-forest transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
