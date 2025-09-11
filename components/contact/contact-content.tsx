"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
import { contactMethods } from "@/app/data/contact-methods";
import { businessInfo } from "@/app/data/business-info";
import { faqs } from "@/app/data/faqs";
import { site } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent" />

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="flex justify-center items-center gap-2 mb-4">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 inline-flex items-center">
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
      </motion.div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {contactMethods.map((method, idx) => {
          const Icon = method.icon;
          return (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <Card
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  method.primary
                    ? "ring-2 ring-green-500 shadow-lg"
                    : "shadow-md"
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
                  {/* fix small typo: brand-coal */}
                  <h3 className="text-xl font-bold text-brand-coal mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-sm text-gray-500 mb-6">
                    {method.highlight}
                  </p>
                  <Button
                    asChild
                    className={`w-full rounded-full font-semibold ${
                      method.primary
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-brand-gold hover:bg-brand-gold/90 text-white"
                    }`}
                  >
                    <Link
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={method.action}
                    >
                      {method.action}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Business Information */}
      <section className="mb-16">
        <motion.h2
          className="text-3xl font-bold text-brand-coal mb-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Business Information
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch auto-rows-fr">
          {businessInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section>
        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-brand-coal mb-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={`item-${index + 1}`}
              value={`item-${index + 1}`}
            >
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

      {/* Floating WhatsApp (mobile-first) */}
      <div className="fixed bottom-5 right-5 md:hidden z-40">
        <Button
          asChild
          size="lg"
          className="rounded-full shadow-2xl bg-green-600 hover:bg-green-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
        >
          <Link
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp us
          </Link>
        </Button>
      </div>
    </div>
  );
}
