import "@/styles/hero.css";


export function HeroParticles() {
  const dots = Array.from({ length: 10 });
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10">
        {dots.map((_, i) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="absolute block rounded-full bg-brand-gold/10 blur-[1px] animate-float"
            style={{
              width: 8 + (i % 3) * 2,
              height: 8 + (i % 3) * 2,
              left: `${(i * 9 + 5) % 95}%`,
              top: `${(i * 13 + 10) % 90}%`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* <style jsx>{`
        
      `}</style> */}
    </>
  );
}