"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { ModeToggle } from "./mode-toggle";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 z-40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
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
        <DesktopNav />

        <div className="hidden md:flex items-center gap-2">
          <ModeToggle />
        </div>

        {/* Mobile menu */}
        <MobileNav />
      </div>
    </header>
  );
}
