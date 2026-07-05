import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemTeaser from "@/components/sections/ProblemTeaser";
import CtaBand from "@/components/sections/CtaBand";
import { HERO, PRIMARY_CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Optics — Supporting bakeries, reducing food waste",
  description:
    "Optics is AI demand forecasting designed to help independent bakeries bake the right amount and waste less. 30-minute setup, no hardware required.",
};

export default function HomePage() {
  return (
    <main id="main-content">
      {/* 1. Hero — value prop + CTA */}
      <Hero />

      {/* 2. Condensed problem teaser — sand band */}
      <ProblemTeaser />

      {/* 3. CTA band — one per page, as per palette rules */}
      <CtaBand
        headline="Ready to stop guessing how much to bake?"
        subline={HERO.onboarding}
        ctaLabel={PRIMARY_CTA.label}
        ctaHref={PRIMARY_CTA.href}
        ctaId="home-cta-band-join-waitlist"
      />
    </main>
  );
}
