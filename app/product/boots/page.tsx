import { site } from "@/lib/site";
import { ProductSection } from "@/components/product";
import { steelSpecs } from "@/app/data/specs";
import { ProductBreadcrumbs } from "@/components/product/product-breadcrumbs";
import { ProductPointers } from "@/components/product/product-pointers";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/jsonLd";
import { JsonLd } from "@/components/seo/json-ld";

const steelImages = [
  { src: "/boots-front.jpeg", alt: "Front view" },
  { src: "/boots-side-2.jpeg", alt: "Side view" },
  { src: "/boots-side.png", alt: "Side view" },
  { src: "/boots-tongue.jpeg", alt: "Tongue view" },
  { src: "/boots-sole.jpeg", alt: "Sole view" },
  { src: "/boots-sole-2.jpeg", alt: "Sole view" },
];

export const metadata = {
  title: `Power Safety Boot — ${site.company}`,
  description:
    "Steel-toe safety boot built for industrial worksites. Slip-resistant, durable, and long-lasting comfort.",
  keywords: [
    "safety boots",
    "steel toe boots",
    "industrial safety footwear",
    "work boots",
    "construction safety shoes",
    "slip-resistant boots",
    "durable safety boot",
    "power safety boot",
  ],
  openGraph: {
    title: `Power Safety Boot — ${site.company}`,
    description:
      "Steel-toe, slip-resistant work boot designed for construction and industrial sites. Built for long-lasting comfort and durability.",
    url: `${site.baseUrl}/product/boots`,
    siteName: site.company,
    images: [
      {
        url: "/boots-front.jpeg",
        width: 1200,
        height: 630,
        alt: "Power Safety Boot — front view",
      },
      {
        url: "/boots-side.png",
        width: 1200,
        height: 630,
        alt: "Power Safety Boot — side view",
      },
      {
        url: "/boots-sole.jpeg",
        width: 1200,
        height: 630,
        alt: "Power Safety Boot — sole view",
      },
    ],
    type: "website", // ✅ keep "website" instead of "product"
  },
  twitter: {
    card: "summary_large_image",
    title: `Power Safety Boot — ${site.company}`,
    description:
      "SON-certified steel-toe boots engineered for safety, durability, and comfort at industrial worksites.",
    images: ["/boots-front.jpeg"],
  },
};

export default function BootsPage() {
  const product = productJsonLd({
    site,
    slug: "boots",
    name: "Power Safety Boot",
    description:
      "Steel-toe, slip-resistant work boot designed for industrial worksites. Built for long-lasting comfort and durability.",
    images: ["/boots-front.jpeg", "/boots-side.png", "/boots-sole.jpeg"],
  });

  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: site.baseUrl },
    { name: "Products", url: `${site.baseUrl}/product` },
    { name: "Power Safety Boot", url: `${site.baseUrl}/product/boots` },
  ]);
  return (
    <>
      <JsonLd data={product} />
      <JsonLd data={crumbs} />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ProductBreadcrumbs current="Power Safety Boot" />
        <ProductSection
          isMain
          images={steelImages}
          title={site.name}
          description="Built for industrial worksites: protection, traction, and comfort that lasts through long shifts."
          badges={["Steel Toe", "Slip-Resistant", "Durable"]}
          specs={steelSpecs}
        />
        <p className="mt-4 text-sm text-muted-foreground text-center">
          Sizes available on request • Bulk & corporate orders supported •
          Worldwide delivery
        </p>
        <ProductPointers exclude="boots" />
      </section>
    </>
  );
}
