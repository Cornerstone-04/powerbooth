import { site } from "@/lib/site";
import ContactContent from "@/components/contact/contact-content"; // <-- exact casing

export const metadata = {
  title: `Contact Us | ${site.company}`,
  description:
    "Get bulk pricing and quotes for Power Safety Boots. WhatsApp, email, or call us. Same-day Lagos delivery available.",
};

export default function ContactPage() {
  // ContactContent is a Client Component; importing it here is fine.
  return <ContactContent />;
}