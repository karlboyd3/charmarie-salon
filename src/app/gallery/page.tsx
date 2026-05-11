import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const placeholders = [
  { gradient: "from-[#C9A96E] to-[#b8936a]", label: "Balayage by Holly" },
  { gradient: "from-[#D4A5A5] to-[#c09090]", label: "Color by Rianna" },
  { gradient: "from-[#8A7F78] to-[#6b6060]", label: "Cut by Kathleen" },
  { gradient: "from-[#b8936a] to-[#D4A5A5]", label: "Extensions" },
  { gradient: "from-[#c09090] to-[#C9A96E]", label: "Bridal Hair" },
  { gradient: "from-[#2C2523] to-[#8A7F78]", label: "Color by Martha" },
  { gradient: "from-[#C9A96E] to-[#D4A5A5]", label: "Foiliyage" },
  { gradient: "from-[#D4A5A5] to-[#8A7F78]", label: "Highlights" },
  { gradient: "from-[#b8936a] to-[#2C2523]", label: "Color Correction" },
  { gradient: "from-[#8A7F78] to-[#C9A96E]", label: "Blonde by Holly" },
  { gradient: "from-[#c09090] to-[#b8936a]", label: "Lashes" },
  { gradient: "from-[#2C2523] to-[#C9A96E]", label: "Updo" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="The Work Speaks for Itself."
        subtitle="A look at the transformations happening every day at CharMarie Salon."
      />

      <main className="bg-cream py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Instagram CTA */}
          <div className="text-center mb-12">
            <a
              href="https://www.instagram.com/charmariesalon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-espresso border border-espresso/20 px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-all text-sm"
            >
              <InstagramIcon className="w-4 h-4" />
              Follow @charmariesalon for daily work
            </a>
          </div>

          {/* Photo placeholder note */}
          <div className="bg-gold/10 border border-gold/30 rounded-2xl px-6 py-4 mb-10 text-center">
            <p className="font-sans text-espresso text-sm">
              Photos coming soon — in the meantime, follow us on Instagram{" "}
              <a href="https://www.instagram.com/charmariesalon" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">@charmariesalon</a>
              {" "}to see our latest work.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {placeholders.map((item, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl bg-gradient-to-br ${item.gradient} overflow-hidden relative group`}
              >
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-300 flex items-end p-5">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-white text-sm">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="mt-16 text-center">
            <p className="font-sans text-gold text-xs tracking-widest uppercase mb-4">Products We Love</p>
            <div className="flex flex-wrap justify-center gap-3 text-muted font-sans text-sm">
              {["Wella", "Pulp Riot", "K18", "Aveda", "Oribe"].map((b) => (
                <span key={b} className="border border-espresso/15 rounded-full px-4 py-1.5">{b}</span>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://app.glossgenius.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-medium bg-espresso text-cream px-8 py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Your Transformation
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
