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
import { FaWhatsapp } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* subtle background accent (dark-aware) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-gold/6 to-transparent dark:via-brand-gold/4" />

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* <div className="flex justify-center items-center gap-2 mb-4">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300 px-4 py-2 inline-flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" />
            We&apos;re Online Now
          </Badge>
        </div> */}
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
          Get Your Safety Boot Quote
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className={[
                  "relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
                  "bg-card border border-border",
                  method.primary
                    ? "ring-2 ring-green-500/80 shadow-lg"
                    : "shadow-md",
                ].join(" ")}
              >
                {method.primary && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-green-600 text-white dark:bg-green-500 dark:text-black rounded-none rounded-bl-lg px-3 py-1">
                      Recommended
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <Icon
                      className={
                        method.primary
                          ? "size-8 text-green-600 dark:text-green-400"
                          : "size-8 text-brand-gold"
                      }
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {method.highlight}
                  </p>
                  <Button
                    asChild
                    className={`w-full rounded-full font-semibold ${
                      method.primary
                        ? "bg-green-600 hover:bg-green-700 text-white"
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
      <section id="business" className="mb-16">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-6"
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
                <Card className="h-full bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Icon className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.label}
                      </h3>
                      <p className="text-foreground/90 mb-1 dark:text-white/90">{info.value}</p>
                      {info.subtext && (
                        <p className="text-sm text-muted-foreground">
                          {info.subtext}
                        </p>
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
      <section id="faqs">
        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-foreground mb-6"
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
              <AccordionTrigger className="text-left text-base lg:text-lg font-medium hover:no-underline text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Floating WhatsApp (mobile-first) */}
      {/* <div className="fixed bottom-5 right-5 md:hidden z-40">
        <Button
          asChild
          size="lg"
          className="rounded-full shadow-2xl bg-green-600 hover:bg-green-700 text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
        >
          <Link
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="mr-1 text-white" />
            WhatsApp us
          </Link>
        </Button>
      </div> */}
    </div>
  );
}
