import { CtaStrip } from "@/components/home/cta-strip";
import { DirectorSection } from "@/components/home/director";
import { Features } from "@/components/home/features";
import { Gallery } from "@/components/home/gallery";
import { Hero } from "@/components/home/hero";

export default function HomePage() {
  return (
    <section className="relative bg-[radial-gradient(ellipse_at_top,_rgba(255,248,228,0.35),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.06),transparent_60%)]">
      <Hero />
      <Features />
      <Gallery />
      <DirectorSection />
      <CtaStrip />
    </section>
  );
}
