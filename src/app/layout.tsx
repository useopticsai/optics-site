import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Optics — Supporting bakeries, reducing food waste",
  description: "Demand forecasting that helps independent bakeries bake the right amount and waste less.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-forest font-sans">
        <Navbar />
        <div className="flex flex-col flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}