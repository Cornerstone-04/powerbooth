import { site } from "@/lib/site";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t  flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span>
            © {new Date().getFullYear()} {site.company}
          </span>
          <span className="hidden md:inline">•</span>
          <Link href="https://maps.app.goo.gl/tD4M1sgV25x5gsiU6" className="underline">{site.address}</Link>
        </div>
      </div>
    </footer>
  );
}
