// export const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   name: site.name,
//   brand: site.company,
//   sku: site.sku,
//   image: [`${site.baseUrl}/boots-front.jpeg`, `${site.baseUrl}/boots-side.png`],
//   description:
//     "Steel-toe, slip-resistant safety boots with breathable comfort lining.",
//   offers: {
//     "@type": "Offer",
//     url: `${site.baseUrl}/product`,
//   },
// };

// lib/jsonld.ts
type Site = {
  baseUrl: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  logo: string;
};

export const orgJsonLd = (site: Site) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.company,
  url: site.baseUrl,
  logo: new URL(site.logo, site.baseUrl).toString(),
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
  },
  // Add if you have them
  // sameAs: ['https://www.linkedin.com/company/...']
});

export const websiteJsonLd = (site: Site) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.company,
  url: site.baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbJsonLd = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

// Individual Product (boots, PVC boot, jacket)
export const productJsonLd = ({
  site,
  slug,
  name,
  description,
  images,
  sku,
  brand = site.company,
  price, // optional
  priceCurrency, // optional (e.g. "NGN", "USD")
  availability, // optional "https://schema.org/InStock"
}: {
  site: Site;
  slug: string;
  name: string;
  description: string;
  images: string[];
  sku?: string;
  brand?: string;
  price?: string | number;
  priceCurrency?: string;
  availability?: string;
}) => {
  const url = `${site.baseUrl}/product/${slug}`;
  const imageUrls = images.map((i) => new URL(i, site.baseUrl).toString());

  const base: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: imageUrls,
    sku,
    brand: { "@type": "Brand", name: brand },
    url,
  };

  if (price && priceCurrency) {
    base.offers = {
      "@type": "Offer",
      url,
      price: `${price}`,
      priceCurrency,
      availability: availability || "https://schema.org/InStock",
      // Add priceValidUntil if you run promos
    };
  }

  return base;
};

// Products index (Collection + ItemList for SEO)
export const productsCollectionJsonLd = ({
  site,
  items,
}: {
  site: Site;
  items: Array<{ name: string; url: string; image: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `Products — ${site.company}`,
  url: `${site.baseUrl}/product`,
  hasPart: items.map((it) => ({
    "@type": "Product",
    name: it.name,
    url: new URL(it.url, site.baseUrl).toString(),
    image: new URL(it.image, site.baseUrl).toString(),
  })),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: new URL(it.url, site.baseUrl).toString(),
      name: it.name,
    })),
  },
});

// Contact page
export const contactPageJsonLd = (site: Site) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact — ${site.company}`,
  url: `${site.baseUrl}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: site.company,
    url: site.baseUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "customer support",
        availableLanguage: "en",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
    },
  },
});
