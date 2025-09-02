import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Phone,
  Users,
  Shield,
  Truck,
  CheckCircle,
} from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { site } from "@/lib/site";

export const metadata = {
  title: `Contact Us - Steel Toe Safety Boots Nigeria | ${site.company}`,
  description:
    "Get bulk pricing and quotes for Power Safety Boots. WhatsApp, email, or call us. Same-day Lagos delivery available.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: "WhatsApp (Fastest)",
      description: "Instant quotes & bulk pricing",
      action: "Chat Now",
      href: `https://wa.me/${site.whatsapp}`,
      highlight: "Usually responds in 5 minutes",
      primary: true,
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Support",
      description: "Detailed inquiries & documentation",
      action: "Send Email",
      href: `mailto:${site.email}`,
      highlight: "Response within 2-4 hours",
    },
    {
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      action: "Call Now",
      href: `tel:${site.phone}`,
      highlight: "Mon-Fri: 8AM-6PM WAT",
    },
  ];

  const businessInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-brand-gold" />,
      label: "Location",
      value: site.address,
      subtext: "Serving all of Nigeria",
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-gold" />,
      label: "Business Hours",
      value: "Mon-Fri: 8AM-6PM",
      subtext: "Saturday: 9AM-3PM",
    },
    {
      icon: <Truck className="w-5 h-5 text-brand-gold" />,
      label: "Delivery",
      value: "Same-day Lagos",
      subtext: "Nationwide 2-3 days",
    },
    {
      icon: <Users className="w-5 h-5 text-brand-gold" />,
      label: "Bulk Orders",
      value: "10+ pairs minimum",
      subtext: "Corporate accounts available",
    },
  ];

  const faqs = [
    {
      question: "What's your minimum order quantity?",
      answer:
        "We welcome orders from 1 pair for individual buyers to bulk orders of 500+ pairs for corporations. Volume discounts start at 10 pairs.",
    },
    {
      question: "Do you have all sizes in stock?",
      answer:
        "We maintain stock in sizes 39-46. For orders outside this range or bulk quantities, please allow 3-5 days for procurement.",
    },
    {
      question: "What certifications do your boots have?",
      answer:
        "Our boots are SONCAP certified and meet SON (Standards Organisation of Nigeria) requirements. They comply with international safety standards EN ISO 20345:2022.",
    },
    {
      question: "How long do these boots typically last?",
      answer:
        "With proper use, our boots last 8-12 months in heavy industrial environments. Many customers report using them for over a year in office/light industrial settings.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            <CheckCircle className="w-4 h-4 mr-2" />
            We're Online Now
          </Badge>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-coal mb-6">
          Get Your Safety Boot Quote
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to protect your team? Get instant pricing, bulk discounts, and delivery timelines.
          Our safety experts are standing by to help.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {contactMethods.map((method) => (
          <Card
            key={method.title}
            className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              method.primary ? "ring-2 ring-green-500 shadow-lg" : "shadow-md"
            }`}
          >
            {method.primary && (
              <div className="absolute top-0 right-0">
                <Badge className="bg-green-500 text-white rounded-none rounded-bl-lg px-3 py-1">
                  Recommended
                </Badge>
              </div>
            )}
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">{method.icon}</div>
              <h3 className="text-xl font-bold text-coal mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <p className="text-sm text-gray-500 mb-6">{method.highlight}</p>
              <Button
                asChild
                className={`w-full rounded-full font-semibold ${
                  method.primary
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-brand-gold hover:bg-brand-gold/90 text-black"
                }`}
              >
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  {method.action}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Business Information */}
        <div>
          <h2 className="text-3xl font-bold text-coal mb-6">Business Information</h2>
          <div className="grid gap-4">
            {businessInfo.map((info) => (
              <Card key={info.label} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-coal mb-1">{info.label}</h3>
                      <p className="text-gray-700 mb-1">{info.value}</p>
                      <p className="text-sm text-gray-500">{info.subtext}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQs (Accordion) */}
        <div>
          <h3 className="text-2xl font-bold text-coal mb-6">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      
    </div>
  );
}
