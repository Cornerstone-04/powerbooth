import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.company}`,
  description:
    "Reliable protection for the toughest environments. Steel-toe, slip-resistant safety boots.",
  openGraph: {
    title: site.name,
    description:
      "Steel-toe, slip-resistant safety boots for Nigerian worksites.",
    url: site.baseUrl,
    siteName: site.company,
    images: [
      { url: site.logo, width: 500, height: 500 },
      { url: "/boots-front.jpeg", width: 1200, height: 630 },
    ],
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
