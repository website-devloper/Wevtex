import type { Metadata } from "next";
import { ThankYouClient } from "../../components/wevtex/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Thanks for contacting Wevtex — we'll reply within a few hours.",
  // A confirmation page should never be indexed or rank.
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
