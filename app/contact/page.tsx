import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";
import { contactMethods } from "../data/contact-methods";
import { faqs } from "../data/faqs";
import { businessInfo } from "../data/business-info";

export const metadata = {
  title: `Contact Us - Steel Toe Safety Boots Nigeria | ${site.company}`,
  description:
    "Get bulk pricing and quotes for Power Safety Boots. WhatsApp, email, or call us. Same-day Lagos delivery available.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            <CheckCircle className="w-4 h-4 mr-2" />
            We&apos;re Online Now
          </Badge>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-brand-coal mb-6">
          Get Your Safety Boot Quote
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to protect your team? Get instant pricing, bulk discounts, and
          delivery timelines. Our safety experts are standing by to help.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
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
                <div className="mb-6 flex justify-center">
                  <Icon
                    className={
                      method.primary
                        ? "size-8 text-green-500"
                        : "size-8 text-brand-gold"
                    }
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-oal mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-sm text-gray-500 mb-6">{method.highlight}</p>
                <Button
                  asChild
                  className={`w-full rounded-full font-semibold ${
                    method.primary
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-brand-gold hover:bg-brand-gold/90 text-white"
                  }`}
                >
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-brand-coal mb-6">
          Business Information
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessInfo.map((info) => {
            const Icon = info.icon;
            return (
              <Card
                key={info.label}
                className="shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <Icon className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-coal mb-1">
                      {info.label}
                    </h3>
                    <p className="text-gray-700 mb-1">{info.value}</p>
                    {info.subtext && (
                      <p className="text-sm text-gray-500">{info.subtext}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-2xl lg:text-3xl font-bold text-brand-coal mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left text-base lg:text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
