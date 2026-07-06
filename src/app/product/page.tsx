import type { Metadata } from "next";
import Problem from "@/components/sections/Problem";
import Technology from "@/components/sections/Technology";
import CompetitiveEdge from "@/components/sections/CompetitiveEdge";
import DemoPlaceholder from "@/components/sections/DemoPlaceholder";
import CtaBand from "@/components/sections/CtaBand";
import { PRIMARY_CTA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Product — Optics",
  description:
    "How Optics uses Bayesian demand forecasting and real-time signals to help independent bakeries cut waste and bake the right amount.",
};

export default function ProductPage() {
  return (
    <main id="product-content">
      {/* 1. Problem — cream, detailed cards */}
      <Problem />

      {/* 2. Technology — cream, numbered list */}
      <Technology />

      {/* 3. Competitive Edge — espresso dark contrast band */}
      <CompetitiveEdge />

      {/* 4. MVP Demo — cream, labeled placeholder */}
      <DemoPlaceholder />

      {/* 5. Terracotta CTA band — reusable component */}
      <CtaBand
        headline="See what smarter baking looks like."
        subline="Join our early-access pilot — 30-minute setup, no hardware required."
        ctaLabel={PRIMARY_CTA.label}
        ctaHref={PRIMARY_CTA.href}
        ctaId="product-cta-band-join-pilot"
      />
    </main>
  );
}
