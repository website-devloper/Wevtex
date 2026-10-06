/**
 * The dashboard has its own root layout: the site's two layouts live under the
 * (fr) and (en) route groups and inject the header, the fonts and the site
 * chrome, none of which belong around a CMS.
 */
export const metadata = {
  title: "Wevtex — contenu",
  // The dashboard must never be indexed.
  robots: { index: false, follow: false },
};

export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      {/* Browser extensions add attributes to <body> before React hydrates —
          cz-shortcut-listen from ColorZilla, and others like it — which React
          then reports as a mismatch. The site's own two layouts suppress it the
          same way. */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
