import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const stylists = [
  {
    name: "Charmaine",
    title: "Owner / Stylist / Makeup Artist",
    instagram: "@charmedwards",
    services: "All hair services, permanent brows, makeup, brow waxing",
    licensed: "2006",
    gradient: "from-[#C9A96E] to-[#b8936a]",
    funFact: "Won an ice cream eating contest at age 6 — the prize was a year supply of free ice cream.",
    into: "Family, Sleep Token, concerts, reading, psychology, making a cozy home.",
  },
  {
    name: "Holly",
    title: "Stylist",
    instagram: "@holly.g_hairstylist",
    services: "Specializing in all blonding, color, retouches, longer hair cuts, smoothing treatments, extensions.",
    licensed: "2000",
    gradient: "from-[#D4A5A5] to-[#C9A96E]",
    funFact: "Terrified of birds of all kinds.",
    into: "Good music and concerts, wine, traveling, her kids and two dogs, interior design.",
  },
  {
    name: "Amy",
    title: "Stylist",
    instagram: "@amykinsley40",
    services: "All blonding, reverse balayage, color, cutting, extensions.",
    licensed: "1992",
    gradient: "from-[#b8936a] to-[#D4A5A5]",
    funFact: "Super handy — has built and manages several rental properties.",
    into: "Spending time with pets, building businesses.",
  },
  {
    name: "Martha B.",
    title: "Stylist",
    instagram: "@marthabstyling",
    services: "Color, blonding, cutting, facials, face/body waxing, lash lifts & tints, brow lamination & tints.",
    licensed: "2005",
    gradient: "from-[#8A7F78] to-[#C9A96E]",
    funFact: "Trilingual — speaks English, Albanian (first language), and Greek.",
    into: "Mothering friends and family, feeding people she loves, celebrating all that life has to offer.",
  },
  {
    name: "Allie",
    title: "Stylist",
    instagram: "@allieperkinshair",
    services: "Color, retouches, all blonding, haircuts, special occasion hair, hand-tied extensions.",
    licensed: "2015",
    gradient: "from-[#C9A96E] to-[#D4A5A5]",
    funFact: "Favorite food is pickles.",
    into: "Spending time with her kids and binging TV shows.",
  },
  {
    name: "Kelsey",
    title: "Stylist",
    instagram: "@kel_dawn",
    services: "All blonding, reverse balayage, color, cutting.",
    licensed: "2015",
    gradient: "from-[#D4A5A5] to-[#8A7F78]",
    funFact: "Favorite travel destination: Ireland.",
    into: "Time with family and friends, hot Pilates, cooking, the sun, sitting by the river.",
  },
  {
    name: "Becca",
    title: "Stylist",
    instagram: "@because_hair",
    services: "All blonding, reverse balayage, color, cutting, alternative hair.",
    licensed: "2000",
    gradient: "from-[#8A7F78] to-[#b8936a]",
    funFact: "Favorite travel destination: Ireland.",
    into: "Time with family and friends.",
  },
  {
    name: "Clinton",
    title: "Stylist",
    instagram: "@clintonstonehairlove",
    services: "All color and cutting services.",
    licensed: "1986",
    gradient: "from-[#b8936a] to-[#8A7F78]",
    funFact: "Has styled eight and been backstage with 12 Grammy-affiliated artists.",
    into: "Decorating for holidays, throwing parties, reading palms, storytelling.",
  },
  {
    name: "Kathleen",
    title: "Stylist",
    instagram: "@kelr314",
    services: "Vivids, all cutting (especially short cuts), all color excluding bleach outs, facial waxing.",
    licensed: "",
    gradient: "from-[#C9A96E] to-[#8A7F78]",
    funFact: "Loves a good conspiracy. Pickles are her favorite.",
    into: "Reading, documentaries, astrology, game shows, shopping, family, cats.",
  },
  {
    name: "Christina",
    title: "Stylist",
    instagram: "@colorsorcery",
    services: "All haircuts, any color and blonding, perms.",
    licensed: "1995",
    gradient: "from-[#D4A5A5] to-[#b8936a]",
    funFact: "Reading is her main form of entertainment.",
    into: "Books, Sleep Token, oil painting, and curating an encyclopedia of useless information.",
  },
  {
    name: "Hayley",
    title: "Stylist",
    instagram: "@hayley.hairstylist",
    services: "All blonding, lived-in color, cutting (specializing in short hair & razor cuts), special occasion hair and makeup.",
    licensed: "2010",
    gradient: "from-[#8A7F78] to-[#D4A5A5]",
    funFact: "Favorite part of the job: seeing a client light up when they love their hair.",
    into: "Quality time with husband and furbabies, concerts, movies, DIY home projects, beach getaways.",
  },
  {
    name: "Ashton",
    title: "Stylist",
    instagram: "@hairby_ashtonwheeler",
    services: "Lived-in color, balayages, highlights, color, haircuts.",
    licensed: "2020",
    gradient: "from-[#b8936a] to-[#C9A96E]",
    funFact: "Has hiked a volcano in Guatemala.",
    into: "Traveling.",
  },
  {
    name: "Rianna",
    title: "Stylist",
    instagram: "@hairstyles_by_rianna",
    services: "All blonding, color, haircuts, smoothing treatments, color corrections, platinum cards.",
    licensed: "2020",
    gradient: "from-[#C9A96E] to-[#8A7F78]",
    funFact: "Currently in school to learn more about cars.",
    into: "Spending time with family, driving, and traveling.",
  },
  {
    name: "Jocelyne",
    title: "Stylist",
    instagram: "@beautybyjocelyne",
    services: "Color analysis, special occasion makeup, haircuts, color, blonding, smoothing treatments, and long-lasting blowouts.",
    licensed: "2022",
    gradient: "from-[#D4A5A5] to-[#C9A96E]",
    funFact: "Has lived in three states, traveled extensively, and was homeschooled until 8th grade.",
    into: "Cat mom, cooking gourmet meals, western horseback riding, BravoTV, interior design, astrology.",
  },
];

