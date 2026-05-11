const team = [
  {
    name: "Holly G.",
    title: "Color Specialist",
    gradient: "from-[#C9A96E] to-[#D4A5A5]",
  },
  {
    name: "Rianna",
    title: "Hair Stylist",
    gradient: "from-[#D4A5A5] to-[#8A7F78]",
  },
  {
    name: "Kathleen",
    title: "Cuts & Color",
    gradient: "from-[#8A7F78] to-[#C9A96E]",
  },
  {
    name: "Martha",
    title: "Hair Stylist",
    gradient: "from-[#b8936a] to-[#D4A5A5]",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-cream py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="font-sans text-gold text-xs tracking-[0.2em] uppercase mb-4">
            Our Team
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso mb-4">
            Meet the Artists Behind the Magic.
          </h2>
          <p className="font-sans text-muted max-w-xl mx-auto leading-relaxed">
            Our talented team of stylists, colorists, and beauty professionals
            are passionate, educated, and genuinely love what they do.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              {/* Avatar */}
              <div
                className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-5 bg-gradient-to-br ${member.gradient} shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}
              />
              <h3 className="font-display font-semibold text-xl text-espresso mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-muted text-sm">{member.title}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block font-sans text-sm font-medium border border-espresso/20 text-espresso px-7 py-3 rounded-full hover:border-gold hover:text-gold transition-all"
          >
            Meet the Full Team →
          </a>
        </div>
      </div>
    </section>
  );
}
