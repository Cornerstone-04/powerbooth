"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Slug = "boots" | "pvc" | "jacket";

const catalog: Record<Slug, { href: string; name: string; desc: string }> = {
  boots: {
    href: "/product/boots",
    name: "Power Safety Boot",
    desc: "Steel-toe, slip-resistant.",
  },
  pvc: {
    href: "/product/pvc",
    name: "PVC Safety Boot",
    desc: "Waterproof protection.",
  },
  jacket: {
    href: "/product/jacket",
    name: "Reflective Jacket",
    desc: "High-visibility safety.",
  },
};

export function ProductPointers({ exclude }: { exclude: Slug }) {
  const items = (Object.keys(catalog) as Slug[])
    .filter((key) => key !== exclude)
    .map((key) => catalog[key]);

  return (
    <section className="mt-16">
      <h3 className="text-xl font-semibold mb-4 text-foreground">
        Explore other products
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground dark:text-white">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
              <ArrowRight className="dark:text-white" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
