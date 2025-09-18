import { site } from "@/lib/site";
import ProductsContent from "@/components/product/product-page-content";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, productsCollectionJsonLd } from "@/lib/jsonLd";

const items = [
  {
    name: "Power Safety Boot",
    url: "/product/boots",
    image: "/boots-front.jpeg",
  },
  { name: "PVC Safety Boot", url: "/product/pvc", image: "/pvc-boot-2.jpeg" },
  { name: "Reflective Jacket", url: "/product/jacket", image: "/jacket-3.jpg" },
];

export const metadata = {
  title: `Our Products — ${site.company}`,
  description:
    "Explore our range of protective gear including Power Safety Boots, PVC Safety Boots, and Reflective Jackets. Built for industrial, construction, and warehouse environments with comfort and durability in mind.",
  keywords: [
    "safety boots",
    "steel toe boots",
    "PVC safety boots",
    "rain boots",
    "reflective safety jacket",
    "high visibility vest",
    "industrial PPE",
    "construction safety gear",
    "protective clothing",
    "worksite safety equipment",
  ],
  openGraph: {
    title: `Our Products — ${site.company}`,
    description:
      "Browse our product lineup: Power Safety Boots, PVC Safety Boots, and Reflective Jackets. Reliable protection for industrial and construction sites.",
    url: `${site.baseUrl}/product`,
    siteName: site.company,
    images: [
      {
        url: "/boots-front.jpeg",
        width: 1200,
        height: 630,
        alt: "Power Safety Boot",
      },
      {
        url: "/pvc-boot-1.jpeg",
        width: 1200,
        height: 630,
        alt: "PVC Safety Boot",
      },
      {
        url: "/jacket-3.jpg",
        width: 1200,
        height: 630,
        alt: "Reflective Jacket",
      },
    ],
    locale: "en",
    type: "website",
  },
};

export default function ProductsPage() {
  const collection = productsCollectionJsonLd({ site, items });
  const crumbs = breadcrumbJsonLd([
    { name: "Home", url: site.baseUrl },
    { name: "Products", url: `${site.baseUrl}/product` },
  ]);
  return (
    <>
      <JsonLd data={collection} />
      <JsonLd data={crumbs} />
      <ProductsContent />
    </>
  );
}
