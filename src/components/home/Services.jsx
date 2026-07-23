import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    title: "Scalp Recovery",
    description: "Soothing, balancing therapy engineered for deep scalp health and rejuvenation.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop",
    href: "/services/scalp-recovery",
  },
  {
    title: "Keratin Therapy",
    description: "Deep repair, bond rebuilding, and long-lasting silky smoothness.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop",
    href: "/services/keratin-therapy",
  },
  {
    title: "Nourish & Restore",
    description: "Targeted hair oil & botanical serum infusions that revive damaged strands.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    href: "/services/nourish-restore",
  },
  {
    title: "Precision Hair Science",
    description: "Microscopic scalp analysis and custom targeted treatment protocols.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1000&auto=format&fit=crop",
    href: "/services/hair-science",
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Maximum index (showing 2 cards at once on desktop)
  const maxIndex = SERVICES.length - 2;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Autoplay functionality (advances every 4 seconds when not hovered)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <section className="bg-[#F2EDE6] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#681428] font-sans font-semibold mb-3 flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#681428]" />
              Targeted Treatments For Real Results
            </p>
            <h2 className="font-serif italic text-4xl sm:text-5xl text-[#1A0810]">
              Specialized Hair &amp; Scalp Care
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous service"
              className="p-3 rounded-full border border-[#B8893F]/40 text-[#1A0810] hover:bg-[#1A0810] hover:text-[#E8D5B0] hover:border-[#1A0810] transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next service"
              className="p-3 rounded-full border border-[#B8893F]/40 text-[#1A0810] hover:bg-[#1A0810] hover:text-[#E8D5B0] hover:border-[#1A0810] transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 2)}%)`,
            }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="w-full sm:w-[calc(50%-12px)] flex-shrink-0"
              >
                {/* Taller Card Height: h-[580px] sm:h-[640px] */}
                <a
                  href={service.href}
                  className="group relative block h-[580px] sm:h-[600px] overflow-hidden border border-[#B8893F]/25 bg-[#1A0810] shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0810]/95 via-[#1A0810]/35 to-transparent transition-opacity duration-300" />

                  {/* Card Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 text-[#F2EDE6] flex flex-col justify-end z-10">
                    <h3 className="font-serif italic text-3xl sm:text-4xl text-[#E8D5B0] mb-3 group-hover:text-[#B8893F] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base font-sans font-light text-[#F2EDE6]/80 leading-relaxed mb-6 max-w-md">
                      {service.description}
                    </p>
                    <div>
                      <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] border-b border-[#B8893F] text-[#E8D5B0] pb-1 opacity-90 sm:opacity-0 sm:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 inline-block">
                        Explore Treatment
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? "w-10 bg-[#681428]"
                  : "w-2.5 bg-[#B8893F]/40 hover:bg-[#B8893F]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}