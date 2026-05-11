export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep espresso gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2C2523 0%, #231e1b 50%, #1a1210 100%)",
        }}
      />

      {/* Warm gold atmospheric overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, #C9A96E 0%, transparent 60%)",
        }}
      />

      {/* Subtle grain texture via SVG filter */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <p className="font-sans text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-8">
          Blacksburg, Virginia
        </p>

        <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] mb-8">
          Your Best Hair Day
          <br />
          Starts Here.
        </h1>

        <p className="font-sans text-white/65 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Full-service salon in Blacksburg, VA — where skill meets style, and
          every guest leaves feeling like themselves, only better.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.glossgenius.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto font-sans font-medium bg-gold text-espresso px-8 py-4 rounded-full text-base hover:bg-gold/90 transition-all hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto font-sans font-medium border border-white/25 text-white px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all hover:border-white/50"
          >
            View Our Services
          </a>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-sans text-white text-xs tracking-widest uppercase">
            Scroll
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            className="w-4 h-4 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
