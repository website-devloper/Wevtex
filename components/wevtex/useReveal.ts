"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal — adds `.in` to every `.reveal` / `.reveal-words` element when
 * it enters the viewport. Ports the IntersectionObserver from the design
 * prototype's inline <script>. Call once per page after mount.
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;

          // `threshold` is a fraction of the TARGET's own area, so an element
          // taller than the viewport can never reach 0.12 — it would stay at
          // opacity 0 forever. For those, any intersection counts.
          const rootH = e.rootBounds?.height ?? window.innerHeight;
          const tallerThanViewport = e.boundingClientRect.height > rootH * 0.8;
          if (e.intersectionRatio < 0.12 && !tallerThanViewport) return;

          e.target.classList.add("in");
          const cta = e.target.closest(".cta");
          if (cta) cta.classList.add("in");
          io.unobserve(e.target);
        });
      },
      { threshold: [0, 0.12], rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-words, .srt-scroll").forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);
}
