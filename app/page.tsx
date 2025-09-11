import { CtaStrip } from "@/components/home/cta-strip";
import { DirectorSection } from "@/components/home/director";
import { Features } from "@/components/home/features";
import { Gallery } from "@/components/home/gallery";
import { Hero } from "@/components/home/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <DirectorSection />
      <CtaStrip />
    </>
  );
}
