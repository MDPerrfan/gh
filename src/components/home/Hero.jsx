import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop",
    eyebrow: "ROOTED IN HAIR SCIENCE",
    heading: "Where Science Meets Hair Transformation",
    subheading: "Advanced scalp health & hair treatment protocols engineered for lasting vitality.",
    primaryCta: "BOOK CONSULTATION",
    primaryHref: "/book",
    secondaryCta: "EXPLORE TREATMENTS",
    secondaryHref: "/services",
  },
  {
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop",
    eyebrow: "SCALP & BOND RECOVERY",
    heading: "Restoring Strength From Within",
    subheading: "Deep keratin therapy & targeted oil infusions customized for your hair's unique DNA.",
    primaryCta: "VIEW SERVICES",
    primaryHref: "/services",
    secondaryCta: "OUR PHILOSOPHY",
    secondaryHref: "/about",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // Auto-play slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#1A0810] text-[#F2EDE6]">
      {/* Background Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === active ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="h-full w-full object-cover object-center"
          />
          {/* TRESSE Signature Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0810]/95 via-[#1A0810]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0810] via-transparent to-transparent opacity-80" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 sm:px-12">
        <div className="max-w-3xl sm:pt-28">
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.3em] font-medium text-[#B8893F] mb-4 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#B8893F]" />
            {SLIDES[active].eyebrow}
          </p>

          {/* Heading */}
          <h1 className="font-serif italic text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-[#E8D5B0] mb-6 transition-all duration-700">
            {SLIDES[active].heading}
          </h1>

          {/* Subheading */}
          <p className="font-sans font-light text-sm sm:text-base text-[#F2EDE6]/80 max-w-lg mb-8 leading-relaxed">
            {SLIDES[active].subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={SLIDES[active].primaryHref}
              className="bg-[#681428] border border-[#B8893F]/40 text-[#F2EDE6] font-sans font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 text-center hover:bg-[#B8893F] hover:text-[#1A0810] transition-colors duration-300 shadow-xl"
            >
              {SLIDES[active].primaryCta}
            </a>
            <a
              href={SLIDES[active].secondaryHref}
              className="bg-transparent border border-[#B8893F]/50 text-[#E8D5B0] font-sans font-medium text-xs tracking-[0.2em] uppercase px-8 py-4 text-center hover:bg-[#E8D5B0]/10 hover:border-[#E8D5B0] transition-colors duration-300"
            >
              {SLIDES[active].secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Controls & Pagination */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-20 flex items-center gap-6">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 transition-all duration-300 ${
                i === active ? "w-8 bg-[#B8893F]" : "w-2 bg-[#F2EDE6]/30 hover:bg-[#F2EDE6]/60"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="p-3 border border-[#B8893F]/30 text-[#E8D5B0] hover:border-[#B8893F] hover:text-[#B8893F] bg-[#1A0810]/50 backdrop-blur-sm transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="p-3 border border-[#B8893F]/30 text-[#E8D5B0] hover:border-[#B8893F] hover:text-[#B8893F] bg-[#1A0810]/50 backdrop-blur-sm transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}