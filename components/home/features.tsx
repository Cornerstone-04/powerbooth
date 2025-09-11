"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { features } from "@/app/data/features";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
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
          Triple Protection System
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Built for Nigerian conditions. Tested in the harshest industrial
          environments.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = () => (
            <feature.icon className="w-10 h-10 text-brand-gold" />
          );

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="shadow-xl border-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group">
                <CardContent className="p-8">
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-2xl text-brand-coal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.desc}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-brand-gold/10 text-brand-coal"
                  >
                    {feature.highlight}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
