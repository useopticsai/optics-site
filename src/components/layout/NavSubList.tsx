"use client";

import Link from "next/link";
import type { NavItem } from "@/lib/constants";

// Styling for desktop dropdown menu items
const DESKTOP_LIST_CLASS = "flex flex-col gap-1";
// Styling for indented mobile drawer submenu items
const MOBILE_LIST_CLASS = "pl-4 flex flex-col gap-2 border-l-2 border-line/80 ml-1 pt-1";
// Link classes for desktop menu items
const DESKTOP_ITEM_CLASS = "block rounded-xl px-4 py-2.5 text-base font-bold text-forest hover:bg-sand/60 hover:text-charcoal transition-all duration-150";
// Link classes for mobile drawer menu items
const MOBILE_ITEM_CLASS = "block text-lg font-bold text-forest-soft hover:text-charcoal transition-colors py-0.5";

interface NavSubListProps {
  items: NonNullable<NavItem["children"]>;
  onItemClick?: () => void;
  variant: "desktop" | "mobile";
}

export default function NavSubList({ items, onItemClick, variant }: NavSubListProps) {
  const isDesktop = variant === "desktop";

  return (
    <ul
      className={isDesktop ? DESKTOP_LIST_CLASS : MOBILE_LIST_CLASS}
      role={isDesktop ? "menu" : undefined}
    >
      {items.map((child) => (
        <li key={child.href} role={isDesktop ? "none" : undefined}>
          <Link
            href={child.href}
            role={isDesktop ? "menuitem" : undefined}
            onClick={onItemClick}
            className={isDesktop ? DESKTOP_ITEM_CLASS : MOBILE_ITEM_CLASS}
          >
            {child.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
