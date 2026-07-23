import { useState } from "react";
import {
  Menu,
  X,
  Phone,
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
    <header className="absolute top-0 left-0 right-0 z-50 text-white font-sans">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#111111] text-white text-[11px] tracking-widest uppercase border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-2.5">
          {/* Left: Currency selector */}
          <div className="hidden md:flex items-center gap-1 text-white/80 hover:text-white cursor-pointer transition-colors">
            <Globe size={13} />
            <span>BANGLADESH (BDT ৳)</span>
            <ChevronDown size={11} />
          </div>

          {/* Center: Main announcement statement */}
          <p className="mx-auto md:mx-0 font-medium underline underline-offset-4 decoration-white/40 tracking-wider text-center">
            ONLINE STORE IS ON VACATION FOR TWO WEEKS STARTS JULY 4. YOUR ORDERS WILL BE SHIPPED JULY 23
          </p>

          {/* Right: Phone number */}
          <a
            href="tel:4169441464"
            className="hidden md:block font-medium hover:text-amber-200 transition-colors tracking-widest"
          >
            416.944.1464
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <div className="bg-gradient-to-b from-black/85 via-black/40 to-transparent pt-4 pb-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Row: Logo & Utility Icons */}
          <div className="flex items-center justify-between relative py-2">
            {/* Left Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>

            {/* Centered TRESSE Brand Logo */}
            <a href="/" className="mx-auto lg:mx-0 flex flex-col items-center group">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.35em] font-medium text-[#D4AF37] group-hover:text-amber-100 transition-colors">
                TRESSE
              </span>
              <span className="text-[9px] tracking-[0.4em] text-amber-100/70 font-light uppercase -mt-0.5">
                HAIR, UNDIVIDED.
              </span>
            </a>

            {/* Right Icons */}
            <div className="flex items-center gap-5 text-white/90">
              <button aria-label="Search" className="hover:text-amber-200 transition-colors">
                <Search size={18} strokeWidth={1.75} />
              </button>
              <a href="/account" aria-label="Account" className="hidden sm:block hover:text-amber-200 transition-colors">
                <User size={18} strokeWidth={1.75} />
              </a>
              <a href="/cart" aria-label="Cart" className="hover:text-amber-200 transition-colors relative">
                <ShoppingBag size={18} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Bottom Row: Desktop Navigation Links */}
          <nav className="hidden lg:flex justify-center items-center mt-4">
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
                    className={`transition-colors py-1 inline-block relative ${
                      link.active ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    
                    {/* Hover Underline effect */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-white transition-transform duration-200 origin-left ${
                        link.active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>

                  {/* Dropdown Menu */}
                  {link.children && (
                    <ul
                      className={`absolute left-0 top-full w-52 bg-black/90 backdrop-blur-md border border-white/10 shadow-2xl py-3 transition-all duration-200 ${
                        servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block px-5 py-2 text-xs font-normal text-white/80 hover:text-amber-200 hover:bg-white/5 transition-colors"
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
        className={`fixed inset-0 z-50 bg-black/95 text-white transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.3em] text-[#D4AF37]">TRESSE</span>
            <span className="text-[8px] tracking-[0.3em] text-amber-100/70">HAIR, UNDIVIDED.</span>
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