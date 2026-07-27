import React, { useState } from "react";
import { Sparkles, ShoppingBag } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Truss Deluxe Prime Spray",
    brand: "TRUSS PROFESSIONAL",
    tagline: "Intense Shine & Repair",
    description:
      "Versatile protein spray formulated to restore fragile, damaged hair. Rebuilds internal hair structure while protecting against thermal heat and color fading.",
    price: "$18,000",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1000&auto=format&fit=crop",
    category: "Leave-In Treatment",
  },
  {
    id: 2,
    name: "Wella Fusion Intense Repair Mask",
    brand: "WELLA PROFESSIONALS",
    tagline: "Amino Acid Restorative Care",
    description:
      "Luxurious, creamy mask engineered to target hair damage and protect against breakage. Enriched with silk amino acids to leave hair silkier and noticeably resilient.",
    price: "$15,000",
    image:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1000&auto=format&fit=crop",
    category: "Deep Conditioning",
  },
  {
    id: 3,
    name: "Truss Gloss Fluid Serum",
    brand: "TRUSS PROFESSIONAL",
    tagline: "Mirror Finish & Frizz Control",
    description:
      "Ultra-lightweight finishing serum designed to deliver incredible high-gloss shine, seal split ends, and eliminate unwanted frizz without weighing hair down.",
    price: "$12,000",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop",
    category: "Finishing & Polish",
  },
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-[#1A0810] py-24 border-t border-[#B8893F]/20 text-[#F2EDE6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#B8893F] font-sans font-semibold mb-3 flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[#B8893F]" />
              Professional Home Care
            </p>
            <h2 className="font-serif italic text-4xl sm:text-5xl text-[#E8D5B0]">
              Curated Hair Products
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.15em] transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#B8893F] text-[#1A0810] border-[#B8893F] font-medium"
                    : "bg-[#14060C] text-[#E8D5B0]/70 border-[#B8893F]/20 hover:border-[#B8893F]/50 hover:text-[#E8D5B0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative border border-[#B8893F]/25 bg-[#14060C] flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#B8893F]/60 transition-all duration-500"
            >
              {/* Product Visual Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#1A0810]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center filter brightness-[0.9] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14060C] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#1A0810]/85 backdrop-blur-md border border-[#B8893F]/30 text-[#B8893F] text-[10px] font-sans font-semibold uppercase tracking-[0.2em] px-3 py-1 inline-block">
                    {product.brand}
                  </span>
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-4 right-4 z-10 bg-[#681428] border border-[#B8893F]/40 text-[#E8D5B0] text-xs font-sans font-semibold px-3 py-1.5 shadow-md">
                  {product.price}
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#B8893F]/80 mb-1 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#B8893F]" />
                    {product.tagline}
                  </p>
                  
                  <h3 className="font-serif italic text-2xl text-[#E8D5B0] mb-3 group-hover:text-[#B8893F] transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="font-sans font-light text-sm text-[#F2EDE6]/75 leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>

                {/* Direct Action Link / Inquiry */}
                <div className="pt-4 border-t border-[#B8893F]/15 flex items-center justify-between">
                  <a
                    href="https://wa.me/5926816014"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#E8D5B0] hover:text-[#B8893F] transition-colors duration-300 group/link"
                  >
                    <ShoppingBag size={14} className="text-[#B8893F] group-hover/link:scale-110 transition-transform" />
                    Inquire At Studio
                  </a>

                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#F2EDE6]/40">
                    In Stock
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-16 p-6 border border-[#B8893F]/20 bg-[#14060C] text-center max-w-2xl mx-auto">
          <p className="font-sans font-light text-xs text-[#E8D5B0]/80 tracking-wider uppercase">
            All featured formulas are used during studio appointments and available for purchase directly at our Georgetown salon.
          </p>
        </div>
      </div>
    </section>
  );
}