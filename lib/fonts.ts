import { Onest, Space_Mono } from "next/font/google";

/* Self-hosted via next/font (no render-blocking Google Fonts request, no
   layout shift), shared by both root layouts and the global 404.
   Design system: Onest for display + body, Space Mono for eyebrows / labels / data. */
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-face",
  display: "swap",
});

export const fontVars = `${onest.variable} ${spaceMono.variable}`;
