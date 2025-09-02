"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Phone, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLinks } from "./nav-links";
import { navItems } from "@/app/data/nav-items";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold min-w-0 hover:opacity-80 transition-opacity"
            aria-label={`Go to ${site.name} homepage`}
          >
            <Image
              src={site.logo}
              alt=""
              width={36}
              height={36}
              className="rounded"
              priority
            />
            <span className="truncate">{site.name}</span>
          </Link>

          {/* Desktop nav */}
          <NavLinks />

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full hover:scale-105 transition-transform"
            >
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  "Hi! I'd like to place an order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp to place an order"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp to Order
              </a>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="h-10 w-10 hover:bg-gray-50"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
              >
                {/* Sheet header */}
                <div className="flex items-center gap-3 mb-6 mt-2 pl-3" />

                {/* Primary links */}
                <nav className="space-y-1">
                  {navItems.map(({ href, label }) => (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "block rounded-lg p-3 text-lg transition-colors hover:bg-gray-50",
                          pathname === href &&
                            "bg-gray-50 text-brand-gold font-medium"
                        )}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="my-6 px-3">
                  <Separator className="" />
                </div>

                {/* Quick actions */}
                <div className="space-y-3 p-3">
                  <Button
                    asChild
                    className="w-full rounded-full h-12 text-base"
                  >
                    <a
                      href={`https://wa.me/${
                        site.whatsapp
                      }?text=${encodeURIComponent(
                        "Hi! I'd like to place an order."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp to place an order"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp to Order
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full h-12 text-base"
                  >
                    <a
                      href={`tel:${site.phone}`}
                      aria-label={`Call us at ${site.phone}`}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile quick-action bar (fixed bottom) */}
      {/* <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-border/40 px-3 py-2">
        <div className="max-w-6xl mx-auto flex gap-2">
          <Button
            asChild
            className="flex-1 rounded-full h-11 text-base shadow-sm"
            aria-label="Chat on WhatsApp to place an order"
          >
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hi! I'd like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 rounded-full h-11 text-base shadow-sm"
            aria-label={`Call us at ${site.phone}`}
          >
            <a href={`tel:${site.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
        </div>
        <div className="h-[env(safe-area-inset-bottom)]" />
      </div> */}
    </>
  );
}
