function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const placeholders = [
  { gradient: "from-[#E8D8C3] to-[#d4c4ad]" },
  { gradient: "from-[#D8A7A7] to-[#c49898]" },
  { gradient: "from-[#A78B7A] to-[#8a7066]" },
  { gradient: "from-[#d4c4ad] to-[#D8A7A7]" },
  { gradient: "from-[#c49898] to-[#E8D8C3]" },
  { gradient: "from-[#2B211D] to-[#A78B7A]" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-muted text-xs tracking-[0.2em] uppercase mb-4">
            Our Work
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso">
            The Work Speaks for Itself.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholders.map((item, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl bg-gradient-to-br ${item.gradient} overflow-hidden relative group cursor-pointer`}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-white text-sm tracking-wider">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="text-center mt-12 space-y-4">
          <a
            href="https://www.instagram.com/CharMarieSalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-espresso/70 hover:text-gold transition-colors text-sm"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow us on Instagram @CharMarieSalon
          </a>
          <div>
            <a
              href="https://www.instagram.com/CharMarieSalon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans text-sm font-medium border border-espresso/20 text-espresso px-7 py-3 rounded-full hover:border-gold hover:text-gold transition-all"
            >
              View Full Gallery →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
