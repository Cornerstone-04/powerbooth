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
        className="text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-coal mb-4">
          Meet Our Director
        </h2>
        <p className="text-xl text-gray-600">
          Led by an experienced director, Power Booth Nigeria Limited is
          committed to certified safety solutions for Nigerian industries.
        </p>
      </motion.div>

      <motion.div
        className="rounded-3xl border bg-white shadow-xl overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="grid md:grid-cols-3 gap-0">
          {/* Photo */}
          <div className="relative md:col-span-1 bg-gray-50 flex items-center justify-center ">
            {/* Use a sized, relative wrapper when using Image with `fill` */}
            <div className="relative w-full h-full min-h-80">
              <Image
                src={site.director.photo || site.logo}
                alt={`${site.director.name} — ${site.director.title}`}
                fill
                sizes="(min-width: 768px) 14rem, 12rem"
                className="rounded-2xl object-cover object-top"
                priority={false}
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2 p-6 lg:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-brand-gold text-white font-semibold px-3 py-1 rounded-xl">
                Leadership
              </Badge>
              <span className="text-sm text-gray-500">
                Power Booth Nigeria Limited
              </span>
            </div>

            <h3 className="text-3xl font-bold text-brand-coal">
              {site.director.name}
            </h3>
            <p className="text-brand-coal/80 mt-1">{site.director.title}</p>

            <p className="mt-5 text-gray-700 leading-relaxed">
              {site.director.bio}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {site.director.phone && (
                <Button asChild variant="outline" className="rounded-full">
                  <Link href={`tel:${site.director.phone}`}>
                    <Phone className="size-4 mr-1" /> Call Director
                  </Link>
                </Button>
              )}
              {site.director.email && (
                <Button asChild variant="outline" className="rounded-full">
                  <Link href={`mailto:${site.director.email}`}>
                    <Mail className="size-4 mr-1" />
                    Email Director
                  </Link>
                </Button>
              )}
              {site.director.linkedin && (
                <Button asChild variant="outline" className="rounded-full">
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
              <div className="rounded-xl border p-4">
                <p className="font-semibold">Safety Focus</p>
                <p className="text-gray-600 mt-1">
                  Commitment to SON/SONCAP compliance and practical PPE
                  selection.
                </p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="font-semibold">Customer-first</p>
                <p className="text-gray-600 mt-1">
                  Supports site assessments and sizing guidance for teams.
                </p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="font-semibold">Local Reliability</p>
                <p className="text-gray-600 mt-1">
                  Lagos same-day dispatch options and nationwide delivery
                  partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Person JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={personJsonLD}
      />
    </section>
  );
}
