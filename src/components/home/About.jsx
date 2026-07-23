import React from "react";

export default function About() {
  return (
    <section className="bg-[#F2EDE6] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image with Accent Gold Frame */}
        <div className="relative">
          <div className="relative z-10 overflow-hidden border border-[#B8893F]/25 bg-[#1A0810] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop"
              alt="TRESSE specialist performing scalp therapy"
              className="w-full h-[480px] sm:h-[540px] object-cover object-center transition-transform duration-700 hover:scale-102"
            />
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
            At TRESSE, we believe true hair transformation begins at the root. Rather than covering up damage, our customized trichology protocols and targeted therapies nourish, rebuild, and restore your hair’s natural strength.
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