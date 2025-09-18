"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
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
          className="w-80 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] dark:bg-brand-coal"
        >
          <div className="flex items-center gap-3 mb-6 mt-2 pl-3">
            <ModeToggle />
          </div>
          {/* Primary links */}
          <nav className="space-y-1 mt-4">
            {navItems.map(({ href, label }) => (
              <SheetClose asChild key={href}>
                <Link
                  href={href}
                  className={cn(
                    "block rounded-lg p-3 text-lg transition-colors hover:bg-accent hover:text-accent-foreground dark:text-white/80",
                    pathname === href && "bg-accent text-brand-gold font-medium"
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
            <Button
              asChild
              className="rounded-full bg-brand-coal dark:bg-white text-white dark:text-foreground w-full"
            >
              <Link
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
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
              className="rounded-full dark:text-brand-gold w-full"
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
  );
}
