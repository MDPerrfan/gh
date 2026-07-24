import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
const REVIEWS = [
  {
    quote: "GH has completely transformed my hair. It feels stronger, smoother, and healthier than ever.",
    name: "Ananya R.",
    rating: 5,
  },
  {
    quote: "Healthy hair is not a trend, it's a commitment. GH understands hair science unlike any other salon.",
    name: "Mariya K.",
    rating: 5,
  },
  {
    quote: "The scalp recovery treatment was incredible. They don't just style, they restore your natural confidence.",
    name: "Nusrat J.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length);

  return (
    <section className="bg-[#1A0810] text-[#F2EDE6] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Quote size={36} strokeWidth={1} className="mx-auto text-[#B8893F] mb-6" />
        <p className="font-serif italic text-2xl sm:text-3xl text-[#E8D5B0] leading-snug mb-6">
          "{REVIEWS[index].quote}"
        </p>

        <div className="flex justify-center gap-1 mb-3">
          {Array.from({ length: REVIEWS[index].rating }).map((_, i) => (
            <Star key={i} size={16} className="fill-[#B8893F] text-[#B8893F]" />
          ))}
        </div>

        <p className="text-xs font-sans uppercase tracking-widest text-[#F2EDE6]/60 mb-10">{REVIEWS[index].name}</p>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="p-2 border border-[#B8893F]/40 text-[#E8D5B0] hover:border-[#B8893F] hover:text-[#B8893F] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-[#B8893F]" : "w-1.5 bg-[#F2EDE6]/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next review"
            className="p-2 border border-[#B8893F]/40 text-[#E8D5B0] hover:border-[#B8893F] hover:text-[#B8893F] transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}