const services = [
  {
    icon: "✂️",
    name: "Haircuts & Styling",
    description: "Cuts, blowouts, and treatments for every hair type",
    gold: false,
  },
  {
    icon: "🎨",
    name: "Color & Texture",
    description:
      "Balayage, highlights, color corrections, perms, and relaxers",
    gold: false,
  },
  {
    icon: "💫",
    name: "Extensions",
    description: "Length, volume, and dimension with premium extension methods",
    gold: false,
  },
  {
    icon: "👁️",
    name: "Lashes & Brows",
    description: "Extensions, tinting, lamination, and microblading",
    gold: false,
  },
  {
    icon: "✨",
    name: "Facials & Skincare",
    description: "Facial treatments, skincare, and full body waxing",
    gold: false,
  },
  {
    icon: "💍",
    name: "Bridal & Special Events",
    description: "Complete packages for brides and their wedding party",
    gold: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.2em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso">
            Everything You Need.
            <br />
            All Under One Roof.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`bg-white rounded-xl p-8 shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group ${
                service.gold
                  ? "border-gold/50 shadow-gold/10"
                  : "border-espresso/8 hover:border-gold/40"
              }`}
            >
              {service.gold && (
                <span className="inline-block font-sans text-xs text-gold tracking-widest uppercase mb-4">
                  Featured
                </span>
              )}
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-display font-semibold text-xl text-espresso mb-2">
                {service.name}
              </h3>
              <p className="font-sans text-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className={`font-sans text-sm font-medium transition-colors ${
                  service.gold
                    ? "text-gold hover:text-espresso"
                    : "text-espresso/50 group-hover:text-gold"
                }`}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://app.glossgenius.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans font-medium bg-espresso text-cream px-8 py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Your Service Today
          </a>
        </div>
      </div>
    </section>
  );
}
