"use client";
import * as React from "react";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Scroll + hover reveal utilities.
 */

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return { ref, revealed };
}

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, revealed } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(14px)",
        transition: revealed ? "none" : "opacity 600ms ease-out, transform 600ms ease-out",
      }}
    >
      {children}
    </div>
  );
}
