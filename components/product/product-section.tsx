"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type Spec = readonly [string, string];

type Props = {
  images: { src: string; alt: string }[];
  title: string;
  description: string;
  badges: string[];
  specs: ReadonlyArray<Spec>;
  isMain?: boolean;
  variant?: "default" | "compact";
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
  variant = "default",
}: Props) {
  const mediaCol =
    variant === "compact" ? "md:max-w-md md:mx-auto lg:mx-0" : "";

  const aspect =
    variant === "compact" ? "aspect-[4/3]" : "aspect-[3/2] md:aspect-[4/3]";

  return (
    // IMPORTANT: don't start hidden at the section level (fixes mobile “blank until scroll”)
    <motion.div
      className="grid md:grid-cols-2 gap-10 items-start"
      initial={false}
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* IMAGES */}
      <div className={`grid gap-4 ${mediaCol}`}>
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className={`relative overflow-hidden rounded-2xl shadow-card bg-card border border-border ${aspect}`}
          >
            {/* Blurred background layer (covers the whole tile) */}
            <Image
              src={img.src}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              aria-hidden
              className="absolute inset-0 object-cover blur-lg scale-110 opacity-50"
            />

            {/* Foreground product image (contain) */}
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="relative z-10 object-contain"
              priority={i === 0}
            />

            {/* Soft hover overlay */}
            <div className="absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/5" />
          </motion.div>
        ))}
      </div>

      {/* DETAILS */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-2">
          {badges.map((b, i) => (
            <Badge
              key={`${b}-${i}`}
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h1>
        ) : (
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
        )}

        <p className="mt-3 text-muted-foreground">{description}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {specs.map(([k, v], i) => (
            <motion.div
              key={`${k}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="rounded-xl border border-border p-4 bg-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                {k}
              </p>
              <p className="font-medium text-foreground dark:text-white">{v}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