const support = [
  { name: "Sarah", title: "Salon Management" },
  { name: "Laura", title: "Salon Coordinator" },
  { name: "Skyla", title: "Salon Coordinator" },
];

const apprentices = ["Mary Beth", "Hannah", "Taylor", "Paige", "Jessica"];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Meet the Artists."
        subtitle="Hand-picked for their strengths, passion, and dedication to creating an exceptional guest experience."
      />

      <main className="bg-cream py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Stylists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {stylists.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden border border-espresso/8 hover:shadow-md hover:border-gold/20 transition-all duration-300">
                {/* Avatar */}
                <div className={`h-48 bg-gradient-to-br ${member.gradient} relative`}>
                  <div className="absolute bottom-0 left-6 translate-y-1/2">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} border-4 border-white shadow-md`} />
                  </div>
                </div>
                <div className="pt-14 px-6 pb-6">
                  <h3 className="font-display font-semibold text-xl text-espresso">{member.name}</h3>
                  <p className="font-sans text-gold text-xs tracking-wider mb-1">{member.title}</p>
                  <a href={`https://instagram.com/${member.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="font-sans text-muted text-xs hover:text-gold transition-colors">
                    {member.instagram}
                  </a>
                  {member.licensed && (
                    <p className="font-sans text-muted text-xs mt-1">Licensed since {member.licensed}</p>
                  )}
                  <div className="mt-4 pt-4 border-t border-espresso/8">
                    <p className="font-sans text-xs text-espresso/60 uppercase tracking-wider mb-1">Specialties</p>
                    <p className="font-sans text-muted text-xs leading-relaxed">{member.services}</p>
                  </div>
                  {member.funFact && (
                    <div className="mt-3">
                      <p className="font-sans text-xs text-espresso/60 uppercase tracking-wider mb-1">Fun Fact</p>
                      <p className="font-sans text-muted text-xs leading-relaxed">{member.funFact}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Support Staff */}
          <div className="mb-16">
            <h2 className="font-display font-semibold text-3xl text-espresso text-center mb-10">Front of House</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {support.map((s) => (
                <div key={s.name} className="bg-white rounded-2xl p-6 text-center border border-espresso/8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#D4A5A5] mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-lg text-espresso">{s.name}</h3>
                  <p className="font-sans text-muted text-sm">{s.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Apprentices */}
          <div className="bg-espresso rounded-2xl p-8 text-center mb-12">
            <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">Growing the Next Generation</p>
            <h2 className="font-display font-semibold text-2xl text-white mb-4">Our Apprentices</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {apprentices.map((name) => (
                <span key={name} className="font-sans text-sm text-cream/80 border border-white/20 rounded-full px-4 py-1.5">{name}</span>
              ))}
            </div>
          </div>

          <p className="font-sans text-xs text-muted text-center mb-12">
            Staff headshots by Keeland Griffith of Keeland Griffith Photography
          </p>

          <div className="text-center">
            <a href="https://app.glossgenius.com" target="_blank" rel="noopener noreferrer" className="inline-block font-sans font-medium bg-gold text-espresso px-8 py-4 rounded-full hover:bg-gold/90 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Book with Your Stylist
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
