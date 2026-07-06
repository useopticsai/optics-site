import type { Metadata } from "next";
import PrivacySection from "@/components/sections/PrivacySection";

export const metadata: Metadata = {
  title: "Privacy — Optics",
  description:
    "How we collect, use, and protect your data during the Optics early-access pilot program.",
};

export default function PrivacyPage() {
  return (
    <main id="privacy-content">
      <PrivacySection />
    </main>
  );
}
