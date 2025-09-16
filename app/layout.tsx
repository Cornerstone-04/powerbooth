import "./globals.css";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/shared/site-footer";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/shared/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { keywords } from "@/lib/keywords";

export const metadata: Metadata = {
  title: "Power Safety Boot (SONCAP Certified) | Steel Toe Safety Boots",
  description:
    "Premium steel-toe safety boots for industrial worksites. Slip-resistant, durable, and comfortable. Bulk orders and fast delivery.",
  keywords: keywords,
  openGraph: {
    title: "Power Safety Boot — Trusted Safety Footwear",
    description:
      "SONCAP-certified steel-toe boots. Slip-resistant, durable, and ready for tough shifts.",
    url: site.baseUrl,
    siteName: site.company,
    images: [{ url: "/boots-front.jpeg", width: 1200, height: 630 }],
    locale: "en",
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
          <main className="relative">
            <ScrollToTop />
            <SiteHeader />
            {children}
            <SiteFooter />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
