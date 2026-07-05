"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import type { NavItem } from "@/lib/constants";
import { useHoverIntent } from "@/hooks/useHoverIntent";
import { usePortalCoords } from "@/hooks/usePortalCoords";
import NavSubList from "@/components/layout/NavSubList";

// Delay in milliseconds before closing the dropdown when the mouse leaves the hover area
const CLOSE_DELAY_MS = 150;
// Vertical offset class (padding-top) creating a contiguous hit area between trigger and menu panel
const PANEL_OFFSET_CLASS = "pt-2";
// Z-index class ensuring the open dropdown panel renders cleanly above all surrounding elements
const PANEL_Z_INDEX_CLASS = "z-[9999]";

interface NavDropdownProps {
  item: NavItem;
}

export default function NavDropdown({ item }: NavDropdownProps) {
  const { isOpen, setIsOpen, onMouseEnter, onMouseLeave } = useHoverIntent(CLOSE_DELAY_MS);
  const containerRef = useRef<HTMLDivElement>(null);
  const coords = usePortalCoords(containerRef, isOpen);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close when clicking outside the dropdown container or portal panel
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      if (containerRef.current && containerRef.current.contains(target)) return;
      const portalEl = document.getElementById(`nav-portal-${item.label}`);
      if (portalEl && portalEl.contains(target)) return;
      setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, setIsOpen, item.label]);

  // Handle keyboard navigation for accessibility
  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      setIsOpen(false);
    } else if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      if (!isOpen) {
        event.preventDefault();
        setIsOpen(true);
      }
    }
  }

  // If no children, render simple link
  if (!item.children || item.children.length === 0) {
    return (
      <Link
        href={item.href}
        className="text-3xl font-extrabold tracking-tight text-forest hover:text-charcoal hover:scale-105 transition-all duration-200 inline-block py-1"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center py-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-1.5 group">
        <Link
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="text-3xl font-extrabold tracking-tight text-forest group-hover:text-charcoal transition-colors duration-200 py-1"
        >
          {item.label}
        </Link>
        
        <button
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={`Toggle ${item.label} submenu`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="p-1 rounded-lg text-forest hover:text-charcoal hover:bg-sand/60 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-forest/30"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && coords && (
            <motion.div
              id={`nav-portal-${item.label}`}
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.96 }}
              transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed",
                top: coords.top,
                left: coords.left,
              }}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={`-translate-x-1/2 ${PANEL_OFFSET_CLASS} w-60 ${PANEL_Z_INDEX_CLASS}`}
            >
              <div className="rounded-2xl border border-line bg-cream p-2 shadow-[0_10px_30px_rgba(42,42,40,0.08)] backdrop-blur-md">
                <NavSubList
                  items={item.children}
                  onItemClick={() => setIsOpen(false)}
                  variant="desktop"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
