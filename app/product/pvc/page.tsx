import { site } from "@/lib/site";
import { ProductSection } from "@/components/product";
import { pvcSpecs } from "@/app/data/specs";
import { ProductBreadcrumbs } from "@/components/product/product-breadcrumbs";
import { ProductPointers } from "@/components/product/product-pointers";

const pvcImages = [
  { src: "/pvc-boot-2.jpeg", alt: "PVC Safety Boot — full view" },
  { src: "/pvc-boot-1.jpeg", alt: "PVC Safety Boot — marking" },
];

export const metadata = {
  title: `PVC Safety Boot — ${site.company}`,
  description:
    "Durable waterproof PVC safety boot designed for wet and industrial environments. Slip-resistant, oil-resistant, and built for long-lasting protection.",
  keywords: [
    "PVC safety boots",
    "PVC rain boots",
    "waterproof work boots",
    "industrial PVC boots",
    "oil-resistant PVC boots",
    "construction rain boots",
  ],
  openGraph: {
    title: "PVC Safety Boot — Durable Waterproof Protection",
    description:
      "PVC Safety Boots built for industrial and wet environments. Waterproof, slip-resistant, and comfortable for long shifts.",
    url: `${site.baseUrl}/product/pvc`,
    siteName: site.company,
    images: [{ url: "/pvc-boot-2.jpeg", width: 1200, height: 630 }],
    locale: "en",
    type: "website",
  },
};
export default function PVCPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <ProductBreadcrumbs current="PVC Safety Boot" />

      <ProductSection
        // variant="compact"
        images={pvcImages}
        title="PVC Safety Boot"
        description="Durable PVC safety boot for wet and industrial environments."
        badges={["New", "PVC", "Waterproof"]}
        specs={pvcSpecs}
      />
      <p className="mt-4 text-sm text-muted-foreground text-center">
        Sizes available on request • Bulk & corporate orders supported •
        Worldwide delivery
      </p>

      <ProductPointers exclude="pvc" />
    </section>
  );
}
