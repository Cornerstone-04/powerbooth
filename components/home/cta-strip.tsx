"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CtaStrip() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-brand-gold/10 text-brand-coal
        dark:bg-brand-coal dark:text-white
      "
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-transparent dark:from-brand-gold/10" />

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Ready to Protect Your Team?
          </h2>
          <p className="text-xl text-brand-coal/80 dark:text-white/80 mb-8 max-w-3xl mx-auto">
            Join companies who trust Power Safety Boots. Get bulk pricing, fast
            delivery, and unmatched protection.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <Button
            asChild
            className="
              w-full md:w-fit text-lg md:text-base rounded-full font-semibold
              bg-brand-coal text-white hover:bg-brand-coal/90
              dark:bg-white dark:text-brand-coal dark:hover:bg-white/90
              transition-all duration-300 hover:scale-105 hover:shadow-2xl
            "
          >
            <Link href={`https://wa.me/${site.whatsapp}`} target="_blank">
              <FaWhatsapp className="size-6 mr-1 text-green-500" />
              Reach out on WhatsApp
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full md:w-fit text-lg md:text-base rounded-full dark:text-brand-gold"
          >
            <Link href="/contact">Other Contact Options</Link>
          </Button>
        </motion.div>

        {/* Feature icons */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-6 h-6 text-brand-gold" />
            <span>SONCAP Certified Quality</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-brand-gold" />
            <span>Same-Day Lagos Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="w-6 h-6 text-brand-gold" />
            <span>Bulk & Corporate Orders</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
