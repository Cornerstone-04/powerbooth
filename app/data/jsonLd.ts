import { site } from "@/lib/site";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: site.name,
  brand: site.company,
  sku: site.sku,
  image: [`${site.baseUrl}/boots-front.jpeg`, `${site.baseUrl}/boots-side.png`],
  description:
    "Steel-toe, slip-resistant safety boots with breathable comfort lining.",
  offers: {
    "@type": "Offer",
    priceCurrency: "NGN",
    price: "0.00",
    availability: "https://schema.org/InStock",
    url: `${site.baseUrl}/product`,
  },
};
