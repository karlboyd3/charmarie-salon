const positions = [
  {
    icon: "💼",
    title: "Employment",
    description:
      "Join our team as a full-time or part-time stylist. We offer competitive compensation, continuing education, and a supportive environment where you can grow your client base.",
  },
  {
    icon: "🪑",
    title: "Booth Rental",
    description:
      "Run your own business under the CharMarie brand. Enjoy the freedom of booth rental in one of the most recognized salons in the New River Valley.",
  },
  {
    icon: "📚",
    title: "Shadowing Program",
    description:
      "New to the industry? Our structured shadowing program gives aspiring beauty professionals hands-on experience alongside our experienced team.",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="bg-cream py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 max-w-2xl mx-auto">
          <p className="font-sans text-gold text-xs tracking-[0.2em] uppercase mb-4">
            Join the Team
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso mb-6">
            Come Grow With Us.
          </h2>
          <p className="font-sans text-muted leading-relaxed">
            CharMarie Salon is one of the most recognized salons in the New
            River Valley — and we&#39;re always looking for talented, passionate
            beauty professionals. We offer employment positions, booth rental,
            and a structured shadowing program.
          </p>
        </div>

        {/* Option Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {positions.map((pos) => (
            <div
              key={pos.title}
              className="bg-white rounded-2xl p-8 border border-espresso/8 hover:border-gold/30 hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl block mb-4">{pos.icon}</span>
              <h3 className="font-display font-semibold text-xl text-espresso mb-3">
                {pos.title}
              </h3>
              <p className="font-sans text-muted text-sm leading-relaxed">
                {pos.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block font-sans font-medium bg-espresso text-cream px-8 py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Submit an Inquiry →
          </a>
        </div>
      </div>
    </section>
  );
}
