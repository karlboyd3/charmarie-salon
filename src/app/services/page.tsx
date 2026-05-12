import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

const disclaimer = "Prices shown are the starting point. Final pricing depends on which stylist you see and the length, thickness, and overall goal for your hair. We offer 5 pricing levels based on education, experience, and demand.";

function PriceRow({ name, price, note }: { name: string; price: string; note?: string }) {
  return (
    <div className="flex justify-between items-start gap-4 py-4 border-b border-espresso/8 last:border-0">
      <div>
        <p className="font-sans text-espresso text-sm font-medium">{name}</p>
        {note && <p className="font-sans text-muted text-xs mt-1 max-w-sm leading-relaxed">{note}</p>}
      </div>
      <span className="font-sans text-espresso text-sm font-medium whitespace-nowrap">{price}</span>
    </div>
  );
}

function SectionHeader({ id, title }: { id: string; title: string }) {
  return (
    <h2 id={id} className="font-display font-semibold text-3xl text-espresso mb-2 pt-4">{title}</h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-espresso/8 shadow-sm">
      {children}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services & Pricing"
        title="What We Offer"
        subtitle="Premium services across hair, skin, and beauty — all in one place."
      />

      {/* Sticky category nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-espresso/10 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-8 flex gap-7 py-4 whitespace-nowrap lg:justify-center">
          {[
            ["Cuts & Styling", "#cuts"],
            ["Color", "#color"],
            ["Extensions", "#extensions"],
            ["Lashes & Brows", "#lashes"],
            ["Permanent Cosmetics", "#pmc"],
            ["Facials", "#facials"],
            ["Body Waxing", "#waxing"],
            ["Makeup", "#makeup"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="font-sans text-sm text-muted hover:text-espresso transition-colors py-2 px-1">
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Disclaimer */}
          <div className="bg-gold/10 border border-gold/30 rounded-2xl px-6 py-5">
            <p className="font-sans text-espresso text-sm leading-relaxed">{disclaimer}</p>
          </div>

          {/* Haircuts & Styling */}
          <section>
            <SectionHeader id="cuts" title="Haircuts & Styling" />
            <p className="font-sans text-muted text-sm mb-6">Precision cuts, blowouts, and styling for every hair type and texture.</p>
            <Card>
              <PriceRow name="Bang Trim" price="Complimentary / $5" note="Complimentary for existing clients receiving other services." />
              <PriceRow name="Blow-Dry (Basic)" price="$28 – $53" />
              <PriceRow name="Adult Haircut & Blow-Dry / Dry Haircut" price="$52 – $78" />
              <PriceRow name="Clipper Haircut" price="$38 – $56" />
              <PriceRow name="Child's Haircut (12 & under)" price="$38 – $56" note="Children with an adult amount of hair may be charged at the adult rate." />
              <PriceRow name="Special Occasions / Up-Dos" price="$100 – $140" />
              <PriceRow name="Conditioning Treatment" price="$40 – $55" />
            </Card>
          </section>

          {/* Hair Color */}
          <section>
            <SectionHeader id="color" title="Hair Color & Texture" />
            <p className="font-sans text-muted text-sm mb-6">From root retouches to full balayage — using Wella, Pulp Riot, and K18.</p>
            <div className="space-y-6">
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-4">Single Process Color</h3>
                <PriceRow name="Retouch" price="$81 – $115" note="100% gray coverage, up to 1.5 inches of regrowth." />
                <PriceRow name="Color (Scalp to Ends)" price="$99 – $141" note="Single color, scalp to ends. Long/thick hair may incur extra charge." />
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-4">Highlights & Balayage</h3>
                <PriceRow name="Partial Balayage" price="$130 – $186" note="Painted from the ear line up, includes blowout." />
                <PriceRow name="Full Balayage" price="$175 – $252" note="Nape to front hairline, sun-kissed painted technique." />
                <PriceRow name="½ Head Highlight" price="$105 – $151" note="Highlights through the top and sides in ½-inch sections." />
                <PriceRow name="¾ Head Highlight" price="$118 – $167" note="Highlights through top, sides, and back hairline." />
                <PriceRow name="Full Highlight" price="$130 – $186" note="Full head, ½-inch sections for a dimensional look." />
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-4">Specialty Foil Work</h3>
                <PriceRow name="Foiliyage" price="$261 – $385" note="Balayage in foils for maximum lift. Includes gloss and blowout." />
                <PriceRow name="Baby Lights" price="$240 – $360" note="Micro foils in ⅛-inch sections for an overall blonde look. Includes gloss and blowout." />
                <PriceRow name="Platinum Card" price="$327 – $474" note="Every hair in a foil at ⅛-inch sections. Ideal for dark-to-light transformations. Includes gloss and blowout. Requires confirmation 24 hrs prior." />
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-4">Texture Services</h3>
                <PriceRow name="Perm" price="$131+" />
                <PriceRow name="3-Month Keratin Treatment" price="$360+" />
                <PriceRow name="Keratin Complex Blowout" price="$115" />
                <PriceRow name="Keratin Complex Blowout with Chemical Service" price="$100" />
              </Card>
            </div>
          </section>

          {/* Extensions */}
          <section>
            <SectionHeader id="extensions" title="Extensions" />
            <p className="font-sans text-muted text-sm mb-6">Hand-tied weft and invisible bead extensions. Reinstalls every 8 weeks. Hair reusable 3–6 months. Each package includes shampoo, conditioner, and a brush.</p>
            <div className="space-y-6">
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-2">Hand-Tied Weft (Sew-In)</h3>
                <p className="font-sans text-muted text-xs mb-4">Packages priced for 2 packs and 2-row install. Install cost: $100/row. Each additional pack priced separately.</p>
                <PriceRow name='16" Package' price="$790" />
                <PriceRow name='20" Package' price="$1,210" />
                <PriceRow name='22" Package' price="$1,420" />
                <PriceRow name='24" Package' price="$1,630" />
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-2">Invisible Bead Extensions (IBE)</h3>
                <p className="font-sans text-muted text-xs mb-4">Packages priced for 2 packs and 2-row install. Install cost: $100/row.</p>
                <PriceRow name='16" Package' price="$890" />
                <PriceRow name='20" Package' price="$1,310" />
                <PriceRow name='22" Package' price="$1,520" />
                <PriceRow name='24" Package' price="$1,730" />
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-4">Single Packs of Hair</h3>
                <PriceRow name='16"' price="$295" />
                <PriceRow name='20"' price="$505" />
                <PriceRow name='22"' price="$810" />
                <PriceRow name='24"' price="$915" />
              </Card>
            </div>
          </section>

          {/* Lashes & Brows */}
          <section>
            <SectionHeader id="lashes" title="Lashes & Brows" />
            <div className="space-y-6">
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-2">Lash Extensions</h3>
                <p className="font-sans text-muted text-xs mb-4">To qualify as a fill, 40–50% of lashes must remain. 2-week fills within 17 days; 3-week fills within 18–25 days.</p>
                <p className="font-sans text-espresso/60 text-xs font-medium tracking-widest uppercase mb-2">Classic</p>
                <PriceRow name="Full Set" price="$120" />
                <PriceRow name="2-Week Fill" price="$60" />
                <PriceRow name="3-Week Fill" price="$75" />
                <p className="font-sans text-espresso/60 text-xs font-medium tracking-widest uppercase mb-2 mt-4">Hybrid</p>
                <PriceRow name="Full Set" price="$130" />
                <PriceRow name="2-Week Fill" price="$65" />
                <PriceRow name="3-Week Fill" price="$80" />
                <p className="font-sans text-espresso/60 text-xs font-medium tracking-widest uppercase mb-2 mt-4">Volume</p>
                <PriceRow name="Full Set" price="$140" />
                <PriceRow name="2-Week Fill" price="$70" />
                <PriceRow name="3-Week Fill" price="$85" />
                <PriceRow name="Removal" price="$35" />
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-4">Lifts, Tints & Lamination</h3>
                <PriceRow name="Eyebrow Tinting" price="$30" />
                <PriceRow name="Lash Tint" price="$40" />
                <PriceRow name="Eyelash Lift & Tint" price="$78" note="Perfect if you're happy with your length but want more curl and darker lashes." />
                <PriceRow name="Brow Lamination" price="$78" note="Sets brows in a fluffier position. Includes tinting and shaping." />
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-4">Facial Waxing</h3>
                <p className="font-sans text-muted text-xs mb-4">Avoid retinoid products at least two weeks prior to your appointment.</p>
                <PriceRow name="Brow Shaping" price="$17 – $21" />
                <PriceRow name="Wax with Service" price="$14 – $19" />
                <PriceRow name="Lip" price="$9" />
                <PriceRow name="Chin" price="$9" />
                <PriceRow name="Lip & Chin" price="$17" />
              </Card>
            </div>
            <div className="mt-4">
              <Link href="/lash-faq" className="font-sans text-sm text-muted hover:text-espresso transition-colors">
                Read our full Lash FAQ & Aftercare Guide →
              </Link>
            </div>
          </section>

          {/* Permanent Cosmetics */}
          <section>
            <SectionHeader id="pmc" title="Permanent Cosmetics" />
            <p className="font-sans text-muted text-sm mb-6">Microblading, combo brows, and powder brows performed by Charmaine. A two-session process — Session 2 is included in Session 1 pricing.</p>
            <Card>
              <PriceRow name="Microblading Consult" price="$15" note="The $15 fee is subtracted from the cost of your service." />
              <PriceRow name="Microblading (Session 1)" price="$475" note="Session 2 included. Scheduled 6–12 weeks after Session 1." />
              <PriceRow name="Combo Brows (Session 1)" price="$550" note="Combination of microblading and powder brows. Session 2 included." />
              <PriceRow name="Powder Brows (Session 1)" price="$450" note="Session 2 included. Scheduled 6–12 weeks after Session 1." />
            </Card>
            <div className="mt-4">
              <Link href="/permanent-cosmetics" className="font-sans text-sm text-muted hover:text-espresso transition-colors">
                Read our full Permanent Cosmetics guide, FAQ & Pre/Post Care →
              </Link>
            </div>
          </section>

          {/* Facials */}
          <section>
            <SectionHeader id="facials" title="Facials & Skincare" />
            <p className="font-sans text-muted text-sm mb-6">Using Circadia Skincare. All skin care and body waxing appointments must be made by phone.</p>
            <div className="space-y-6">
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-4">Facials</h3>
                <PriceRow name="Basic Facial" price="$70" note="45 min. Double cleanse, exfoliation, mask, moisturizer, SPF, and home care recommendations." />
                <PriceRow name="Standard Facial" price="$90" note="60 min. Includes massage and all Basic Facial steps." />
                <PriceRow name="Premium Facial" price="$135" note="60 min. Enhanced Premium treatment with all Standard steps." />
                <PriceRow name="OxyGeneO Facial" price="$200" note="3-in-1 super facial: natural oxygenation, gentle exfoliation, nutrient infusion, ultrasound, and neo-massage." />
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-xl text-espresso mb-4">Facial Add-Ons</h3>
                <PriceRow name="Microcurrent" price="$50" note="Non-invasive facelift — trains facial muscles to appear more lifted and firm." />
                <PriceRow name="Geneo Ultrasound" price="$45" note="Promotes cellular renewal, tones muscles, increases circulation." />
                <PriceRow name="Oxygenating Dermabrasion" price="$100" note="GeneO OxyPods create a CO2-rich environment, triggering a surge of oxygenation." />
                <PriceRow name="Firming Peptide" price="$62" note="Peptides to promote firmer, smoother, more youthful skin." />
                <PriceRow name="HydroJelly Mask" price="$45" note="Deep hydration, reduced hyperpigmentation, improved skin elasticity." />
                <PriceRow name="Glycolic Mild Chemical Peel" price="$50" note="Gently exfoliates dead skin cells, improving texture and glow." />
              </Card>
            </div>
          </section>

          {/* Body Waxing */}
          <section>
            <SectionHeader id="waxing" title="Body Waxing" />
            <p className="font-sans text-muted text-sm mb-6">All body waxing appointments must be made by phone. Please ensure hair is at least the length of a grain of rice.</p>
            <Card>
              <PriceRow name="Brazilian" price="$70" note="Full removal." />
              <PriceRow name="Maintenance Brazilian" price="$60" note="Scheduled 3–6 weeks after a previous Brazilian." />
              <PriceRow name="French Bikini" price="$55" note="Leave a landing strip." />
              <PriceRow name="Bikini" price="$50" note="Clean up the edges." />
              <PriceRow name="Full Leg" price="$70" />
              <PriceRow name="Half Leg" price="Starting at $40" />
              <PriceRow name="Underarms" price="$30" />
            </Card>
          </section>

          {/* Makeup */}
          <section>
            <SectionHeader id="makeup" title="Makeup" />
            <Card>
              <PriceRow name="Application (Includes Lash)" price="$100" />
              <PriceRow name="Wedding — In Salon (Includes Lash)" price="$100" />
              <PriceRow name="On-Location Wedding (Includes Lash)" price="$140" />
              <PriceRow name="Analysis & Instruction" price="$105" />
              <PriceRow name="Specialty Makeup (cut crease, glitter, etc.)" price="+$15" />
              <PriceRow name="Specialty Lash" price="+$15" />
            </Card>
          </section>

          {/* Products */}
          <div className="bg-espresso rounded-2xl p-8 text-center">
            <p className="font-sans text-gold text-xs tracking-widest uppercase mb-4">Products We Use</p>
            <p className="font-display font-semibold text-2xl text-white mb-4">Premium Brands Only</p>
            <div className="flex flex-wrap justify-center gap-3 text-cream/70 font-sans text-sm">
              {["Wella", "Pulp Riot", "K18", "Aveda", "Oribe", "Circadia Skincare", "CharMarie Cosmetics", "Temptu Airbrush"].map((b) => (
                <span key={b} className="border border-white/20 rounded-full px-4 py-1.5">{b}</span>
              ))}
            </div>
          </div>

          {/* Booking CTA */}
          <div className="text-center pb-8">
            <a
              href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLqgQS0cYJaPL+EJXEsdmhwDbHDrqoEJm0qk3XsE5TT85bPeJ/ymX7NWXPgtuzug11sunBLXOM5hI0aEzf1Lll4TD90a/smNSxnjpcAyTERbEIUBubX7B4HOlIqqOuW+najoaET4Y0PN1TMT0l5ZcNfEhFoBu1BmnAhle4NFoNYypllGn0f7WDppxWH+fNDM3La5Gs21jkrSaSPvYuwjnB8rxNKWkJ3Nkrm5zRIQ8ApfG2XZ6xPrlMwPo0cVcLVgJTDBCcgANmwOw2c5QnwCvJFKdk55RSj6CQlSj8NRiW1+OQ54hvy3gHX6/Ud+YaXhbR7zXe4kKk/9S/pxAw4x9cpA7BXwjobqJ9vAJwQjcrzExCjFiWpKI2n5MCZcGVMsTiFVtn5SQka/fXVGrkq3WQVZ7Ie0uyJ9zhYvuTIEqgrn&c_type=tab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-medium bg-gold text-espresso px-10 py-4 rounded-full hover:bg-gold/90 transition-all hover:shadow-lg hover:-translate-y-0.5 text-base"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
