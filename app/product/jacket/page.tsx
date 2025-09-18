import { site } from "@/lib/site";
import { ProductSection } from "@/components/product";
import { jacketSpecs } from "@/app/data/specs";
import { ProductPointers } from "@/components/product/product-pointers";
import { ProductBreadcrumbs } from "@/components/product/product-breadcrumbs";

const jacketImages = [
  { src: "/jacket-3.jpg", alt: "Reflective safety jacket — packaged view" },
  { src: "/jacket-4.jpg", alt: "Reflective safety jacket — label & mesh" },
];

export const metadata = {
  title: `Reflective Safety Jacket — ${site.company}`,
  description:
    "High-visibility reflective safety vest (EN471 compliant) for road work, construction, and warehouse safety. Lightweight, durable, and breathable.",
  keywords: [
    "reflective safety jacket",
    "high visibility vest",
    "industrial safety vest",
    "hi-vis jacket",
    "construction reflective vest",
    "power safety reflective jacket",
  ],
  openGraph: {
    title: "Reflective Safety Jacket — High-Visibility Protection",
    description:
      "Reflective Safety Jacket for maximum visibility in construction, roadwork, and warehouse environments. EN471 compliant, durable, and lightweight.",
    url: `${site.baseUrl}/product/jacket`,
    siteName: site.company,
    images: [{ url: "/jacket-3.jpg", width: 1200, height: 630 }],
    locale: "en",
    type: "website",
  },
};

export default function JacketPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <ProductBreadcrumbs current="Reflective Jacket" />
      <ProductSection
        images={jacketImages}
        title="Reflective Safety Jacket"
        description="High-visibility safety vest for road work, construction and warehouse environments."
        badges={["New", "Hi-Vis"]}
        specs={jacketSpecs}
      />
      <p className="mt-4 text-sm text-muted-foreground text-center">
        Sizes available on request • Bulk & corporate orders supported •
        Worldwide delivery
      </p>
      <ProductPointers exclude="jacket" />
    </section>
  );
}
