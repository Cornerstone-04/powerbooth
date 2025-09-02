import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t mt-24 flex justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
          <span>
            © {new Date().getFullYear()} {site.company}
          </span>
          <span className="hidden md:inline">•</span>
          <span>{site.address}</span>
        </div>
      </div>
    </footer>
  );
}
