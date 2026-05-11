export default function Bridal() {
  return (
    <section id="bridal" className="bg-champagne-wash py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left: image placeholder */}
          <div
            className="relative min-h-72 lg:min-h-full"
            style={{
              background:
                "linear-gradient(135deg, #D8A7A7 0%, #E8D8C3 40%, #d4c4ad 70%, #2B211D 100%)",
            }}
          >
            {/* Overlaid decorative text */}
            <div className="absolute inset-0 flex items-end p-10">
              <p className="font-display text-white/20 text-8xl font-semibold leading-none select-none">
                Bridal
              </p>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex items-center px-8 py-16 lg:px-16 lg:py-20 bg-champagne-wash">
            <div className="max-w-lg">
              <p className="font-sans text-gold text-xs tracking-[0.25em] uppercase mb-5">
                Bridal &amp; Wedding
              </p>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso leading-tight mb-6">
                Your Day.
                <br />
                Your Look.
                <br />
                Perfection.
              </h2>
              <p className="font-sans text-muted leading-relaxed mb-8">
                From bridal trials to day-of glam, CharMarie Salon creates
                stunning hair, makeup, and beauty services for brides and their
                entire wedding party. Serving Blacksburg, the New River Valley,
                and beyond.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Bridal Trials", "Day-Of Glam", "Wedding Party", "On-Site Services"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs text-gold border border-gold/30 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <a
                href="#contact"
                className="inline-block font-sans font-medium bg-espresso text-cream px-8 py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Start Your Bridal Inquiry →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
