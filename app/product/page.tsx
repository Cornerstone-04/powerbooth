"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FaWhatsapp } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { jsonLd } from "../data/jsonLd";
import { ProductSection } from "@/components/product";
import { jacketSpecs, pvcSpecs, steelSpecs } from "../data/specs";
import { useEffect, useState } from "react";

const steelImages = [
  { src: "/boots-front.jpeg", alt: "Front view" },
  { src: "/boots-side-2.jpeg", alt: "Side view" },
  { src: "/boots-side.png", alt: "Side view" },
  { src: "/boots-tongue.jpeg", alt: "tongue view" },
  { src: "/boots-sole.jpeg", alt: "Sole view" },
  { src: "/boots-sole-2.jpeg", alt: "Sole view" },
];

const pvcImages = [
  { src: "/pvc-boot-2.jpeg", alt: "PVC Safety Boot — full view" },
  { src: "/pvc-boot-1.jpeg", alt: "PVC Safety Boot — marking" },
];

const jacketImages = [
  { src: "/jacket-3.jpg", alt: "Reflective safety jacket — packaged view" },
  { src: "/jacket-4.jpg", alt: "Reflective safety jacket — label & mesh" },
];

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("steel");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "pvc" || hash === "reflect" || hash === "steel") {
        setActiveTab(hash);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="specs" className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <TabsList className="w-full md:w-auto dark:text-white">
              <TabsTrigger
                value="steel"
                id="tab-steel"
                className="cursor-pointer"
              >
                Power Safety Boot
              </TabsTrigger>
              <TabsTrigger value="pvc" id="tab-pvc" className="cursor-pointer">
                PVC Safety Boot
              </TabsTrigger>
              <TabsTrigger
                value="reflect"
                id="tab-reflect"
                className="cursor-pointer"
              >
                Reflective Jacket
              </TabsTrigger>
            </TabsList>

            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
              <Button
                asChild
                className="rounded-full bg-brand-coal dark:bg-white text-white dark:text-foreground w-full md:w-fit text-lg md:text-sm"
              >
                <Link
                  href={`https://wa.me/${
                    site.whatsapp
                  }?text=${encodeURIComponent(
                    "Hi! I'd like to place an order."
                  )}`}
                  target="_blank"
                >
                  <FaWhatsapp className="size-6 mr-1 text-green-500" />
                  WhatsApp to Order
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full dark:text-brand-gold w-full md:w-fit text-lg md:text-sm"
              >
                <Link href="/contact">
                  <FaQuestionCircle className="size-6 mr-1" />
                  Ask a Question
                </Link>
              </Button>
            </div>
          </div>

          <TabsContent value="steel" className="space-y-6">
            <ProductSection
              isMain
              images={steelImages}
              title={site.name}
              description="Built for industrial worksites: protection, traction, and comfort that lasts through long shifts."
              badges={["New", "Steel Toe", "Slip-Resistant"]}
              specs={steelSpecs}
            />
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Sizes available on request • Bulk & corporate orders supported •
              Fast nationwide delivery
            </p>
          </TabsContent>

          <TabsContent value="pvc">
            <ProductSection
              // variant="compact"
              images={pvcImages}
              title="PVC Safety Boot"
              description="Durable PVC safety boot for wet and industrial environments."
              badges={["New", "PVC", "Waterproof"]}
              specs={pvcSpecs}
            />
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Sizes available on request • Bulk & corporate orders supported •
              Fast nationwide delivery
            </p>
          </TabsContent>

          <TabsContent value="reflect">
            <ProductSection
              // variant="compact"
              images={jacketImages}
              title="Reflective Safety Jacket"
              description="High-visibility safety vest for road work, construction and warehouse environments."
              badges={["New", "Hi-Vis"]}
              specs={jacketSpecs}
            />
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Sizes available on request • Bulk & corporate orders supported •
              Fast nationwide delivery
            </p>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
