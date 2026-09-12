import type { Metadata, Viewport } from "next";
import { fontVars } from "@/lib/fonts";
import { NotFoundView } from "@/components/wevtex/NotFoundView";

/**
 * The 404 for an address that matches no route at all (next.config.mjs,
 * experimental.globalNotFound). French and English each have their own root
 * layout, so there is no single layout left to wrap such a page; this one
 * renders the document itself. A missing page inside /en still gets the
 * English 404, from app/(en)/not-found.tsx.
 */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Page introuvable | Wevtex",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={fontVars}>
      <body id="scrool" suppressHydrationWarning>
        <a href="#main" className="skip-link">Aller au contenu</a>
        <NotFoundView />
      </body>
    </html>
  );
}
