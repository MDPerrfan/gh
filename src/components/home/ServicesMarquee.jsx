import React from "react";

const MARQUEE_ITEMS = [
  "HAIR SCIENCE",
  "SCALP RECOVERY",
  "KERATIN THERAPY",
  "HAIR TRANSFORMATION",
  "NOURISH & RESTORE",
  "HAIR EXPERTISE",
];

export default function ServicesMarquee() {
  // Repeating the array to ensure continuous horizontal coverage
  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full overflow-hidden bg-[#1A0810] border-y border-[#B8893F]/20 py-3.5 select-none">
      {/* Edge gradient overlays for a modern fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#1A0810] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#1A0810] to-transparent" />

      {/* Marquee Track Container */}
      <div className="flex w-max animate-tresse-marquee hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-4 text-[#E8D5B0] font-sans font-light text-xs sm:text-sm uppercase tracking-[0.25em]"
          >
            <span>{item}</span>
            <span className="text-[#B8893F] text-[10px] opacity-70">✦</span>
          </div>
        ))}
      </div>

      {/* Embedded CSS for smooth continuous scrolling */}
      <style jsx>{`
        @keyframes tresseMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-tresse-marquee {
          animation: tresseMarquee 35s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-tresse-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}