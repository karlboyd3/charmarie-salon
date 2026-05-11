import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { getInstagramPosts } from "@/lib/instagram";

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
  { gradient: "from-[#E8D8C3] to-[#d4c4ad]", label: "Balayage by Holly" },
  { gradient: "from-[#D8A7A7] to-[#c49898]", label: "Color by Rianna" },
  { gradient: "from-[#A78B7A] to-[#8a7066]", label: "Cut by Kathleen" },
  { gradient: "from-[#d4c4ad] to-[#D8A7A7]", label: "Extensions" },
  { gradient: "from-[#c49898] to-[#E8D8C3]", label: "Bridal Hair" },
  { gradient: "from-[#2B211D] to-[#A78B7A]", label: "Color by Martha" },
  { gradient: "from-[#E8D8C3] to-[#D8A7A7]", label: "Foiliyage" },
  { gradient: "from-[#D8A7A7] to-[#A78B7A]", label: "Highlights" },
  { gradient: "from-[#d4c4ad] to-[#2B211D]", label: "Color Correction" },
  { gradient: "from-[#A78B7A] to-[#E8D8C3]", label: "Blonde by Holly" },
  { gradient: "from-[#c49898] to-[#d4c4ad]", label: "Lashes" },
  { gradient: "from-[#2B211D] to-[#E8D8C3]", label: "Updo" },
];

export default async function GalleryPage() {
  const posts = await getInstagramPosts(24);
  const hasPosts = posts.length > 0;

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
              className="inline-flex items-center gap-2 font-sans text-espresso border border-espresso/20 px-6 py-3 rounded-full hover:border-gold hover:text-muted transition-all text-sm"
            >
              <InstagramIcon className="w-4 h-4" />
              Follow @charmariesalon for daily work
            </a>
          </div>

          {/* Grid */}
          {hasPosts ? (
            <GalleryGrid posts={posts} />
          ) : (
            <>
              <div className="bg-gold/10 border border-muted/30 rounded-2xl px-6 py-4 mb-10 text-center">
                <p className="font-sans text-espresso text-sm">
                  Photos coming soon — in the meantime, follow us on Instagram{" "}
                  <a href="https://www.instagram.com/charmariesalon" target="_blank" rel="noopener noreferrer" className="text-muted hover:underline">@charmariesalon</a>
                  {" "}to see our latest work.
                </p>
              </div>
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
            </>
          )}

          {/* Products */}
          <div className="mt-16 text-center">
            <p className="font-sans text-muted text-xs tracking-widest uppercase mb-4">Products We Love</p>
            <div className="flex flex-wrap justify-center gap-3 text-muted font-sans text-sm">
              {["Wella", "Pulp Riot", "K18", "Aveda", "Oribe"].map((b) => (
                <span key={b} className="border border-espresso/15 rounded-full px-4 py-1.5">{b}</span>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLqgQS0cYJaPL+EJXEsdmhwDbHDrqoEJm0qk3XsE5TT85bPeJ/ymX7NWXPgtuzug11sunBLXOM5hI0aEzf1Lll4TD90a/smNSxnjpcAyTERbEIUBubX7B4HOlIqqOuW+najoaET4Y0PN1TMT0l5ZcNfEhFoBu1BmnAhle4NFoNYypllGn0f7WDppxWH+fNDM3La5Gs21jkrSaSPvYuwjnB8rxNKWkJ3Nkrm5zRIQ8ApfG2XZ6xPrlMwPo0cVcLVgJTDBCcgANmwOw2c5QnwCvJFKdk55RSj6CQlSj8NRiW1+OQ54hvy3gHX6/Ud+YaXhbR7zXe4kKk/9S/pxAw4x9cpA7BXwjobqJ9vAJwQjcrzExCjFiWpKI2n5MCZcGVMsTiFVtn5SQka/fXVGrkq3WQVZ7Ie0uyJ9zhYvuTIEqgrn&c_type=tab"
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
