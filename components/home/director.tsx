"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { personJsonLD } from "@/app/data/person-jsonLD";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function DirectorSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <motion.div
        className="text-center mb-12 flex flex-col items-center justify-center gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Meet Our Director
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Led by an experienced director, Power Booth Nigeria Limited is
          committed to certified safety solutions for Nigerian industries.
        </p>
      </motion.div>

      <motion.div
        className="rounded-3xl border border-border bg-card shadow-xl overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="grid md:grid-cols-3 gap-0">
          {/* Photo */}
          <div className="relative md:col-span-1 bg-muted/40 flex items-center justify-center">
            <div className="relative w-full h-full min-h-80">
              <Image
                src={site.director.photo || site.logo}
                alt={`${site.director.name} — ${site.director.title}`}
                fill
                sizes="(min-width: 768px) 14rem, 12rem"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2 p-6 lg:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-brand-gold text-white font-semibold px-3 py-1 rounded-xl">
                Leadership
              </Badge>
              <span className="text-sm text-muted-foreground">
                Power Booth Nigeria Limited
              </span>
            </div>

            <h3 className="text-3xl font-bold text-foreground">
              {site.director.name}
            </h3>
            <p className="text-foreground/80 mt-1 dark:text-muted-foreground">{site.director.title}</p>

            <p className="mt-5 text-muted-foreground leading-relaxed ">
              {site.director.bio}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {site.director.phone && (
                <Button asChild variant="outline" className="rounded-full dark:text-brand-gold">
                  <Link href={`tel:${site.director.phone}`}>
                    <Phone className="size-4 mr-1" /> Call Director
                  </Link>
                </Button>
              )}
              {site.director.email && (
                <Button asChild variant="outline" className="rounded-full dark:text-brand-gold">
                  <Link href={`mailto:${site.director.email}`}>
                    <Mail className="size-4 mr-1" />
                    Email Director
                  </Link>
                </Button>
              )}
              {site.director.linkedin.length >0 && (
                <Button asChild variant="outline" className="rounded-full dark:text-brand-gold">
                  <Link
                    href={site.director.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="size-4 mr-1" />
                    LinkedIn Profile
                  </Link>
                </Button>
              )}
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              {[
                {
                  t: "Safety Focus",
                  d: "Commitment to SON/SONCAP compliance and practical PPE selection.",
                },
                {
                  t: "Customer-first",
                  d: "Supports site assessments and sizing guidance for teams.",
                },
                {
                  t: "Local Reliability",
                  d: "Lagos same-day dispatch options and nationwide delivery partners.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-xl border border-border bg-card p-4 dark:text-white"
                >
                  <p className="font-semibold text-foreground">{x.t}</p>
                  <p className="text-muted-foreground mt-1">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
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
