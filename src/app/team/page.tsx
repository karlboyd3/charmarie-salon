import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const stylists = [
  {
    name: "Charmaine",
    title: "Owner / Stylist / Makeup Artist",
    instagram: "@charmedwards",
    services: "All hair services, permanent brows, makeup, brow waxing",
    licensed: "2006",
    photo: "/team/charmaine.avif",
    funFact: "Won an ice cream eating contest at age 6 — the prize was a year supply of free ice cream.",
    into: "Family, Sleep Token, concerts, reading, psychology, making a cozy home.",
  },
  {
    name: "Holly",
    title: "Stylist",
    instagram: "@holly.g_hairstylist",
    services: "Specializing in all blonding, color, retouches, longer hair cuts, smoothing treatments, extensions.",
    licensed: "2000",
    photo: "/team/holly.avif",
    funFact: "Terrified of birds of all kinds.",
    into: "Good music and concerts, wine, traveling, her kids and two dogs, interior design.",
  },
  {
    name: "Amy",
    title: "Stylist",
    instagram: "@amykinsley40",
    services: "All blonding, reverse balayage, color, cutting, extensions.",
    licensed: "1992",
    photo: "/team/amy.avif",
    funFact: "Super handy — has built and manages several rental properties.",
    into: "Spending time with pets, building businesses.",
  },
  {
    name: "Martha B.",
    title: "Stylist",
    instagram: "@marthabstyling",
    services: "Color, blonding, cutting, facials, face/body waxing, lash lifts & tints, brow lamination & tints.",
    licensed: "2005",
    photo: "/team/martha.avif",
    funFact: "Trilingual — speaks English, Albanian (first language), and Greek.",
    into: "Mothering friends and family, feeding people she loves, celebrating all that life has to offer.",
  },
  {
    name: "Allie",
    title: "Stylist",
    instagram: "@allieperkinshair",
    services: "Color, retouches, all blonding, haircuts, special occasion hair, hand-tied extensions.",
    licensed: "2015",
    photo: "/team/allie.avif",
    funFact: "Favorite food is pickles.",
    into: "Spending time with her kids and binging TV shows.",
  },
  {
    name: "Kelsey",
    title: "Stylist",
    instagram: "@kel_dawn",
    services: "All blonding, reverse balayage, color, cutting.",
    licensed: "2015",
    photo: "/team/kelsey.avif",
    funFact: "Favorite travel destination: Ireland.",
    into: "Time with family and friends, hot Pilates, cooking, the sun, sitting by the river.",
  },
  {
    name: "Becca",
    title: "Stylist",
    instagram: "@because_hair",
    services: "All blonding, reverse balayage, color, cutting, alternative hair.",
    licensed: "2000",
    photo: "/team/becca.avif",
    funFact: "Favorite travel destination: Ireland.",
    into: "Time with family and friends.",
  },
  {
    name: "Clinton",
    title: "Stylist",
    instagram: "@clintonstonehairlove",
    services: "All color and cutting services.",
    licensed: "1986",
    photo: "/team/clinton.avif",
    funFact: "Has styled eight and been backstage with 12 Grammy-affiliated artists.",
    into: "Decorating for holidays, throwing parties, reading palms, storytelling.",
  },
  {
    name: "Kathleen",
    title: "Stylist",
    instagram: "@kelr314",
    services: "Vivids, all cutting (especially short cuts), all color excluding bleach outs, facial waxing.",
    licensed: "",
    photo: "/team/kathleen.avif",
    funFact: "Loves a good conspiracy. Pickles are her favorite.",
    into: "Reading, documentaries, astrology, game shows, shopping, family, cats.",
  },
  {
    name: "Christina",
    title: "Stylist",
    instagram: "@colorsorcery",
    services: "All haircuts, any color and blonding, perms.",
    licensed: "1995",
    photo: "/team/christina.avif",
    funFact: "Reading is her main form of entertainment.",
    into: "Books, Sleep Token, oil painting, and curating an encyclopedia of useless information.",
  },
  {
    name: "Hayley",
    title: "Stylist",
    instagram: "@hayley.hairstylist",
    services: "All blonding, lived-in color, cutting (specializing in short hair & razor cuts), special occasion hair and makeup.",
    licensed: "2010",
    photo: "/team/hayley.avif",
    funFact: "Favorite part of the job: seeing a client light up when they love their hair.",
    into: "Quality time with husband and furbabies, concerts, movies, DIY home projects, beach getaways.",
  },
  {
    name: "Ashton",
    title: "Stylist",
    instagram: "@hairby_ashtonwheeler",
    services: "Lived-in color, balayages, highlights, color, haircuts.",
    licensed: "2020",
    photo: "/team/ashton.avif",
    funFact: "Has hiked a volcano in Guatemala.",
    into: "Traveling.",
  },
  {
    name: "Rianna",
    title: "Stylist",
    instagram: "@hairstyles_by_rianna",
    services: "All blonding, color, haircuts, smoothing treatments, color corrections, platinum cards.",
    licensed: "2020",
    photo: "/team/rianna.avif",
    funFact: "Currently in school to learn more about cars.",
    into: "Spending time with family, driving, and traveling.",
  },
  {
    name: "Jocelyne",
    title: "Stylist",
    instagram: "@beautybyjocelyne",
    services: "Color analysis, special occasion makeup, haircuts, color, blonding, smoothing treatments, and long-lasting blowouts.",
    licensed: "2022",
    photo: "/team/jocelyne.avif",
    funFact: "Has lived in three states, traveled extensively, and was homeschooled until 8th grade.",
    into: "Cat mom, cooking gourmet meals, western horseback riding, BravoTV, interior design, astrology.",
  },
];

