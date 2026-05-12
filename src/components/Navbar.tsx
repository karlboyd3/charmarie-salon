"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const BOOKING_URL = "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLqgQS0cYJaPL+EJXEsdmhwDbHDrqoEJm0qk3XsE5TT85bPeJ/ymX7NWXPgtuzug11sunBLXOM5hI0aEzf1Lll4TD90a/smNSxnjpcAyTERbEIUBubX7B4HOlIqqOuW+najoaET4Y0PN1TMT0l5ZcNfEhFoBu1BmnAhle4NFoNYypllGn0f7WDppxWH+fNDM3La5Gs21jkrSaSPvYuwjnB8rxNKWkJ3Nkrm5zRIQ8ApfG2XZ6xPrlMwPo0cVcLVgJTDBCcgANmwOw2c5QnwCvJFKdk55RSj6CQlSj8NRiW1+OQ54hvy3gHX6/Ud+YaXhbR7zXe4kKk/9S/pxAw4x9cpA7BXwjobqJ9vAJwQjcrzExCjFiWpKI2n5MCZcGVMsTiFVtn5SQka/fXVGrkq3WQVZ7Ie0uyJ9zhYvuTIEqgrn&c_type=tab";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

const guideLinks = [
  { label: "Lash FAQ & Aftercare", href: "/lash-faq" },
  { label: "Permanent Cosmetics Guide", href: "/permanent-cosmetics" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
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
          <Link href="/" className="flex items-center">
            <div className={`transition-all duration-300 rounded-lg px-3 py-1.5 ${
              scrolled ? "bg-transparent" : "bg-white/95"
            }`}>
              <Image
                src="/logo-v2.png"
                alt="CharMarie Salon"
                width={160}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </div>
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

            {/* Guides dropdown */}
            <div className="relative group">
              <button
                className={`font-sans text-sm transition-colors flex items-center gap-1 ${
                  scrolled
                    ? "text-espresso/70 hover:text-espresso"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Guides
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div className="absolute top-full right-0 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150">
                <div className="bg-white rounded-xl shadow-lg border border-espresso/10 py-2 min-w-[220px]">
                  {guideLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block font-sans text-sm text-espresso/70 hover:text-gold hover:bg-cream px-4 py-2.5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={BOOKING_URL}
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-espresso/10 px-6 py-6 space-y-1 shadow-lg overflow-y-auto max-h-[calc(100vh-4rem)]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-sans text-espresso py-3 border-b border-espresso/5 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Guides toggle */}
          <div className="border-b border-espresso/5">
            <button
              onClick={() => setGuidesOpen(!guidesOpen)}
              className="w-full flex items-center justify-between font-sans text-espresso py-3 hover:text-gold transition-colors"
            >
              Guides
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`w-4 h-4 transition-transform ${guidesOpen ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {guidesOpen && (
              <div className="pb-2 pl-3 space-y-1">
                {guideLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-sans text-sm text-espresso/70 py-2 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href={BOOKING_URL}
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
