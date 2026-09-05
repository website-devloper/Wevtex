import type { Metadata } from "next";
import { LegalPage } from "../../components/wevtex/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation du site wevtex.com.",
  alternates: { canonical: "/mentions-legales" },
};

/* PLACEHOLDERS TO REPLACE BEFORE LAUNCH — every [À COMPLÉTER] below is a
   legally required identifier that only Wevtex can supply: the registered
   name and legal form, the RC / ICE / IF numbers, the registered address and
   the name of the publication director. */

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      eyebrow="Mentions légales"
      title="Qui édite"
      accent="ce site."
      lede="Les informations légales relatives à wevtex.com : éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation."
      updated="5 septembre 2026"
      sections={[
        {
          h: "Éditeur du site",
          body: (
            <>
              <p>
                <b>Wevtex</b> — agence web et applications.
                <br />
                Forme juridique et raison sociale&nbsp;: [À COMPLÉTER]
                <br />
                Siège social&nbsp;: [À COMPLÉTER], Casablanca, Maroc
                <br />
                Registre du commerce (RC)&nbsp;: [À COMPLÉTER]
                <br />
                Identifiant commun de l&apos;entreprise (ICE)&nbsp;: [À COMPLÉTER]
                <br />
                Identifiant fiscal (IF)&nbsp;: [À COMPLÉTER]
              </p>
              <p>
                Téléphone&nbsp;: <a href="tel:+212687633774">+212 687 633 774</a>
                <br />
                E-mail&nbsp;: <a href="mailto:hello@wevtex.com">hello@wevtex.com</a>
              </p>
              <p>Directeur de la publication&nbsp;: [À COMPLÉTER]</p>
            </>
          ),
        },
        {
          h: "Hébergement",
          body: (
            <p>
              Le site est hébergé par <b>Vercel Inc.</b>, 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis —{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener nofollow">
                vercel.com
              </a>
              . Le nom de domaine est enregistré auprès de <b>Spaceship</b>.
            </p>
          ),
        },
        {
          h: "Propriété intellectuelle",
          body: (
            <>
              <p>
                La structure du site, ses textes, son identité visuelle et ses
                illustrations sont la propriété de Wevtex, sauf mention contraire. Toute
                reproduction ou représentation, totale ou partielle, sans autorisation
                écrite préalable est interdite.
              </p>
              <p>
                Les marques et logos des clients présentés sur ce site restent la
                propriété de leurs détenteurs respectifs et sont affichés avec leur
                accord, à titre de référence.
              </p>
            </>
          ),
        },
        {
          h: "Travaux réalisés pour nos clients",
          body: (
            <p>
              À la livraison d&apos;un projet, le client devient propriétaire du site
              produit, de son nom de domaine et de son hébergement. Wevtex conserve le
              droit de citer le projet et d&apos;en présenter des visuels à titre de
              référence, sauf demande contraire du client.
            </p>
          ),
        },
        {
          h: "Responsabilité",
          body: (
            <>
              <p>
                Les informations publiées sur ce site sont fournies à titre indicatif.
                Les tarifs et délais annoncés sont des ordres de grandeur&nbsp;: seul un
                devis signé fait foi.
              </p>
              <p>
                Wevtex ne saurait être tenue responsable du contenu des sites tiers
                accessibles depuis des liens présents sur ce site.
              </p>
            </>
          ),
        },
        {
          h: "Données personnelles",
          body: (
            <p>
              Le traitement des données collectées via ce site est détaillé dans notre{" "}
              <a href="/confidentialite">politique de confidentialité</a>.
            </p>
          ),
        },
        {
          h: "Droit applicable",
          body: (
            <p>
              Le présent site est soumis au droit marocain. En cas de litige, et à défaut
              de résolution amiable, compétence est attribuée aux tribunaux de
              Casablanca.
            </p>
          ),
        },
      ]}
    />
  );
}
