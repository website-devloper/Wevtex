"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR =
  "a, button, [data-magnetic], input[type='submit'], input[type='button']";

type Variant = "default" | "hover";

export function MagneticCursor() {
  const [mounted, setMounted] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isCoarse || prefersReducedMotion) return;

    // Defer mount until after first paint to avoid blocking initial render.
    const hasIdle = typeof window.requestIdleCallback === "function";
    const idleId = hasIdle
      ? window.requestIdleCallback(() => setMounted(true))
      : window.setTimeout(() => setMounted(true), 200);

    return () => {
      if (hasIdle) {
        window.cancelIdleCallback?.(idleId as number);
      } else {
        window.clearTimeout(idleId as number);
      }
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.add("aura-cursor-active");

    let raf = 0;
    let pendingX = 0;
    let pendingY = 0;
    let dirty = false;
    const flush = () => {
      if (dirty) {
        cursorX.set(pendingX);
        cursorY.set(pendingY);
        dirty = false;
      }
      raf = 0;
    };

    const onMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      dirty = true;
      if (!raf) raf = requestAnimationFrame(flush);

      // Event delegation: check whether the element under the cursor is interactive
      const target = e.target as Element | null;
      const isInteractive = target?.closest?.(INTERACTIVE_SELECTOR) != null;
      setVariant((prev) => {
        const next: Variant = isInteractive ? "hover" : "default";
        return prev === next ? prev : next;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("aura-cursor-active");
    };
  }, [mounted, cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <style jsx global>{`
        html.aura-cursor-active,
        html.aura-cursor-active body {
          cursor: none;
        }
        html.aura-cursor-active a,
        html.aura-cursor-active button,
        html.aura-cursor-active input,
        html.aura-cursor-active textarea,
        html.aura-cursor-active select,
        html.aura-cursor-active [data-magnetic],
        html.aura-cursor-active [role="button"] {
          cursor: none;
        }
      `}</style>
      <motion.div
        aria-hidden
        className="aura-cursor"
        style={{
          x,
          y,
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "9999px",
          willChange: "transform, width, height",
        }}
        animate={{
          width: variant === "hover" ? 48 : 8,
          height: variant === "hover" ? 48 : 8,
          backgroundColor:
            variant === "hover" ? "rgba(255, 90, 31, 0)" : "#FF5A1F",
          borderWidth: variant === "hover" ? 1.5 : 0,
          borderColor: "#FF5A1F",
          borderStyle: "solid",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200, mass: 0.5 }}
      />
    </>
  );
}