const support = [
  { name: "Sarah", title: "Salon Management", photo: null },
  { name: "Laura", title: "Salon Coordinator", photo: "/team/laura.avif" },
  { name: "Skyla", title: "Salon Coordinator", photo: "/team/skyla.avif" },
];

const apprentices = [
  { name: "Mary Beth", photo: null },
  { name: "Hannah", photo: null },
  { name: "Taylor", photo: "/team/taylor.avif" },
  { name: "Paige", photo: "/team/paige.avif" },
  { name: "Jessica", photo: "/team/jessica.avif" },
];

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
                {/* Photo header */}
                <div className="h-56 bg-champagne-wash relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="px-6 pb-6 pt-5">
                  <h3 className="font-display font-semibold text-xl text-espresso">{member.name}</h3>
                  <p className="font-sans text-muted text-xs tracking-wider mb-1">{member.title}</p>
                  <a
                    href={`https://instagram.com/${member.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-muted text-xs hover:text-espresso transition-colors"
                  >
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
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-champagne-wash">
                    {s.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.photo} alt={s.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#E8D8C3] to-[#D8A7A7]" />
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-espresso">{s.name}</h3>
                  <p className="font-sans text-muted text-sm">{s.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Apprentices */}
          <div className="bg-espresso rounded-2xl p-8 mb-12">
            <p className="font-sans text-muted text-xs tracking-widest uppercase mb-3 text-center">Growing the Next Generation</p>
            <h2 className="font-display font-semibold text-2xl text-white mb-8 text-center">Our Apprentices</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {apprentices.map((a) => (
                <div key={a.name} className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-2 overflow-hidden">
                    {a.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={a.photo} alt={a.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full bg-white/10" />
                    )}
                  </div>
                  <span className="font-sans text-sm text-cream/80">{a.name}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-sans text-xs text-muted text-center mb-12">
            Staff headshots by Keeland Griffith of Keeland Griffith Photography
          </p>

          <div className="text-center">
            <a
              href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLqgQS0cYJaPL+EJXEsdmhwDbHDrqoEJm0qk3XsE5TT85bPeJ/ymX7NWXPgtuzug11sunBLXOM5hI0aEzf1Lll4TD90a/smNSxnjpcAyTERbEIUBubX7B4HOlIqqOuW+najoaET4Y0PN1TMT0l5ZcNfEhFoBu1BmnAhle4NFoNYypllGn0f7WDppxWH+fNDM3La5Gs21jkrSaSPvYuwjnB8rxNKWkJ3Nkrm5zRIQ8ApfG2XZ6xPrlMwPo0cVcLVgJTDBCcgANmwOw2c5QnwCvJFKdk55RSj6CQlSj8NRiW1+OQ54hvy3gHX6/Ud+YaXhbR7zXe4kKk/9S/pxAw4x9cpA7BXwjobqJ9vAJwQjcrzExCjFiWpKI2n5MCZcGVMsTiFVtn5SQka/fXVGrkq3WQVZ7Ie0uyJ9zhYvuTIEqgrn&c_type=tab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-medium bg-gold text-espresso px-8 py-4 rounded-full hover:bg-gold/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Book with Your Stylist
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
