"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { personJsonLD } from "@/app/data/person-jsonLD";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const qualities = [
  {
    t: "Safety Focus",
    d: "Commitment to certified safety standards and practical PPE selection.",
  },
  {
    t: "Customer-first",
    d: "Supports site assessments and sizing guidance for teams.",
  },
  {
    t: "Local Reliability",
    d: "Lagos same-day dispatch options and nationwide delivery partners.",
  },
];

export function DirectorSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-16 pb-20">
      {/* Heading */}
      <motion.div
        className="text-center mb-12 flex flex-col items-center gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground tracking-tight">
          Meet Our Director
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-gold/60 rounded-full"></div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Led by an experienced director, Power Booth Nigeria Limited is
          committed to certified safety solutions for industries worldwide.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        className="mx-auto max-w-4xl rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent pointer-events-none"></div>

        {/* Top block: avatar + title */}
        <div className="relative px-6 py-10 md:px-12 md:py-12 text-center space-y-6">
          {/* Enhanced monogram avatar */}
          {/* <motion.div
            className="mx-auto h-20 w-20 rounded-3xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 ring-2 ring-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-2xl shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {monogram || "PB"}
          </motion.div> */}

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Badge className="bg-gradient-to-r from-brand-gold to-brand-gold/90 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow">
              Leadership
            </Badge>
            <span className="text-sm text-muted-foreground font-medium">
              Power Booth Nigeria Limited
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              {site.director.name}
            </h3>
            <p className="text-muted-foreground text-lg font-medium">
              {site.director.title}
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
            {site.director.bio}
          </p>

          {/* Enhanced Actions */}
          <motion.div
            className="mt-8 flex flex-col items-center justify-center sm:flex-row gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {site.director.phone && (
              <motion.div variants={fadeUp}>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full w-full sm:w-fit h-12 dark:text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold/50 transition-all duration-200 group"
                >
                  <Link href={`tel:${site.director.phone}`}>
                    <Phone className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Call Director
                  </Link>
                </Button>
              </motion.div>
            )}
            {site.director.email && (
              <motion.div variants={fadeUp}>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full w-full sm:w-fit h-12 dark:text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold/50 transition-all duration-200 group"
                >
                  <Link href={`mailto:${site.director.email}`}>
                    <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Email Director
                  </Link>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Enhanced Qualities */}
        <div className="relative px-6 pb-10 md:px-12 md:pb-12">
          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {qualities.map(({ t, d }, index) => (
              <motion.div
                key={t}
                className="group h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-1"
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold text-sm flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground dark:text-white mb-2 group-hover:text-brand-gold! transition-colors">
                      {t}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {d}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Person JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={personJsonLD}
      />
    </section>
  );
}
