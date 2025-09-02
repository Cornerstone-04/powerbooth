import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { FaWhatsapp } from "react-icons/fa6";

export const contactMethods = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp (Fastest)",
    description: "Instant quotes & bulk pricing",
    action: "Chat Now",
    href: `https://wa.me/${site.whatsapp}`,
    highlight: "Usually responds in 5 minutes",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Detailed inquiries & documentation",
    action: "Send Email",
    href: `mailto:${site.email}`,
    highlight: "Response within 2-4 hours",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team",
    action: "Call Now",
    href: `tel:${site.phone}`,
    highlight: "Mon-Fri: 8AM-6PM WAT",
  },
];
