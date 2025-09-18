"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const products = [
  {
    slug: "boots",
    name: "Power Safety Boot",
    img: "/boots-front.jpeg",
    desc: "Steel-toe, slip-resistant protection for tough worksites.",
    tags: ["Steel Toe", "Slip-Resistant", "Durable"],
  },
  {
    slug: "pvc",
    name: "PVC Safety Boot",
    img: "/pvc-boot-2.jpeg",
    desc: "Waterproof PVC boot for wet and industrial environments.",
    tags: ["Waterproof", "PVC"],
  },
  {
    slug: "jacket",
    name: "Reflective Jacket",
    img: "/jacket-3.jpg",
    desc: "High-visibility safety jacket for on-site visibility.",
    tags: ["Hi-Vis", "Reflective"],
  },
];

export default function ProductsContent() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
          Our Products
        </h1>
        <p className="text-muted-foreground mt-2">
          Reliable protective gear for industrial, construction, and warehouse
          teams.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.article
            key={p.slug}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all"
          >
            <Link href={`/product/${p.slug}`} className="flex flex-col group">
              <div className="relative aspect-[16/10]">
                {/* blurred backdrop */}
                <Image
                  src={p.img}
                  alt=""
                  fill
                  className="object-cover blur-lg scale-110 opacity-40"
                  aria-hidden
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={i === 0}
                />
                {/* foreground */}
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover object-bottom relative z-10"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-foreground">
                  {p.name}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">{p.desc}</p>

                <Button
                  variant="outline"
                  className="w-full md:w-fit rounded-full text-white dark:text-brand-gold bg-brand-gold hover:bg-brand-gold/90 hover:text-white font-medium transition-all cursor-pointer"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
