import type { Metadata } from "next";
import PilotSection from "@/components/sections/PilotSection";

export const metadata: Metadata = {
  title: "Pilot Program — Optics",
  description:
    "We are finalizing version 1 of Optics and enrolling a small group of independent bakeries to run their mornings on AI demand forecasting.",
};

export default function PilotPage() {
  return (
    <main id="pilot-content">
      <PilotSection />
    </main>
  );
}
