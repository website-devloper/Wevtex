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
      <body>{children}</body>
    </html>
  );
}
