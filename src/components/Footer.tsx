import Link from "next/link";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#3D2416" }} className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src="/logo-v5.png" alt="CharMarie Salon" width={480} height={180} className="h-40 w-auto" />
            </div>
            <p className="font-sans text-sm text-cream/50 leading-relaxed mb-4">
              Blacksburg&#39;s Premier Full-Service Salon
            </p>
            <p className="font-sans text-xs text-cream/40 leading-relaxed">
              120 Professional Park Dr, Suite 7<br />
              Blacksburg, VA 24060<br />
              (540) 251-3350
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-sans text-xs text-gold tracking-widest uppercase mb-5">Quick Links</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-sm text-cream/60 hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/policies" className="font-sans text-sm text-cream/60 hover:text-cream transition-colors">
                  Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Social + Book */}
          <div>
            <p className="font-sans text-xs text-gold tracking-widest uppercase mb-5">Connect</p>
            <div className="flex gap-4 mb-8">
              <a href="https://www.instagram.com/charmariesalon" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/60 hover:text-gold transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/charmariesalon" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/60 hover:text-gold transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
            <a href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLqgQS0cYJaPL+EJXEsdmhwDbHDrqoEJm0qk3XsE5TT85bPeJ/ymX7NWXPgtuzug11sunBLXOM5hI0aEzf1Lll4TD90a/smNSxnjpcAyTERbEIUBubX7B4HOlIqqOuW+najoaET4Y0PN1TMT0l5ZcNfEhFoBu1BmnAhle4NFoNYypllGn0f7WDppxWH+fNDM3La5Gs21jkrSaSPvYuwjnB8rxNKWkJ3Nkrm5zRIQ8ApfG2XZ6xPrlMwPo0cVcLVgJTDBCcgANmwOw2c5QnwCvJFKdk55RSj6CQlSj8NRiW1+OQ54hvy3gHX6/Ud+YaXhbR7zXe4kKk/9S/pxAw4x9cpA7BXwjobqJ9vAJwQjcrzExCjFiWpKI2n5MCZcGVMsTiFVtn5SQka/fXVGrkq3WQVZ7Ie0uyJ9zhYvuTIEqgrn&c_type=tab" target="_blank" rel="noopener noreferrer" className="inline-block font-sans text-sm font-medium bg-gold text-espresso px-6 py-3 rounded-full hover:bg-gold/90 transition-colors">
              Book Now
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-sans text-xs text-cream/30">
            © 2025 CharMarie Salon. All rights reserved. · Salon photography by Kristen H Photography · Team photos by Keeland Griffith Photography
          </p>
        </div>
      </div>
    </footer>
  );
}
