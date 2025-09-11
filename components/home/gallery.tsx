"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/app/data/gallery";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-coal mb-4">
          See the Difference
        </h2>
        <p className="text-xl text-gray-600">
          Professional photography showing every detail
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {gallery.map(({ img, title, desc }, i) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={`/${img}`}
                alt={`${title} - Power Safety Boot`}
                width={800}
                height={600}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="font-bold text-xl mb-2">{title}</h3>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
