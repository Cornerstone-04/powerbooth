import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FaWhatsapp } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { specs as steelSpecsRaw } from "../data/specs";
import { jsonLd } from "../data/jsonLd";
import { ProductSection } from "@/components/product/product-section";

export const metadata = { title: `Product — ${site.name}` };

// Treat imported data as readonly [string, string][]
const steelSpecs = steelSpecsRaw as ReadonlyArray<readonly [string, string]>;

const pvcSpecs: ReadonlyArray<readonly [string, string]> = [
  ["Marking", "CE BN2532374"],
  ["Material", "PVC"],
  ["Color", "Yellow"],
  ["Outsole", "Lugged, slip-resistant"],
  ["Usage", "Wet/industrial environments"],
];

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <Tabs defaultValue="steel" className="w-full">
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <TabsList>
              <TabsTrigger value="steel">Power Safety Boot</TabsTrigger>
              <TabsTrigger value="pvc">PVC Safety Boot</TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button asChild className="rounded-full bg-brand-coal">
                <Link href={`https://wa.me/${site.whatsapp}`} target="_blank">
                  <FaWhatsapp className="size-4 mr-1 text-green-500" />
                  WhatsApp to Order
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/contact">
                  <FaQuestionCircle className="size-4 mr-1" />
                  Ask a Question
                </Link>
              </Button>
            </div>
          </div>

          <TabsContent value="steel">
            <ProductSection
              isMain
              images={[
                { src: "/boots-front.jpeg", alt: "Front view" },
                { src: "/boots-side-2.jpeg", alt: "Side view" },
              ]}
              title={site.name}
              description="Built for Nigerian worksites: protection, traction, and comfort that lasts through long shifts."
              badges={["New", "Steel Toe", "Slip-Resistant"]}
              specs={steelSpecs}
            />
            <p className="mt-4 text-sm text-gray-500 text-center">
              Sizes available on request • Bulk & corporate orders supported •
              Delivery nationwide
            </p>
          </TabsContent>

          <TabsContent value="pvc">
            <ProductSection
              images={[
                { src: "/pvc-boot-2.jpeg", alt: "PVC Safety Boot — full view" },
                {
                  src: "/pvc-boot-1.jpeg",
                  alt: "PVC Safety Boot — close-up with marking",
                },
              ]}
              title="PVC Safety Boot"
              description="Durable PVC safety boot for wet and industrial environments."
              badges={["New", "PVC", "Waterproof"]}
              specs={pvcSpecs}
            />
            <p className="mt-4 text-sm text-gray-500 text-center">
              Sizes available on request • Bulk & corporate orders supported •
              Delivery nationwide
            </p>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
