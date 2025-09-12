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
import { Menu, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { NavLinks } from "./nav-links";
import { navItems } from "@/app/data/nav-items";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold min-w-0 hover:opacity-80 transition-opacity dark:text-white!"
          aria-label={`Go to ${site.name} homepage`}
        >
          <Image
            src={site.logo}
            alt=""
            width={36}
            height={36}
            className="rounded dark:invert-100"
            priority
          />
          <span className="truncate">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <NavLinks />

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <ModeToggle />
          {/* <Button
            asChild
            className="rounded-full hover:scale-105 transition-transform"
          >
            <Link
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hi! I'd like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp to place an order"
            >
              <FaWhatsapp className="mr-1 h-4 w-4 text-green-500" />
              WhatsApp to Order
            </Link>
          </Button> */}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
                className="h-10 w-10"
              >
                <Menu className="h-4 w-4 dark:text-white" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-80 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] bg-brand-coal"
            >
              <div className="flex items-center gap-3 mb-6 mt-2 pl-3" />

              {/* Primary links */}
              <nav className="space-y-1">
                {navItems.map(({ href, label }) => (
                  <SheetClose asChild key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "block rounded-lg p-3 text-lg transition-colors hover:bg-accent hover:text-accent-foreground dark:text-white/80",
                        pathname === href &&
                          "bg-accent text-brand-gold! font-medium"
                      )}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="my-6 px-3">
                <Separator />
              </div>

              {/* Quick actions */}
              <div className="space-y-3 p-3">
                <Button asChild className="w-full rounded-full h-12 text-base">
                  <Link
                    href={`https://wa.me/${
                      site.whatsapp
                    }?text=${encodeURIComponent(
                      "Hi! I'd like to place an order."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp to place an order"
                  >
                    <FaWhatsapp className="mr-2 size-5 text-green-500" />
                    WhatsApp to Order
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full h-12 text-base"
                >
                  <Link
                    href={`tel:${site.phone}`}
                    aria-label={`Call us at ${site.phone}`}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
