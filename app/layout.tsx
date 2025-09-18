import "./globals.css";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { keywords as seoKeywords } from "@/lib/keywords";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: "Power Safety Boot | Steel Toe Safety Boots",
  description:
    "Premium steel-toe safety boots for industrial worksites. Slip-resistant, durable, and comfortable. Bulk orders and fast delivery.",
  keywords: [...seoKeywords],
  openGraph: {
    title: "Power Safety Boot — Trusted Safety Footwear",
    description:
      "Steel-toe boots built for demanding shifts. Slip-resistant and durable.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="text-gray-900" suppressHydrationWarning>
        <ThemeProvider>
          <main className="relative">
            <ScrollToTop />
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
