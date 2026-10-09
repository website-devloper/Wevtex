import type { Metadata } from "next";
import { LegalPage } from "@/components/wevtex/LegalPage";
import { languageAlternates } from "@/lib/i18n-paths";
import { EMAIL, EMAIL_URL } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Publisher, host, intellectual property and terms of use of the wevtex.com website.",
  alternates: { canonical: "/en/legal-notice", languages: languageAlternates("/mentions-legales") },
};

/* PLACEHOLDERS TO REPLACE BEFORE LAUNCH — the same identifiers as the French
   page ([À COMPLÉTER] there, [TO BE COMPLETED] here): registered name and legal
   form, RC / ICE / IF numbers, registered address, publication director. */

export default function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Legal notice"
      title="Who publishes"
      accent="this website."
      lede="The legal information about wevtex.com: publisher, host, intellectual property and terms of use."
      updated="5 September 2026"
      sections={[
        {
          h: "Website publisher",
          body: (
            <>
              <p>
                <b>Wevtex</b>, web and apps agency.
                <br />
                Legal form and company name: [TO BE COMPLETED]
                <br />
                Registered office: [TO BE COMPLETED], Casablanca, Morocco
                <br />
                Trade register (RC): [TO BE COMPLETED]
                <br />
                Common company identifier (ICE): [TO BE COMPLETED]
                <br />
                Tax identifier (IF): [TO BE COMPLETED]
              </p>
              <p>
                Phone: <a href="tel:+212783180806">+212 783 180 806</a>
                <br />
                Email: <a href={EMAIL_URL}>{EMAIL}</a>
              </p>
              <p>Publication director: [TO BE COMPLETED]</p>
            </>
          ),
        },
        {
          h: "Hosting",
          body: (
            <p>
              The website is hosted by <b>Vercel Inc.</b>, 440 N Barranca Ave #4133, Covina, CA 91723, United States,{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener nofollow">
                vercel.com
              </a>
              . The domain name is registered with <b>Spaceship</b>.
            </p>
          ),
        },
        {
          h: "Intellectual property",
          body: (
            <>
              <p>
                The structure of the website, its text, its visual identity and its illustrations are the property of
                Wevtex, unless stated otherwise. Any reproduction or representation, in whole or in part, without prior
                written permission is prohibited.
              </p>
              <p>
                The brands and logos of the clients shown on this website remain the property of their respective owners
                and are displayed with their consent, as references.
              </p>
            </>
          ),
        },
        {
          h: "Work carried out for our clients",
          body: (
            <p>
              On delivery of a project, the client becomes the owner of the website produced, its domain name and its
              hosting. Wevtex keeps the right to mention the project and show visuals of it as a reference, unless the
              client asks otherwise.
            </p>
          ),
        },
        {
          h: "Liability",
          body: (
            <>
              <p>
                The information published on this website is provided for guidance. Prices and timelines are indications:
                only a signed quote is binding.
              </p>
              <p>Wevtex cannot be held responsible for the content of third-party websites reached through links on this website.</p>
            </>
          ),
        },
        {
          h: "Personal data",
          body: (
            <p>
              The processing of data collected through this website is detailed in our{" "}
              <a href="/en/privacy-policy">privacy policy</a>.
            </p>
          ),
        },
        {
          h: "Governing law",
          body: (
            <p>
              This website is governed by Moroccan law. In the event of a dispute, and failing an amicable resolution, the
              courts of Casablanca have jurisdiction.
            </p>
          ),
        },
        {
          h: "Language",
          body: (
            <p>
              This English version is provided for convenience. In the event of a discrepancy, the{" "}
              <a href="/mentions-legales">French version</a> prevails.
            </p>
          ),
        },
      ]}
    />
  );
}
