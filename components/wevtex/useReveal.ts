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
          if (e.isIntersecting) {
            e.target.classList.add("in");
            const cta = e.target.closest(".cta");
            if (cta) cta.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-words").forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);
}
