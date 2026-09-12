import type { Metadata } from "next";
import { LegalPage } from "@/components/wevtex/LegalPage";
import { languageAlternates } from "@/lib/i18n-paths";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Wevtex collects, uses and keeps your personal data: contact form, analytics, cookies and your rights.",
  alternates: { canonical: "/en/privacy-policy", languages: languageAlternates("/confidentialite") },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Your data,"
      accent="and what we do with it."
      lede="We collect only what we need to answer your request, and nothing more. This page explains what, why, for how long, and how to take back control."
      updated="5 September 2026"
      sections={[
        {
          h: "Who is responsible for your data",
          body: (
            <>
              <p>
                Wevtex, a web agency established in Casablanca (Morocco), is responsible for processing the data collected
                through this website. For any question about this policy, write to us at{" "}
                <a href="mailto:hello@wevtex.com">hello@wevtex.com</a>.
              </p>
              <p>Company name and registration: [TO BE COMPLETED].</p>
            </>
          ),
        },
        {
          h: "What we collect",
          body: (
            <>
              <p>Two sources, and only two:</p>
              <p>
                <b>The contact form.</b> Your name, email address, phone number, company name and size, project type,
                estimated budget, preferred timeline and the text of your message. You give us these fields voluntarily; we
                infer nothing else from them.
              </p>
              <p>
                <b>Analytics.</b> If you accept it, Google Analytics records browsing data: pages viewed, visit duration,
                source, device type and country. Until you accept, no measurement script is loaded.
              </p>
            </>
          ),
        },
        {
          h: "Why we collect it",
          body: (
            <>
              <p>
                Form data is used only to answer you, prepare a quote and follow up on your project. We don't sell or rent
                your data, and we don't use it for advertising.
              </p>
              <p>
                Analytics data helps us understand which pages are useful and which aren't, in order to improve the website.
                It is aggregated: we don't try to identify any particular person.
              </p>
            </>
          ),
        },
        {
          h: "Who else has access",
          body: (
            <>
              <p>Three providers are involved technically, each for a specific reason:</p>
              <p>
                <b>Resend</b> delivers the form emails to our inbox and sends you your confirmation. <b>Google Analytics</b>{" "}
                measures visits, if you have accepted it. <b>Vercel</b> hosts the website and keeps short-lived technical logs.
              </p>
              <p>Nobody else. Your data is neither resold nor passed on to third parties for commercial purposes.</p>
            </>
          ),
        },
        {
          h: "How long we keep it",
          body: (
            <>
              <p>
                Requests received through the form are kept for three years from our last exchange, so that an interrupted
                conversation can be picked up again. After that, they are deleted.
              </p>
              <p>Analytics data is kept for fourteen months, the Google Analytics default.</p>
            </>
          ),
        },
        {
          h: "Cookies",
          body: (
            <>
              <p>This website sets no advertising cookies and does no cross-site tracking.</p>
              <p>
                A single technical entry stores your choice about analytics, so we don't ask you again on every visit.
                Measurement cookies are set only after your consent. You can change this choice at any time by clearing the
                website's data in your browser.
              </p>
            </>
          ),
        },
        {
          h: "Your rights",
          body: (
            <>
              <p>
                You can ask to see the data we hold about you, to have it corrected, or to have it deleted. You can also
                withdraw your consent to analytics at any time.
              </p>
              <p>
                One address for all of this: <a href="mailto:hello@wevtex.com">hello@wevtex.com</a>. We answer within
                thirty days, in practice much faster.
              </p>
              <p>
                In Morocco, this processing falls under Law 09-08 on the protection of individuals with regard to the
                processing of personal data. If you live in the European Union, the GDPR also applies and you have, in
                addition, a right to data portability and a right to object.
              </p>
            </>
          ),
        },
        {
          h: "Security",
          body: (
            <p>
              The website is served exclusively over HTTPS. Form data travels encrypted and isn't stored in a public
              database: it arrives directly in our email inbox. Access to our tools is protected by unique passwords.
            </p>
          ),
        },
        {
          h: "Changes",
          body: (
            <p>
              If this policy changes, the update date at the top of the page changes too. A question?{" "}
              <a href="/en/contact">Write to us</a>, we answer.
            </p>
          ),
        },
      ]}
    />
  );
}
