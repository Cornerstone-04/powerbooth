import { site } from "@/lib/site";
import ContactContent from "@/components/contact/contact-content"; // <-- exact casing
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/jsonLd";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = {
  title: `Contact Us | ${site.company}`,
  description:
    "Get bulk pricing and quotes for Power Safety Boots. WhatsApp, email, or call us. Same-day Lagos delivery available.",
};

export default function ContactPage() {
  const contactLd = contactPageJsonLd(site);
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: site.baseUrl },
    { name: "Contact", url: `${site.baseUrl}/contact` },
  ]);

  return (
    <>
      <JsonLd data={contactLd} />
      <JsonLd data={crumbs} />
      <ContactContent />
    </>
  );
}
