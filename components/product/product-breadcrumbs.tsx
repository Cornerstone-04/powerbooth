import Link from "next/link";

export function ProductBreadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex items-center gap-2 text-muted-foreground">
        <li>
          <Link href="/product" className="hover:underline">
            Products
          </Link>
        </li>
        <li className="opacity-50">/</li>
        <li className="text-foreground">{current}</li>
      </ol>
    </nav>
  );
}
