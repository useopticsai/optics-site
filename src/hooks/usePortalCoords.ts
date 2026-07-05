"use client";

import { useState, useCallback, useEffect, type RefObject } from "react";

/**
 * Calculates and synchronizes viewport coordinates for React portals.
 * Updates dynamically on window resize or scroll when active.
 */
export function usePortalCoords(ref: RefObject<HTMLElement | null>, isOpen: boolean) {
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  const updateCoords = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom,
        left: rect.left + rect.width / 2,
      });
    }
  }, [ref]);

  useEffect(() => {
    if (isOpen) {
      updateCoords();
      window.addEventListener("resize", updateCoords);
      window.addEventListener("scroll", updateCoords, { passive: true });
      return () => {
        window.removeEventListener("resize", updateCoords);
        window.removeEventListener("scroll", updateCoords);
      };
    }
  }, [isOpen, updateCoords]);

  return coords;
}
