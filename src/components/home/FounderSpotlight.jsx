import React from "react";
import { motion } from "framer-motion";

export default function FounderSpotlight() {
  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen bg-[#1A0810] text-[#F2EDE6] overflow-hidden flex items-center">
      {/* 1. Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1920&auto=format&fit=crop"
          alt="TRESSE Hair Expertise"
          className="w-full h-full object-cover object-center filter brightness-[0.85]"
        />
        {/* Dark luxury gradient overlays for ideal contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0810] via-[#1A0810]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0810] via-transparent to-[#1A0810]/40" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-xl">
          {/* 3. Bidirectional Animated Card */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 bg-[#1A0810]/85 backdrop-blur-md border border-[#B8893F]/30 shadow-2xl relative"
          >
            {/* Corner Decorative Accent */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#B8893F]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#B8893F]" />

            <p className="text-xs uppercase tracking-[0.3em] text-[#B8893F] mb-4 font-sans font-semibold flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#B8893F]" />
              Rooted in Science &amp; Expertise
            </p>

            <h2 className="font-serif italic text-3xl sm:text-5xl leading-[1.15] mb-6 text-[#E8D5B0]">
              Decades Of Experience. <br />
              <span className="text-[#F2EDE6]">One Standard Of Excellence.</span>
            </h2>

            <p className="font-sans font-light text-sm sm:text-base text-[#F2EDE6]/80 leading-relaxed mb-8">
              At TRESSE, we don't just style hair—we transform it from within. Guided by advanced hair science and a deep understanding of scalp health, our treatments nourish deeply to restore natural strength, vitality, and lasting confidence.
            </p>

            <a
              href="/about"
              className="inline-block bg-[#681428] border border-[#B8893F]/40 text-[#F2EDE6] px-8 py-4 text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-[#B8893F] hover:text-[#1A0810] transition-colors duration-300 shadow-lg"
            >
              Discover Our Philosophy
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}