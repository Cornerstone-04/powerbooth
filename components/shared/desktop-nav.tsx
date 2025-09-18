"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function DesktopNav() {
  const pathname = usePathname();

  const linkCls = (href: string) =>
    cn(
      "text-sm transition-colors dark:text-white hover:text-brand-gold!",
      pathname === href && "text-brand-gold font-medium"
    );

  return (
    <nav className="hidden md:flex items-center gap-6">
      {/* Home */}
      <Link href="/" className={linkCls("/")}>
        Home
      </Link>

      {/* Products (inline dropdown) */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent px-0 text-sm hover:text-brand-gold data-[state=open]:text-brand-gold">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-2">
              <div className="grid gap-1 w-42">
                <NavigationMenuLink asChild>
                  <Link
                    href="/product"
                    className="block rounded-md px-3 py-2 hover:bg-accent"
                  >
                    All Products
                    <p className="text-xs text-muted-foreground">
                      Browse everything
                    </p>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link
                    href="/product/boots"
                    className="block rounded-md px-3 py-2 hover:bg-accent"
                  >
                    Power Safety Boot
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link
                    href="/product/pvc"
                    className="block rounded-md px-3 py-2 hover:bg-accent"
                  >
                    PVC Safety Boot
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link
                    href="/product/jacket"
                    className="block rounded-md px-3 py-2 hover:bg-accent"
                  >
                    Reflective Jacket
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Contact */}
      <Link href="/contact" className={linkCls("/contact")}>
        Contact
      </Link>
    </nav>
  );
}
