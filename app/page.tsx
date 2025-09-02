import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Power Safety Boot
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Steel-toe protection, slip-resistant outsole, and all-day comfort.
              Built for sites, factories, and field teams across Nigeria.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild className="rounded-full">
                <a href="/product">View Specs</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank">
                  WhatsApp to Order
                </a>
              </Button>
            </div>
            <p className="mt-3 text-sm text-gray-500">SKU: {site.sku}</p>
          </div>

          <div className="relative">
            <Image
              src="/boots-side.png"
              alt="Power Safety Boot side"
              width={800}
              height={600}
              className="rounded-2xl shadow-card object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Durability",
            desc: "Tough leather upper with reinforced stitching and abrasion resistance.",
          },
          {
            title: "Comfort",
            desc: "Breathable mesh lining, padded collar, and cushioned insole.",
          },
          {
            title: "Safety",
            desc: "Steel toe cap, slip & oil-resistant outsole, electrical hazard support.",
          },
        ].map((f) => (
          <Card key={f.title} className="shadow-card">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {["boots-front.jpeg", "boots-side-2.jpeg", "box-photo.jpeg"].map(
          (img) => (
            <Image
              key={img}
              src={`/${img}`}
              alt={img}
              width={800}
              height={600}
              className="rounded-xl shadow-card w-full h-auto object-cover"
            />
          )
        )}
      </section>

      {/* CTA STRIP */}
      <section className="bg-coal text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 rounded-none md:rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to kit your team?
          </h2>
          <p className="mt-2 text-white/80">
            Message us for pricing, sizes, and delivery timelines.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="rounded-full bg-brand-gold text-black hover:opacity-90"
            >
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank">
                WhatsApp to Order
              </a>
            </Button>
            <Button
              asChild
              className="rounded-full border-white/30 text-white hover:bg-white/10"
            >
              <a href="/contact">Other Contact Options</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
