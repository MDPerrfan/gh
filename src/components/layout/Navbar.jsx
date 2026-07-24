import { useState } from "react";
import {
  Menu,
  X,
  Search,
  User,
  ShoppingBag,
  Globe,
  ChevronDown,
} from "lucide-react";

const NAV_LINKS = [
  { label: "SHOP", href: "/shop", active: true },
  { label: "SHOP BY BRAND", href: "/brands" },
  { label: "BOOK NOW", href: "/book" },
  { label: "PRICES", href: "/prices" },
  { label: "OUR STYLISTS", href: "/stylists" },
  {
    label: "SERVICES",
    href: "/services",
    children: [
      { label: "Hair Colouring", href: "/services/hair-colouring" },
      { label: "Hair Cutting", href: "/services/hair-cutting" },
      { label: "Hair Extensions", href: "/services/hair-extensions" },
      { label: "Skin & Facials", href: "/services/skin" },
      { label: "Makeup & Bridal", href: "/services/makeup" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-[#F9F3EA] font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-[#1C0E06] text-[#F9F3EA] text-[11px] tracking-widest uppercase border-b border-[#E3B888]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-2.5">
          <div className="hidden md:flex items-center gap-1 text-[#F9F3EA]/80 hover:text-white cursor-pointer transition-colors">
            <Globe size={13} />
            <span>Guyana (USD $)</span>
            <ChevronDown size={11} />
          </div>

          <p className="mx-auto md:mx-0 font-medium underline underline-offset-4 decoration-[#E3B888]/40 tracking-wider text-center">
            "The best colour in the whole world is the one that looks good on you."
          </p>

          <a
            href="tel:+5926816014"
            className="hidden md:block font-medium hover:text-[#E3B888] transition-colors tracking-widest"
          >
            +592 681 6014
          </a>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="bg-gradient-to-b from-[#2D1609]/90 via-[#2D1609]/50 to-transparent pt-2 pb-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between relative py-2">
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>

            {/* Brand Logo */}
            <a href="/" className="mx-auto lg:mx-0 flex flex-col items-center group text-center">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] font-light text-[#E3B888] group-hover:text-[#F9F3EA] transition-colors uppercase">
                <img className="w-[100px] hidden md:block" src="gh.png" alt="Glamour Hairstyles" />
              </span>
              <span className="text-[7px] tracking-[0.35em] text-[#E3B888]/80 font-light uppercase mt-0.5 hidden lg:block">
                BY CARLOS HENRIQUE
              </span>
            </a>

            {/* Right Icons */}
            <div className="flex items-center gap-5 text-white/90">
              <button aria-label="Search" className="hover:text-[#E3B888] transition-colors">
                <Search size={18} strokeWidth={1.75} />
              </button>
              <a href="/account" aria-label="Account" className="hidden sm:block hover:text-[#E3B888] transition-colors">
                <User size={18} strokeWidth={1.75} />
              </a>
              <a href="/cart" aria-label="Cart" className="hover:text-[#E3B888] transition-colors relative">
                <ShoppingBag size={18} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex justify-center items-center mt-2">
            <ul className="flex items-center gap-8 text-xs font-semibold tracking-[0.18em] uppercase">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.label}
                  className="relative group py-1"
                  onMouseEnter={() => link.children && setServicesOpen(true)}
                  onMouseLeave={() => link.children && setServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    className={`transition-colors py-1 inline-block relative ${link.active ? "text-[#E3B888]" : "text-[#F9F3EA]/80 hover:text-[#E3B888]"
                      }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E3B888] transition-transform duration-200 origin-left ${link.active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </a>

                  {link.children && (
                    <ul
                      className={`absolute left-0 top-full w-52 bg-[#1C0E06]/95 backdrop-blur-md border border-[#E3B888]/20 shadow-2xl py-3 transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                        }`}
                    >
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block px-5 py-2 text-xs font-normal text-[#F9F3EA]/80 hover:text-[#E3B888] hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#1C0E06] text-[#F9F3EA] transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E3B888]/20">
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.2em] text-[#E3B888]">GLAMOUR HAIRSTYLES</span>
            <span className="text-[8px] tracking-[0.3em] text-[#E3B888]/80">BY CARLOS HENRIQUE</span>
          </div>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col px-6 py-6 gap-4 text-sm font-medium tracking-widest uppercase">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="block py-2 border-b border-white/10" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}