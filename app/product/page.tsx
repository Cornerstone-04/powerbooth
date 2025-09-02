import Image from "next/image";
import { site } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { specs } from "../data/specs";
import { jsonLd } from "../data/jsonLd";

export const metadata = { title: `Product — ${site.name}` };

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div className="grid gap-4">
          <Image
            src="/boots-front.jpeg"
            alt="Front view"
            width={1000}
            height={800}
            className="rounded-2xl shadow-card object-contain w-full h-auto"
          />
          <Image
            src="/boots-side-2.jpeg"
            alt="Side view"
            width={1000}
            height={800}
            className="rounded-2xl shadow-card object-contain w-full h-auto"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-brand-gold text-white px-4 py-1 rounded-xl">New</Badge>
            <Badge variant="secondary" className=" px-4 py-1 rounded-xl">Steel Toe</Badge>
            <Badge variant="secondary" className=" px-4 py-1 rounded-xl">Slip-Resistant</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{site.name}</h1>
          <p className="mt-3 text-gray-600">
            Built for Nigerian worksites: protection, traction, and comfort that
            lasts through long shifts.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {specs.map(([k, v]) => (
              <div key={k} className="rounded-xl border p-4 bg-white">
                <p className="text-xs uppercase text-gray-500">{k}</p>
                <p className="font-medium">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <Button asChild className="rounded-full">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank">
                WhatsApp to Order
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="/contact">Ask a Question</a>
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Sizes available on request • Bulk & corporate orders supported •
            Delivery nationwide
          </p>
        </div>
      </section>
    </>
  );
}
