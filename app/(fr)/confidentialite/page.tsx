import type { Metadata } from "next";
import { LegalPage } from "../../components/wevtex/LegalPage";
import { CONTACT_URL } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Wevtex collecte, utilise et conserve vos données personnelles : formulaire de contact, mesure d'audience, cookies et vos droits.",
  alternates: { canonical: "/confidentialite" },
};

/* PLACEHOLDERS TO REPLACE BEFORE LAUNCH — marked [À COMPLÉTER] in the copy:
   the legal entity name, the ICE/RC numbers and the registered address. They
   are legally required and only Wevtex can supply them. */

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Confidentialité"
      title="Vos données,"
      accent="et ce que nous en faisons."
      lede="Nous collectons le strict nécessaire pour répondre à votre demande, et rien de plus. Cette page explique quoi, pourquoi, combien de temps, et comment reprendre la main."
      updated="5 septembre 2026"
      sections={[
        {
          h: "Qui est responsable de vos données",
          body: (
            <>
              <p>
                Wevtex, agence web établie à Casablanca (Maroc), est responsable du
                traitement des données collectées via ce site. Pour toute question sur
                cette politique, écrivez-nous à{" "}
                <a href="mailto:hello@wevtex.com">hello@wevtex.com</a>.
              </p>
              <p>Raison sociale et immatriculation&nbsp;: [À COMPLÉTER].</p>
            </>
          ),
        },
        {
          h: "Ce que nous collectons",
          body: (
            <>
              <p>Deux sources, et deux seulement&nbsp;:</p>
              <p>
                <b>Le formulaire de contact.</b> Votre nom, votre adresse e-mail, votre
                numéro de téléphone, le nom de votre société, sa taille, le type de
                projet, votre budget estimé, votre délai souhaité et le texte de votre
                message. Ces champs, vous nous les donnez volontairement&nbsp;; nous ne
                déduisons rien d&apos;autre à partir d&apos;eux.
              </p>
              <p>
                <b>La mesure d&apos;audience.</b> Si vous l&apos;acceptez, Google
                Analytics enregistre des données de navigation&nbsp;: pages vues, durée
                de visite, provenance, type d&apos;appareil et pays. Tant que vous
                n&apos;avez pas accepté, aucun script de mesure n&apos;est chargé.
              </p>
            </>
          ),
        },
        {
          h: "Pourquoi nous les collectons",
          body: (
            <>
              <p>
                Les données du formulaire servent uniquement à vous répondre, à préparer
                un devis et à assurer le suivi de votre projet. Nous ne vendons ni ne
                louons vos données, et nous ne les utilisons pas pour de la publicité.
              </p>
              <p>
                Les données de mesure d&apos;audience servent à comprendre quelles pages
                sont utiles et lesquelles ne le sont pas, afin d&apos;améliorer le site.
                Elles sont agrégées&nbsp;: nous ne cherchons pas à identifier une
                personne en particulier.
              </p>
            </>
          ),
        },
        {
          h: "Qui d'autre y a accès",
          body: (
            <>
              <p>
                Trois prestataires interviennent techniquement, chacun pour une raison
                précise&nbsp;:
              </p>
              <p>
                <b>Resend</b> achemine les e-mails du formulaire vers notre boîte et vous
                envoie votre accusé de réception. <b>Google Analytics</b> mesure
                l&apos;audience, si vous l&apos;avez accepté. <b>Vercel</b> héberge le
                site et conserve des journaux techniques de courte durée.
              </p>
              <p>
                Personne d&apos;autre. Vos données ne sont ni revendues, ni transmises à
                des tiers à des fins commerciales.
              </p>
            </>
          ),
        },
        {
          h: "Combien de temps nous les gardons",
          body: (
            <>
              <p>
                Les demandes reçues via le formulaire sont conservées trois ans à compter
                de notre dernier échange, afin de pouvoir reprendre une conversation
                interrompue. Passé ce délai, elles sont supprimées.
              </p>
              <p>
                Les données de mesure d&apos;audience sont conservées quatorze mois, la
                durée par défaut de Google Analytics.
              </p>
            </>
          ),
        },
        {
          h: "Cookies",
          body: (
            <>
              <p>
                Ce site ne dépose aucun cookie publicitaire et ne pratique aucun suivi
                inter-sites.
              </p>
              <p>
                Un seul cookie technique enregistre votre choix concernant la mesure
                d&apos;audience, pour ne pas vous reposer la question à chaque visite.
                Les cookies de mesure ne sont déposés qu&apos;après votre accord. Vous
                pouvez revenir sur ce choix à tout moment en vidant les données du site
                dans votre navigateur.
              </p>
            </>
          ),
        },
        {
          h: "Vos droits",
          body: (
            <>
              <p>
                Vous pouvez demander à consulter les données que nous détenons sur vous,
                à les faire corriger, ou à les faire supprimer. Vous pouvez également
                retirer votre consentement à la mesure d&apos;audience à tout moment.
              </p>
              <p>
                Une seule adresse pour tout cela&nbsp;:{" "}
                <a href="mailto:hello@wevtex.com">hello@wevtex.com</a>. Nous répondons
                sous trente jours, en pratique bien plus vite.
              </p>
              <p>
                Au Maroc, ces traitements relèvent de la loi 09-08 relative à la
                protection des personnes physiques à l&apos;égard du traitement des
                données à caractère personnel. Si vous résidez dans l&apos;Union
                européenne, le RGPD s&apos;applique également et vous disposez en outre
                d&apos;un droit à la portabilité et d&apos;un droit d&apos;opposition.
              </p>
            </>
          ),
        },
        {
          h: "Sécurité",
          body: (
            <p>
              Le site est servi exclusivement en HTTPS. Les données du formulaire
              transitent chiffrées et ne sont pas stockées dans une base publique&nbsp;:
              elles arrivent directement dans notre boîte e-mail. Les accès à nos outils
              sont protégés par des mots de passe uniques.
            </p>
          ),
        },
        {
          h: "Modifications",
          body: (
            <p>
              Si cette politique change, la date de mise à jour en haut de page change
              aussi. Une question&nbsp;?{" "}
              <a href={CONTACT_URL}>Écrivez-nous</a>, nous répondons.
            </p>
          ),
        },
      ]}
    />
  );
}
