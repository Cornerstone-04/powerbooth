export const site = {
  name: "Power Safety Boot",
  company: "Power Booth Nigeria Limited",
  baseUrl: "https://powerbooth.vercel.app",
  phone: "+2347039140534",
  whatsapp: "2347039140534",
  email: "kennethjonathan81@yahoo.com",
  address:
    "No. 29, Agarawu Street, Idumota, Lagos Island, Lagos State, Nigeria",
  sku: "RG 8502158",
  logo: "/logo.png",

  director: {
    name: "JONATHAN KENNETH UJUNWA", // update
    title: "Director, Power Booth Nigeria Limited",
    photo: "/director.png", // add to /public (or keep null to fallback to logo)
    email: "kennethjonathan81@yahoo.com", // optional
    phone: "+2347039140534", // optional
    linkedin: "https://www.linkedin.com/in/username", // optional
    bio: "With over 10 years in industrial safety, John leads Power Booth’s mission to supply reliable PPE for Nigerian worksites.",
  },
} as const;
