"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CAREERS, CONTACT, CAREERS_FORM_CONFIG, CAREERS_FORM_MESSAGES } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import NumberedList from "@/components/NumberedList";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CareersSection() {
  const headerRef = useRef<HTMLElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });


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

          <NumberedList items={CAREERS.values} />
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
              className="bg-cream shadow-warm-xl border-line"
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
