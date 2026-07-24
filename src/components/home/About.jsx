import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Add all your best work image URLs here!
const GALLERY_IMAGES = [
  {
    url: "one.jpg",
    alt: "Glamour Hairstyles best work 1",
  },
  {
    url: "two.jpg",
    alt: "Glamour Hairstyles best work 2",
  },
  {
    url: "three.jpg",
    alt: "Glamour Hairstyles best work 3",
  },
  {
    url: "four.jpg",
    alt: "Glamour Hairstyles best work 4",
  },
  {
    url: "five.jpg",
    alt: "Glamour Hairstyles best work 5",
  },
  {
    url: "six.jpg",
    alt: "Glamour Hairstyles best work 6",
  },
  {
    url: "seven.jpg",
    alt: "Glamour Hairstyles best work 7",
  },
  {
    url: "eight.jpg",
    alt: "Glamour Hairstyles best work 8",
  },
];

export default function About() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-play timer for slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  return (
    <section className="bg-[#F2EDE6] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Slideshow Gallery */}
        <div className="relative">
          <div className="relative z-10 overflow-hidden border border-[#B8893F]/25 bg-[#1A0810] shadow-xl h-[480px] sm:h-[600px]">
            {GALLERY_IMAGES.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none">
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="pointer-events-auto p-2 bg-transparent border-none  text-[#E8D5B0] hover:bg-[#B8893F] hover:text-[#1A0810] transition-colors duration-300 backdrop-blur-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="pointer-events-auto p-2 bg-transparent border-none  text-[#E8D5B0] hover:bg-[#B8893F] hover:text-[#1A0810] transition-colors duration-300 backdrop-blur-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {GALLERY_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIdx(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 transition-all duration-300 ${
                    index === currentIdx
                      ? "w-6 bg-[#B8893F]"
                      : "w-2 bg-[#F2EDE6]/40 hover:bg-[#F2EDE6]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Decorative Backdrop Gold Accent Box */}
          <div className="absolute -bottom-6 -right-6 hidden sm:block w-3/4 h-3/4 border border-[#B8893F]/40 z-0 pointer-events-none" />
        </div>

        {/* Right Side: Copy & Narrative */}
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.3em] text-[#681428] font-sans font-semibold mb-4 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#681428]" />
            BUILT ON HAIR SCIENCE
          </p>

          {/* Heading */}
          <h2 className="font-serif italic text-4xl sm:text-5xl text-[#1A0810] leading-[1.15] mb-6">
            Restoring Natural Vitality, <br />
            <span className="text-[#681428]">Never Masking It</span>
          </h2>

          {/* Body Paragraphs */}
          <p className="font-sans font-light text-sm sm:text-base text-[#1A0810]/80 leading-relaxed mb-5">
            At Glamour Hairstyles by Carlos Henrique, we believe true hair transformation begins at the root. Rather than covering up damage, our customized trichology protocols and targeted therapies nourish, rebuild, and restore your hair’s natural strength.
          </p>

          <p className="font-sans font-light text-sm sm:text-base text-[#1A0810]/80 leading-relaxed mb-8">
            Steeped in advanced scalp diagnostics and high-performance botanicals, our specialists blend modern hair science with meticulous craft to deliver measurable, lasting vitality.
          </p>

          {/* CTA Link */}
          <a
            href="/about"
            className="inline-block border-b border-[#B8893F] text-xs font-sans font-medium uppercase tracking-[0.2em] text-[#1A0810] pb-1 hover:text-[#681428] hover:border-[#681428] transition-colors duration-300"
          >
            DISCOVER OUR PHILOSOPHY
          </a>
        </div>
      </div>
    </section>
  );
}