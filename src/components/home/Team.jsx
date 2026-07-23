import React from "react";

function InstagramIcon({ size = 20, className }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const TEAM = [
  {
    name: "DINO",
    role: "OWNER",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
  {
    name: "MARLISE",
    role: "SENIOR STYLIST",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
  {
    name: "KRISTY",
    role: "STYLIST",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
  {
    name: "MITCH",
    role: "STYLIST",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
  {
    name: "ZORI",
    role: "ASSISTANT",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
  {
    name: "NICOLE",
    role: "SENIOR STYLIST",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
  {
    name: "JAYME",
    role: "SOCIAL MEDIA MANAGER",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
  {
    name: "NINA",
    role: "STYLIST",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
  {
    name: "AVIDEH",
    role: "STYLIST",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    instagram: "#",
  },
];

export default function Team() {
  return (
    <section className="bg-[#F2EDE6] py-24">
      {/* Container aligned with Services section (max-w-7xl px-6) */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-[#681428] font-sans font-semibold mb-2">
            Dedicated To You
          </p>
          <h2 className="font-serif italic text-4xl sm:text-5xl text-[#1A0810]">
            Meet Our Team
          </h2>
        </div>

        {/* 3-Column Grid matched to width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM.map((member, i) => (
            <a
              key={i}
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[4/5] overflow-hidden bg-[#1A0810] border border-[#B8893F]/20 shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Profile Photo */}
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0810]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Bottom-Left Details Overlay */}
              <div className="absolute bottom-5 left-5 z-10 text-left pointer-events-none">
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#B8893F] font-semibold mb-0.5">
                  {member.role}
                </p>
                <h3 className="font-sans font-medium text-base tracking-wider text-[#F2EDE6] uppercase">
                  {member.name}
                </h3>
              </div>

              {/* Hover Blur Overlay with Instagram Icon */}
              <div className="absolute inset-0 bg-[#1A0810]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-[#1A0810]/80 border border-[#B8893F]/50 text-[#E8D5B0] transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  <InstagramIcon size={20} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}