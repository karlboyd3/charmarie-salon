"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`font-display text-xl lg:text-2xl font-semibold tracking-wide transition-colors ${
              scrolled ? "text-espresso" : "text-white"
            }`}
          >
            CharMarie Salon
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans text-sm transition-colors ${
                  scrolled
                    ? "text-espresso/70 hover:text-espresso"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://app.glossgenius.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium bg-gold text-espresso px-5 py-2.5 rounded-full hover:bg-gold/90 transition-all hover:shadow-md"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-espresso" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-espresso/10 px-6 py-6 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-sans text-espresso py-3 border-b border-espresso/5 last:border-0 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.glossgenius.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-sans font-medium bg-gold text-espresso px-5 py-3.5 rounded-full mt-4 hover:bg-gold/90 transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
