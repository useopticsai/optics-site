import type { Metadata } from "next";
import MissionSection from "@/components/sections/MissionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import TeamSection from "@/components/sections/TeamSection";
import CtaBand from "@/components/sections/CtaBand";
import { PRIMARY_CTA, CLOSING_CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mission — Optics",
  description: "Why Optics exists: helping independent bakeries eliminate food waste and protect their margins with AI demand forecasting.",
};

export default function MissionPage() {
  return (
    <main id="mission-content">
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CtaBand
        headline={CLOSING_CTA.headline}
        subline={CLOSING_CTA.subline}
        ctaLabel={PRIMARY_CTA.label}
        ctaHref={PRIMARY_CTA.href}
        ctaId="mission-cta-band-join-pilot"
      />
    </main>
  );
}
