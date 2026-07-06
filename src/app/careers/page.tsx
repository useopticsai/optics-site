import type { Metadata } from "next";
import CareersSection from "@/components/sections/CareersSection";

export const metadata: Metadata = {
  title: "Careers — Optics",
  description:
    "Work on a problem that actually matters: helping independent bakeries eliminate food waste with AI demand forecasting.",
};

export default function CareersPage() {
  return (
    <main id="careers-content">
      <CareersSection />
    </main>
  );
}
