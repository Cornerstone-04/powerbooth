"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    <section className="bg-brand-coal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-transparent" />
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
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join companies who trust Power Safety Boots. Get bulk pricing, fast
            delivery, and unmatched protection.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <Button
            asChild
            className="w-fit rounded-full bg-white text-brand-coal hover:bg-white/90 font-semibold text-xl px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link href={`https://wa.me/${site.whatsapp}`} target="_blank">
              <FaWhatsapp className="size-6 mr-1" />
              Reach out on WhatsApp
            </Link>
          </Button>
          <Button
            asChild
            className="w-fit rounded-full bg-brand-gold text-white hover:bg-brand-gold/90 font-semibold text-xl px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Link href="/contact">Other Contact Options</Link>
          </Button>
        </motion.div>

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
