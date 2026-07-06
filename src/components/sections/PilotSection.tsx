"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PILOT, CONTACT, PILOT_FORM_CONFIG, PILOT_FORM_MESSAGES } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import NumberedList from "@/components/NumberedList";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PilotSection() {
  const headerRef = useRef<HTMLElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });


  return (
    <div className="w-full">
      {/* 1. Header Section */}
      <section
        ref={headerRef}
        aria-label="Pilot Program Introduction"
        className="px-6 py-20 md:py-28 bg-sand/30 border-b border-line"
      >
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-forest-soft"
          >
            Early Access
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="mb-8 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-forest max-w-4xl"
          >
            {PILOT.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-forest-soft max-w-3xl font-normal"
          >
            {PILOT.status}
          </motion.p>
        </div>
      </section>

      {/* 2. What the pilot involves & Who it's for */}
      <section
        aria-label="What the pilot involves"
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
            {PILOT.involvesHeadline}
          </motion.h2>

          <NumberedList items={PILOT.involves} />

          {/* Who it's for — integrated cleanly below the involves list */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mt-16 pt-12 border-t border-line/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
          >
            <div className="md:col-span-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-forest">
                {PILOT.whoHeadline}
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg sm:text-xl leading-relaxed text-forest-soft font-medium">
                {PILOT.who}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Apply Section */}
      <section
        aria-label="Apply for the pilot"
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
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-forest">
              {PILOT.formHeadline}
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-forest-soft">
              {PILOT.formIntro}
            </p>
          </motion.div>

          {/* Primary CTA: Reusable ContactForm configured for Pilot */}
          <div className="max-w-2xl">
            <ContactForm
              fields={PILOT_FORM_CONFIG}
              subject={PILOT_FORM_MESSAGES.subject}
              messages={PILOT_FORM_MESSAGES}
              className="bg-cream shadow-warm-xl border-line"
            />
            <p className="mt-3 text-xs font-mono text-forest-soft/80">
              {PILOT.privacyNote}
            </p>

            {/* Secondary Option: Quieter Direct Email Link */}
            <div className="mt-8 text-sm sm:text-base text-forest-soft flex flex-wrap items-center gap-1.5">
              <span>Prefer to reach out directly? Reach us at </span>
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
