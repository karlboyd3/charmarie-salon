const pillars = [
  {
    icon: "🏆",
    title: "Top-Rated in Blacksburg",
    body: "Recognized by the Collegiate Times as one of the best salons in the New River Valley. Our reputation is built on real results, not just reviews.",
  },
  {
    icon: "🎓",
    title: "Educated & Innovative",
    body: "Our team stays current with the latest techniques and uses premium products including K18 treatments. Education never stops at CharMarie.",
  },
  {
    icon: "💬",
    title: "Built on Integrity",
    body: "Honest consultations, realistic timelines, and no surprise charges. Ever. We believe every client deserves to know exactly what to expect.",
  },
  {
    icon: "🌟",
    title: "A Team That Cares",
    body: "We're building relationships, not just booking appointments. You're always a guest, never just a ticket — and it shows in every visit.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.2em] uppercase mb-4">
            Why CharMarie
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso">
            More Than a Haircut.
            <br />
            An Experience.
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-5 p-8 rounded-2xl border border-espresso/8 hover:border-gold/30 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-3xl flex-shrink-0 mt-1">{pillar.icon}</span>
              <div>
                <h3 className="font-display font-semibold text-xl text-espresso mb-2">
                  {pillar.title}
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
