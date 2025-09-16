"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ImageSlider } from "./image-slider";

type Spec = readonly [string, string];

type Props = {
  images: { src: string; alt: string }[];
  title: string;
  description: string;
  badges: string[];
  specs: ReadonlyArray<Spec>;
  isMain?: boolean;
  variant?: "default" | "compact";
  showThumbs?: boolean;
};

export function ProductSection({
  images,
  title,
  description,
  badges,
  specs,
  isMain,
  variant = "default",
  showThumbs = true,
}: Props) {
  const mediaCol =
    variant === "compact" ? "md:max-w-md md:mx-auto lg:mx-0" : "";
  const aspectClass =
    variant === "compact" ? "aspect-[4/3]" : "aspect-[3/2] md:aspect-[4/3]";

  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* IMAGES */}
      <div className={mediaCol}>
        <ImageSlider
          images={images}
          aspectClass={aspectClass}
          showThumbs={showThumbs}
        />
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
    </div>
  );
}
