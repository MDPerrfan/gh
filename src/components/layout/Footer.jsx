import React, { useState } from "react";

function InstagramIcon({ size = 18, strokeWidth = 1.5, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
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

function FacebookIcon({ size = 18, strokeWidth = 1.5, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#1C0E06] text-[#F9F3EA] border-t border-[#E3B888]/20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          {/* <h3 className="font-serif text-2xl tracking-wide text-[#E3B888] uppercase">
            Glamour Hairstyles
          </h3> */}
          <img className="w-[80px] md:w-[100px]" src="gh.png" alt="Glamour Hairstyles" />
          <p className="text-[10px] tracking-[0.3em] text-[#E3B888]/80 font-light uppercase -mt-3">
            By Carlos Henrique
          </p>
          <p className="text-[#F9F3EA]/70 text-xs sm:text-sm leading-relaxed font-sans font-light pt-2">
            "The best colour in the whole world is the one that looks good on you." Premier salon offering signature styling and specialized hair color treatments.
          </p>
        </div>

        {/* Navigation Column 1 */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#E3B888] font-sans font-semibold mb-5">
            Explore
          </p>
          <ul className="space-y-3 text-xs sm:text-sm font-sans font-light text-[#F9F3EA]/75">
            <li>
              <a href="/services" className="hover:text-[#E3B888] transition-colors">
                Treatments &amp; Services
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-[#E3B888] transition-colors">
                Hair Specialists
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-[#E3B888] transition-colors">
                Shop Products
              </a>
            </li>
            <li>
              <a href="/book" className="hover:text-[#E3B888] transition-colors">
                Book Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Column 2 */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#E3B888] font-sans font-semibold mb-5">
            Company
          </p>
          <ul className="space-y-3 text-xs sm:text-sm font-sans font-light text-[#F9F3EA]/75">
            <li>
              <a href="/about" className="hover:text-[#E3B888] transition-colors">
                About Carlos Henrique
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#E3B888] transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-[#E3B888] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#E3B888] transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#E3B888] font-sans font-semibold mb-5">
            Stay Connected
          </p>
          <p className="text-xs sm:text-sm text-[#F9F3EA]/70 mb-4 font-sans font-light">
            Subscribe for exclusive offers and color care insights.
          </p>
          {submitted ? (
            <p className="text-xs sm:text-sm font-sans text-[#E3B888] italic">
              Thank you for subscribing to Glamour Hairstyles.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex border-b border-[#E3B888]/40 focus-within:border-[#E3B888] transition-colors py-1"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent flex-1 py-1.5 text-xs sm:text-sm text-[#F9F3EA] placeholder:text-[#F9F3EA]/40 focus:outline-none font-sans"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#E3B888] hover:text-[#F9F3EA] transition-colors pl-3"
              >
                JOIN
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#E3B888]/15 bg-[#1C0E06]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] sm:text-xs text-[#F9F3EA]/50 font-sans">
          <p>© {new Date().getFullYear()} Glamour Hairstyles by Carlos Henrique. All rights reserved.</p>
          <p className="tracking-wide">Engineered for Hair Transformation &amp; Color Excellence.</p>
        </div>
      </div>
    </footer>
  );
}