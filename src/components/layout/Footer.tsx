import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, PRIMARY_CTA, CONTACT, LOGO } from "@/lib/constants";

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: NAV_LINKS.filter((l) => l.href === "/product"),
  },
  {
    heading: "Company",
    links: NAV_LINKS.filter((l) =>
      ["/about", "/team", "/careers"].includes(l.href)
    ),
  },
  {
    heading: "Legal",
    links: [{ label: "Privacy", href: "/privacy" }],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top row: logo + columns + CTA */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand block */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 flex flex-col gap-4">
            <Link href="/" aria-label="Optics home" className="inline-block">
              <Image
                src={LOGO.primary}
                alt="Optics logo"
                width={110}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-forest-soft max-w-xs">
              AI demand forecasting designed to help independent bakeries bake
              the right amount and waste less.
            </p>
            {/* Contact links */}
            <div className="flex flex-col gap-1 text-sm">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-forest-soft hover:text-forest transition-colors"
                id="footer-email"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-soft hover:text-forest transition-colors"
                id="footer-linkedin"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-forest/60">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-forest-soft hover:text-forest transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row: copyright + CTA */}
        <div className="mt-12 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-forest-soft">
            © {year} Optics. All rights reserved.
          </p>
          <Link
            href={PRIMARY_CTA.href}
            id="footer-join-waitlist"
            className="inline-flex items-center rounded-full bg-terracotta px-5 py-2 text-sm font-bold text-cream shadow-sm hover:opacity-90 transition-opacity duration-200"
          >
            {PRIMARY_CTA.label}
          </Link>
        </div>
      </div>
    </footer>
  );
}
