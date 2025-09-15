"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type Slide = { src: string; alt: string };

type Props = {
  images: Slide[];
  aspectClass: string; // e.g. "aspect-[3/2]" or "aspect-[4/3]"
  priorityFirst?: boolean;
  showThumbs?: boolean;
};

export function ImageSlider({
  images,
  aspectClass,
  priorityFirst = true,
  showThumbs = true,
}: Props) {
  const [index, setIndex] = React.useState(0);
  const count = images.length || 1;
  const current = images[index] ?? images[0];

  // Keyboard navigation
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  // Simple touch swipe
  const touch = React.useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      setIndex((i) => (dx < 0 ? (i + 1) % count : (i - 1 + count) % count));
    }
    touch.current = null;
  };

  return (
    <div className="space-y-3 group">
      {/* Main frame */}
      <div
        className={`relative overflow-hidden rounded-2xl  shadow-card bg-card border border-border ${aspectClass}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* blurred backdrop */}
        <Image
          src={current.src}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          aria-hidden
          className="absolute inset-0 object-cover h-80 blur-lg scale-110 opacity-50"
          priority={priorityFirst}
        />
        {/* foreground */}
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="relative z-10 object-contain"
          priority={priorityFirst}
        />

        {/* Prev / Next */}
        {count > 1 && (
          <>
            <Button
              size="icon"
              aria-label="Previous image"
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white text-sm backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white md:opacity-0 md:group-hover:opacity-100 z-10 cursor-pointer"
            >
              <ChevronLeft />
            </Button>
            <Button
              size="icon"
              aria-label="Next image"
              onClick={() => setIndex((i) => (i + 1) % count)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white text-sm backdrop-blur hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white md:opacity-0 md:group-hover:opacity-100 z-10 cursor-pointer"
            >
              <ChevronRight />
            </Button>

            {/* dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    i === index ? "bg-white" : "bg-white/50"
                  }`}
                  aria-hidden
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbs && count > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border transition cursor-pointer ${
                i === index
                  ? "border-brand-gold ring-2 ring-brand-gold/40"
                  : "border-border"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
