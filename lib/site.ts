export const site = {
  name: "Power Safety Boot",
  company: "Power Booth Nigeria Limited",
  baseUrl: "https://power-safety.example.com",
  phone: "+234 800 000 0000",
  whatsapp: "2348000000000",
  email: "sales@powerbooth.ng",
  address: "Amuwo Odofin, Lagos, Nigeria",
  sku: "RG 8502158",
  logo: "/logo.png",

  director: {
    name: "John Doe", // update
    title: "Director, Power Booth Nigeria Limited",
    photo: "/director.jpg", // add to /public (or keep null to fallback to logo)
    email: "director@powerbooth.ng", // optional
    phone: "+234 800 000 0001", // optional
    linkedin: "https://www.linkedin.com/in/username", // optional
    bio: "With over 10 years in industrial safety, John leads Power Booth’s mission to supply reliable PPE for Nigerian worksites.",
  },
} as const;
