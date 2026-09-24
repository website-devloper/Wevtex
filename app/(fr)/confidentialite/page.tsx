import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n-paths";
import { LegalPage } from "@/components/wevtex/LegalPage";
import { CONTACT_URL } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Wevtex collecte, utilise et conserve vos données personnelles : formulaire de contact, mesure d'audience, cookies et vos droits.",
  alternates: { canonical: "/confidentialite", languages: languageAlternates("/confidentialite") },
};

/* Content set by the owner (2026-09-12), from the reference policy they chose,
   with Wevtex's name and e-mail, the newsletter purpose removed (there is no
   newsletter) and the targeted-advertising clause removed (the consent bar
   promises none). */

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Politique de confidentialité"
      title="Politique de"
      accent="confidentialité."
      lede="Document légal · Wevtex"
      updated="12 septembre 2026"
      cta={{ label: "Demander un devis gratuit", href: CONTACT_URL }}
      sections={[
        {
          h: "Collecte de données personnelles",
          body: (
            <p>
              Nous collectons des données personnelles lorsque vous utilisez notre site
              web. Les données que nous collectons peuvent inclure votre nom, votre
              adresse e-mail, votre numéro de téléphone.
            </p>
          ),
        },
        {
          h: "Utilisation des données personnelles",
          body: (
            <>
              <p>Nous utilisons les données personnelles que nous collectons pour&nbsp;:</p>
              <ul>
                <li>Répondre à vos demandes et planifier des appels stratégiques</li>
                <li>Améliorer le site et mesurer l&apos;audience</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </>
          ),
        },
        {
          h: "Protection des données personnelles",
          body: (
            <p>
              Nous prenons toutes les mesures nécessaires pour protéger les données
              personnelles que nous collectons contre toute perte, tout abus, tout accès
              non autorisé, toute divulgation ou toute altération. Nous nous engageons à
              ne pas vendre ou louer vos données personnelles à des tiers sans votre
              consentement.
            </p>
          ),
        },
        {
          h: "Partage des données personnelles",
          body: (
            <p>
              Nous pouvons partager vos données personnelles avec des tiers si nécessaire
              pour répondre à une demande légale ou pour protéger nos intérêts légitimes.
              Nous pouvons également partager vos données personnelles avec des
              prestataires de services tiers qui nous aident à fournir des services à nos
              utilisateurs.
            </p>
          ),
        },
        {
          h: "Cookies et technologies similaires",
          body: (
            <p>
              Nous utilisons des cookies et d&apos;autres technologies similaires pour
              collecter des informations sur l&apos;utilisation de notre site web. Ces
              technologies nous permettent de personnaliser votre expérience utilisateur.
            </p>
          ),
        },
        {
          h: "Vos droits",
          body: (
            <p>
              Vous avez le droit de supprimer vos données personnelles de notre base de
              données en envoyant un email à{" "}
              <a href="mailto:hello@wevtex.com">hello@wevtex.com</a>.
            </p>
          ),
        },
        {
          h: "Modifications de la politique de confidentialité",
          body: (
            <>
              <p>
                Nous nous réservons le droit de modifier cette politique de
                confidentialité à tout moment. Tous les changements seront publiés sur
                cette page.
              </p>
              <p>
                Si vous avez des questions ou des commentaires sur notre politique de
                confidentialité, n&apos;hésitez pas à nous contacter en utilisant les
                coordonnées fournies sur notre site web.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
