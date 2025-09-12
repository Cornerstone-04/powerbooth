import { navItems } from "@/app/data/nav-items";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-6 text-sm">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            // default
            "transition-colors text-muted-foreground dark:text-white/80 hover:text-brand-gold",
            // active
            pathname === href && "text-brand-gold! font-medium"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};