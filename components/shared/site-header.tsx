"use client";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLinks = () => (
  <nav className="hidden md:flex gap-6 text-sm">
    <Link href="/" className="hover:text-brand-gold">
      Home
    </Link>
    <Link href="/product" className="hover:text-brand-gold">
      Product
    </Link>
    <Link href="/contact" className="hover:text-brand-gold">
      Contact
    </Link>
  </nav>
);

export function SiteHeader() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src={site.logo} alt={site.name} width={40} height={40} />
          <span>{site.name}</span>
        </Link>

        <NavLinks />

        <div className="hidden md:block">
          <Button asChild className="rounded-full">
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank">
              WhatsApp to Order
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-12">
              <div className="grid gap-4 text-lg">
                <Link href="/">Home</Link>
                <Link href="/product">Product</Link>
                <Link href="/contact">Contact</Link>
                <Button asChild className="mt-4 rounded-full">
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank">
                    WhatsApp to Order
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
