import type { Metadata } from "next";
import { ThankYouClient } from "../../components/wevtex/ThankYouClient";

export const metadata: Metadata = {
  title: "Merci",
  description: "Merci d'avoir contacté Wevtex — nous vous répondons sous quelques heures.",
  // A confirmation page should never be indexed or rank.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
