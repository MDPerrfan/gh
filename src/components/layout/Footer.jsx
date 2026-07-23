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
    <footer className="  bg-[#10050a] text-[#F2EDE6] border-t border-[#B8893F]/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <h3 className="font-serif italic text-3xl tracking-wide text-[#E8D5B0]">
            TRESSE
          </h3>
          <p className="text-[#F2EDE6]/70 text-xs sm:text-sm leading-relaxed font-sans font-light">
            Premier destination for advanced scalp recovery, keratin therapy, and science-driven hair restoration.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2.5 rounded-full border border-[#B8893F]/30 text-[#E8D5B0] hover:border-[#B8893F] hover:text-[#B8893F] transition-colors duration-300"
            >
              <InstagramIcon size={16} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-2.5 rounded-full border border-[#B8893F]/30 text-[#E8D5B0] hover:border-[#B8893F] hover:text-[#B8893F] transition-colors duration-300"
            >
              <FacebookIcon size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Navigation Links Column 1 */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#B8893F] font-sans font-semibold mb-5">
            Explore
          </p>
          <ul className="space-y-3 text-xs sm:text-sm font-sans font-light text-[#F2EDE6]/75">
            <li>
              <a href="/services" className="hover:text-[#E8D5B0] transition-colors">
                Treatments &amp; Services
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-[#E8D5B0] transition-colors">
                Hair Specialists
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-[#E8D5B0] transition-colors">
                Shop Products
              </a>
            </li>
            <li>
              <a href="/book" className="hover:text-[#E8D5B0] transition-colors">
                Book Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Links Column 2 */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#B8893F] font-sans font-semibold mb-5">
            Company
          </p>
          <ul className="space-y-3 text-xs sm:text-sm font-sans font-light text-[#F2EDE6]/75">
            <li>
              <a href="/about" className="hover:text-[#E8D5B0] transition-colors">
                About TRESSE
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#E8D5B0] transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-[#E8D5B0] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#E8D5B0] transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#B8893F] font-sans font-semibold mb-5">
            Stay Connected
          </p>
          <p className="text-xs sm:text-sm text-[#F2EDE6]/70 mb-4 font-sans font-light">
            Subscribe for exclusive treatment offers, hair science insights &amp; news.
          </p>
          {submitted ? (
            <p className="text-xs sm:text-sm font-sans text-[#E8D5B0] italic">
              Thank you — you are now subscribed to TRESSE.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex border-b border-[#B8893F]/40 focus-within:border-[#B8893F] transition-colors py-1"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent flex-1 py-1.5 text-xs sm:text-sm text-[#F2EDE6] placeholder:text-[#F2EDE6]/40 focus:outline-none font-sans"
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#B8893F] hover:text-[#E8D5B0] transition-colors pl-3"
              >
                JOIN
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-[#B8893F]/15 bg-[#0e0409]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] sm:text-xs text-[#F2EDE6]/50 font-sans">
          <p>© {new Date().getFullYear()} TRESSE. All rights reserved.</p>
          <p className="tracking-wide">Engineered for Hair Transformation &amp; Scalp Health.</p>
        </div>
      </div>
    </footer>
  );
}