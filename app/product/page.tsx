import { site } from "@/lib/site";
import ProductsContent from "@/components/product/product-page-content";

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
  return <ProductsContent />;
}
