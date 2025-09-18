"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function OtherProducts() {
  const items = [
    {
      title: "PVC Safety Rain Boot",
      desc: "Durable waterproof protection for wet worksites.",
      img: "/pvc-boot-2.jpeg",
      href: "/product#pvc", // optional query + hash for tab open
      tags: ["Waterproof", "PVC"],
    },
    {
      title: "High-Visibility Reflective Jacket",
      desc: "High-visibility outerwear for enhanced on-site safety.",
      img: "/jacket-1.jpeg",
      href: "/product#reflect",
      tags: ["Hi-Vis", "Reflective"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-center mb-10"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Our Other Products
        </h2>
        <p className="text-muted-foreground mt-2">
          Explore additional gear your team may need on site.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <motion.article
            key={it.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all"
          >
            <div className="relative aspect-[16/10]">
              {/* blurred backdrop */}
              <Image
                src={it.img}
                alt=""
                fill
                className="object-cover blur-lg scale-110 opacity-40"
                aria-hidden
              />
              {/* foreground */}
              <Image
                src={it.img}
                alt={it.title}
                fill
                className="object-contain p-6 relative z-10"
              />
            </div>

            <div className="p-6 space-y-3">
              <div className="flex gap-2">
                {it.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full">
                    {t}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {it.title}
              </h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
              <Button
                asChild
                variant="outline"
                className="w-full md:w-fit rounded-full text-white dark:text-brand-gold bg-brand-gold hover:bg-brand-gold/90 hover:text-white font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl flex justify-center items-center"
              >
                <Link href={it.href}>View Details</Link>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
