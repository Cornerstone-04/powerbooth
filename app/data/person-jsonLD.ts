import { site } from "@/lib/site";

export const personJsonLD = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.director.name,
    jobTitle: site.director.title,
    image: site.director.photo
      ? `${site.baseUrl}${site.director.photo}`
      : `${site.baseUrl}${site.logo}`,
    worksFor: {
      "@type": "Organization",
      name: site.company,
      url: site.baseUrl,
    },
    email: site.director.email || undefined,
    telephone: site.director.phone || undefined,
  }),
};
