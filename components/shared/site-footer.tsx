import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-muted/40 dark:bg-brand-coal/70 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top: 3 columns */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand / blurb */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src={site.logo}
                alt={`${site.company} logo`}
                width={28}
                height={28}
                className="rounded dark:invert-100"
              />
              <span className="font-semibold text-foreground dark:text-white">
                {site.company}
              </span>
            </div>
            <p className="leading-relaxed">
              SONCAP-certified safety footwear and protective wear. Fast
              delivery and reliable support for teams.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="grid grid-cols-2 gap-3 md:grid-cols-1">
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/product#specs" className="hover:underline">
                    Specs
                  </Link>
                </li>
                <li>
                  <Link href="/contact#faqs" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp Support
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="mb-2 font-semibold text-foreground">Contact</h4>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 opacity-80" />
              <a
                href={site.addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {site.address}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="opacity-80" />
              <a href={`tel:${site.phone}`} className="hover:underline">
                {site.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp className="opacity-80" />
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Chat on WhatsApp
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="opacity-80" />
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {year} {site.company}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/contact#business" className="hover:underline">
              Business Info
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/contact#faqs" className="hover:underline">
              FAQ
            </Link>
            <span className="opacity-50">•</span>
            <Link href="/product#specs" className="hover:underline">
              Specifications
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
