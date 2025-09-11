"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type Spec = readonly [string, string];

type Props = {
  images: { src: string; alt: string }[];
  title: string;
  description: string;
  badges: string[]; // first badge rendered as filled
  specs: ReadonlyArray<Spec>; // key/value grid
  isMain?: boolean; // if true, use <h1>
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProductSection({
  images,
  title,
  description,
  badges,
  specs,
  isMain,
}: Props) {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-10 items-start"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
    >
      {/* IMAGES */}
      <div className="grid gap-4">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="relative overflow-hidden rounded-2xl shadow-card bg-white"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1000}
              height={800}
              className="object-contain w-full h-auto"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/5" />
          </motion.div>
        ))}
      </div>

      {/* DETAILS */}
      <motion.div variants={fadeUp}>
        <div className="flex items-center gap-2 mb-2">
          {badges.map((b, i) => (
            <Badge
              key={b}
              className={
                i === 0
                  ? "bg-brand-gold text-white px-4 py-1 rounded-xl"
                  : "px-4 py-1 rounded-xl"
              }
              variant={i === 0 ? "default" : "secondary"}
            >
              {b}
            </Badge>
          ))}
        </div>

        {isMain ? (
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        ) : (
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        )}

        <p className="mt-3 text-gray-600">{description}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {specs.map(([k, v], i) => (
            <motion.div
              key={`${k}-${i}`} // 👈 make key unique per row
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="rounded-xl border p-4 bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-xs uppercase text-gray-500">{k}</p>
              <p className="font-medium">{v}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
