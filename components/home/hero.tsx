"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";
import { Shield, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { HeroParticles } from "./hero/particle";
import "@/styles/hero.css";

const fadeRight = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[radial-gradient(80%_60%_at_10%_0%,rgba(255,215,0,0.10),transparent_60%)]
        dark:bg-[radial-gradient(80%_60%_at_10%_0%,rgba(255,215,0,0.06),transparent_60%)]
      "
    >
      <HeroParticles />
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
        >
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-brand-gold text-white font-semibold px-3 py-1 rounded-xl">
              Certified Quality
            </Badge>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Power Safety Boot
            <span className="block text-2xl lg:text-3xl text-muted-foreground font-normal mt-2">
              Engineered for tough worksites
            </span>
          </h1>

          <p className="text-xl text-brand-coal/80 dark:text-white/80 mb-8 leading-relaxed">
            Industry-grade safety boots designed for demanding environments.
            Steel-toe protection that won&apos;t quit, even in the toughest
            conditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button
              asChild
              className="w-full md:w-fit rounded-full bg-brand-coal hover:bg-brand-coal/90 dark:bg-white dark:text-brand-coal dark:hover:bg-white/90 text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href={`https://wa.me/${site.whatsapp}`} target="_blank">
                <FaWhatsapp className="size-6 text-green-500 mr-2" />
                WhatsApp to Order
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full md:w-fit rounded-full text-white dark:text-brand-gold bg-brand-gold hover:bg-brand-gold/90 hover:text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl flex justify-center items-center"
            >
              <Link href="/product/boots">View Full Specs</Link>
            </Button>
          </div>

          {/* <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-gold" />
              <span>SKU: {site.sku}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>Fast Dispatch</span>
            </div>
          </div> */}
        </motion.div>

        {/* Right (image) */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/15 to-transparent rounded-3xl transform rotate-3" />
          <motion.div
            whileHover={{ scale: 1.02, rotate: 3 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            <Image
              src="/boots-side.png"
              alt="Power Safety Boot - Steel toe protection"
              width={800}
              height={600}
              className="rounded-3xl shadow-2xl object-contain w-full h-auto relative z-10"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
