import ValuesShowcase from "@/components/sections/ValuesShowcase";

export default function ValuesSection() {
  return (
    <section
      id="values"
      aria-label="Values"
      className="bg-sand/80 border-b border-line px-6 py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <ValuesShowcase />
      </div>
    </section>
  );
}

