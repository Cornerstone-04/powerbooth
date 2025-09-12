import "./globals.css";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/shared/site-footer";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/shared/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/shared/scroll-to-top";

export const metadata: Metadata = {
  title:
    "Steel Toe Safety Boots Nigeria | Power Safety Boot (SONCAP Certified)",
  description:
    "Premium steel-toe safety boots for Nigerian worksites. Slip-resistant, durable, and comfortable. Bulk orders and nationwide delivery.",
  keywords: [
    "safety boots Nigeria",
    "steel toe boots Lagos",
    "industrial safety footwear",
    "work boots Nigeria",
    "construction safety shoes",
    "power booth",
    "power safety",
  ],
  openGraph: {
    title: "Power Safety Boot — Nigeria's Trusted Safety Footwear",
    description:
      "Protecting teams with SONCAP-certified steel-toe boots. Slip-resistant, durable, and ready for tough shifts.",
    url: site.baseUrl,
    siteName: site.company,
    images: [{ url: "/boots-front.jpg", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-900">
        <ThemeProvider>
          <ScrollToTop />
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
