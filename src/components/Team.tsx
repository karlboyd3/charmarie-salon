import Link from "next/link";

const featured = [
  { name: "Charmaine", title: "Owner / Stylist / Makeup Artist", gradient: "from-[#E8D8C3] to-[#d4c4ad]" },
  { name: "Holly", title: "Color Specialist", gradient: "from-[#D8A7A7] to-[#E8D8C3]" },
  { name: "Martha B.", title: "Stylist / Facials / Waxing", gradient: "from-[#A78B7A] to-[#E8D8C3]" },
  { name: "Rianna", title: "Color & Smoothing Specialist", gradient: "from-[#d4c4ad] to-[#D8A7A7]" },
];

export default function Team() {
  return (
    <section id="team" className="bg-cream py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <p className="font-sans text-gold text-xs tracking-[0.2em] uppercase mb-4">Our Team</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso mb-4">
            Meet the Artists Behind the Magic.
          </h2>
          <p className="font-sans text-muted max-w-xl mx-auto leading-relaxed">
            Our talented team of 14 stylists, colorists, and beauty professionals are passionate, educated, and genuinely love what they do.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {featured.map((member) => (
            <div key={member.name} className="text-center group">
              <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-5 bg-gradient-to-br ${member.gradient} shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`} />
              <h3 className="font-display font-semibold text-xl text-espresso mb-1">{member.name}</h3>
              <p className="font-sans text-muted text-sm">{member.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/team"
            className="inline-block font-sans text-sm font-medium border border-espresso/20 text-espresso px-7 py-3 rounded-full hover:border-gold hover:text-gold transition-all"
          >
            Meet the Full Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
