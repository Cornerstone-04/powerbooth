"use client";
import "@/styles/hero.css";

export function HeroParticles() {
  const dots = Array.from({ length: 16 });

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {dots.map((_, i) => {
        const size = 10 + (i % 3) * 3; // 10–16px
        return (
          <span
            key={i}
            className="absolute block rounded-full bg-brand-gold/20 blur-[2px] animate-float"
            style={{
              width: size,
              height: size,
              left: `${(i * 9 + 5) % 95}%`,
              top: `${(i * 13 + 10) % 90}%`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${6 + (i % 5)}s`,
              // optional: make some dots lighter/darker
              opacity: 0.6 - (i % 3) * 0.1,
            }}
          />
        );
      })}
    </div>
  );
}
