import { ContactView } from "@/components/wevtex/ContactView";
import { CONTACT_FAQS } from "@/lib/contact-content";

/* Metadata and the FAQPage schema live in ./layout.tsx. */
export default function ContactPage() {
  return <ContactView faqs={CONTACT_FAQS} />;
}
