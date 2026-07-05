"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Default delay in milliseconds before closing dropdown on mouse leave
const DEFAULT_CLOSE_DELAY_MS = 150;

/**
 * Hook to manage hover intent with a close delay to prevent menu flickering.
 * Serves as the single source of truth for dropdown open state across mouse, click, and keyboard events.
 */
export function useHoverIntent(closeDelayMs = DEFAULT_CLOSE_DELAY_MS) {
  const [isOpen, setIsOpenState] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const setIsOpen = useCallback((value: boolean | ((prev: boolean) => boolean)) => {
    clearCloseTimeout();
    setIsOpenState(value);
  }, [clearCloseTimeout]);

  const onMouseEnter = useCallback(() => {
    clearCloseTimeout();
    setIsOpenState(true);
  }, [clearCloseTimeout]);

  const onMouseLeave = useCallback(() => {
    clearCloseTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsOpenState(false);
    }, closeDelayMs);
  }, [clearCloseTimeout, closeDelayMs]);

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, [clearCloseTimeout]);

  return {
    isOpen,
    setIsOpen,
    onMouseEnter,
    onMouseLeave,
  };
}
