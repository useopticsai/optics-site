"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS, PRIMARY_CTA, LOGO } from "@/lib/constants";
import NavDropdown from "@/components/layout/NavDropdown";
import NavSubList from "@/components/layout/NavSubList";

// Sticky header z-index to ensure it sits above all page content and animations
const NAVBAR_Z_INDEX_CLASS = "z-[100]";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`sticky top-0 ${NAVBAR_Z_INDEX_CLASS} bg-nav/95 backdrop-blur-md border-b border-line`}>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2"
        aria-label="Main navigation"
      >
        {/* Logo — left */}
        <Link href="/" className="flex-shrink-0" aria-label="Optics home">
          <Image
            src={LOGO.primary}
            alt={LOGO.altText}
            width={892}
            height={348}
            priority
            className="h-20 w-auto object-contain" /* edit this to change size of logo */
          />
        </Link>

        {/* Centred links — desktop */}
        <ul className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavDropdown item={link} />
            </li>
          ))}
        </ul>

        {/* Right side — CTA + hamburger */}
        <div className="flex items-center gap-3">
          {/* Primary CTA — desktop */}
          <Link
            href={PRIMARY_CTA.href}
            id="nav-join-pilot"
            className="hidden md:inline-flex items-center rounded-full bg-charcoal px-8 py-3 text-xl font-bold text-cream shadow-sm hover:opacity-90 transition-opacity duration-200"
          >
            {PRIMARY_CTA.label}
          </Link>

          {/* Hamburger — mobile */}
          <button
            type="button"
            id="nav-mobile-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-sand transition-colors"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-5 bg-forest origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block h-0.5 w-5 bg-forest"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-5 bg-forest origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-cream border-t border-line"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="space-y-1.5">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-2xl font-extrabold text-forest hover:text-charcoal transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && link.children.length > 0 && (
                    <NavSubList
                      items={link.children}
                      onItemClick={() => setOpen(false)}
                      variant="mobile"
                    />
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={PRIMARY_CTA.href}
                  onClick={() => setOpen(false)}
                  id="nav-mobile-join-pilot"
                  className="inline-flex items-center rounded-full bg-charcoal px-6 py-3 text-lg font-bold text-cream shadow-sm"
                >
                  {PRIMARY_CTA.label}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
