import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const contraindications = [
  "Upcoming vacations", "Pregnant or nursing", "Diabetic", "Viral infections or diseases",
  "Epilepsy", "Pacemaker or heart conditions", "Organ transplant", "Tendency towards keloids or scarring",
  "Seborrheic dermatitis", "Skin irritations or psoriasis near treated area", "Cold or flu",
  "Botox in the past 2 months", "Accutane in the past year", "Doxycycline in the past 6 months",
  "Allergies to lidocaine or epinephrine", "Extremely oily or problematic skin",
  "Cancer or chemotherapy", "Auto-immune diseases",
];

const preCare = [
  "Do not work out 48 hours before the procedure.",
  "No alcohol or caffeine 48 hours before (including decaf coffee, tea, and kombucha).",
  "Avoid sun and tanning on your face two weeks prior.",
  "Do not take Aspirin, Niacin, Vitamin E, or Advil/Ibuprofen 48 hours before.",
  "Avoid Fish Oil, Prenatal Vitamins, Nutritional Shakes, and 'Hair, Skin, Nail' supplements two weeks prior.",
  "Discontinue Retin-A, chemical peels, microdermabrasion, AHA, and any chemical exfoliant at least 6 weeks prior.",
  "No Botox or filler in the forehead, temple, or eye area for 2 months prior.",
  "No brow waxing, tinting, or threading one week prior.",
  "Must not have taken Accutane in the last year.",
  "Remove contact lenses prior to eyeliner appointments — bring glasses.",
  "Do not wear makeup or moisturizer to your appointment.",
];

const postCare = [
  "A few hours after the procedure, wash the brow area with a fragrance-free soap (like Cetaphil). Pat dry, then apply aftercare cream. Repeat every few hours until bedtime.",
  "Apply protective cream several times a day, especially when itchy.",
  "Keep brows dry of all water/sweat for at least one week.",
  "Do NOT rub, pick, or scratch the treated area. Let any scabbing naturally exfoliate off.",
  "Avoid direct sun exposure and tanning beds for a minimum of 4 weeks.",
  "No underwater swimming or bathing for 4 weeks.",
  "Avoid pool, sauna, steam rooms, steamy showers, and hot baths for 10 days.",
  "Avoid sweating on your face for 10 days.",
  "Avoid sleeping on your brow area for the first 10 days.",
  "No makeup or skincare products on the brow area for 7 days.",
];

const faq = [
  { q: "What is microblading?", a: "Microblading is an advanced manual method of cosmetic tattooing that uses a fine, sterile, 100% disposable hand tool to deposit pigment into the dermis, creating natural-looking hair-like strokes. It's ideal for anyone wanting to enhance the look of their eyebrows." },
  { q: "Is microblading a tattoo?", a: "Yes. Permanent cosmetics, 'semi-permanent' makeup, micropigmentation, microblading — these are all names for the same procedure: cosmetic tattooing. Any time pigment is placed into the skin with any device, it is a tattoo process." },
  { q: "How long does microblading last?", a: "Microblading is a permanent procedure, but the pigment will significantly fade over time. We recommend an annual touch-up to keep your brows looking their best. Frequency depends on skin type, lifestyle, sun exposure, and skincare habits." },
  { q: "Does microblading hurt?", a: "Discomfort is relative and varies by person. Anesthetic is applied for 30 minutes before the procedure. Most clients find it no more painful than tweezing or threading. Pre-care instructions must be strictly followed to minimize bleeding, which dilutes the pigment." },
  { q: "How many sessions are needed?", a: "At least two. The initial session starts the process. A complimentary Enhancement Session is scheduled 6–12 weeks later to fill in any sparse areas, perfect color, and add density. Some clients may need a third session." },
  { q: "Will microblading work for oily skin?", a: "If you have extremely oily skin, microblading may heal with a more diffused, powdered look rather than crisp hair strokes. We can discuss whether a powder brow technique may be a better fit during your consultation." },
  { q: "How old do I need to be?", a: "You must be 18 years or older to receive any permanent cosmetics service at CharMarie." },
  { q: "Can I get microblading while pregnant or nursing?", a: "No. As a precaution, CharMarie does not perform cosmetic tattooing on pregnant or nursing women." },
];

export default function PermanentCosmeticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Permanent Cosmetics"
        title="Microblading & Brow Artistry"
        subtitle="Performed by Charmaine — a licensed, experienced permanent cosmetics artist."
      />

      <main className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Intro */}
          <div className="bg-white rounded-2xl p-10 border border-gold/30">
            <p className="font-sans text-gold text-xs tracking-widest uppercase mb-4">What We Offer</p>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-4">Natural-Looking Brows, Redefined.</h2>
            <p className="font-sans text-muted leading-relaxed mb-4">
              Microblading at CharMarie is a multiple-step process. New clients receive one complimentary Enhancement Session scheduled 6–12 weeks after the initial procedure to perfect shape, color, and density.
            </p>
            <p className="font-sans text-muted leading-relaxed text-sm">
              <strong className="text-espresso">Important:</strong> We strongly advise booking at least 3–4 months before any vacation, wedding, or special event — the process requires at least two sessions to achieve your dream brows.
            </p>

            {/* Pricing */}
            <div className="mt-8 border-t border-espresso/8 pt-8">
              <h3 className="font-display font-semibold text-xl text-espresso mb-4">Pricing</h3>
              {[
                { name: "Microblading Consult", price: "$15", note: "Subtracted from your service cost." },
                { name: "Microblading — Session 1", price: "$475", note: "Session 2 included. Scheduled 6–12 weeks after." },
                { name: "Combo Brows — Session 1", price: "$550", note: "Microblading + powder brows. Session 2 included." },
                { name: "Powder Brows — Session 1", price: "$450", note: "Session 2 included. Scheduled 6–12 weeks after." },
              ].map(({ name, price, note }) => (
                <div key={name} className="flex justify-between items-start gap-4 py-4 border-b border-espresso/8 last:border-0">
                  <div>
                    <p className="font-sans text-espresso text-sm font-medium">{name}</p>
                    {note && <p className="font-sans text-muted text-xs mt-1">{note}</p>}
                  </div>
                  <span className="font-sans text-espresso text-sm font-medium">{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contraindications */}
          <div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-4">Who Should Contact Us First</h2>
            <p className="font-sans text-muted text-sm mb-6">
              If you have (or have had) any of the following conditions, please email us at{" "}
              <a href="mailto:charmariesalon@gmail.com" className="text-gold hover:underline">charmariesalon@gmail.com</a>{" "}
              before scheduling to confirm you are a candidate.
            </p>
            <div className="bg-white rounded-2xl p-8 border border-espresso/8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {contraindications.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">·</span>
                    <span className="font-sans text-muted text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pre-Care */}
          <div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-4">Pre-Care Instructions</h2>
            <p className="font-sans text-muted text-sm mb-6">Following these instructions limits bleeding and sensitivity, which directly affects your results. Failure to follow pre-care may result in cancellation fees.</p>
            <div className="bg-white rounded-2xl p-8 border border-espresso/8 space-y-3">
              {preCare.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-sans text-gold font-medium text-sm flex-shrink-0">{i + 1}.</span>
                  <p className="font-sans text-muted text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Post-Care */}
          <div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-4">Post-Care Instructions</h2>
            <div className="bg-white rounded-2xl p-8 border border-espresso/8 space-y-3">
              {postCare.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-sans text-gold font-medium text-sm flex-shrink-0">{i + 1}.</span>
                  <p className="font-sans text-muted text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-espresso/5 rounded-xl p-5 border border-espresso/10">
              <p className="font-sans text-espresso text-sm font-medium">Zero Tolerance Policy</p>
              <p className="font-sans text-muted text-xs mt-1 leading-relaxed">
                Failure to follow Pre and Post Care instructions will result in denial of service and possibly future services. There are no implied or written guarantees if instructions are not followed.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map(({ q, a }) => (
                <details key={q} className="bg-white rounded-2xl border border-espresso/8 group">
                  <summary className="px-8 py-5 cursor-pointer font-sans font-medium text-espresso list-none flex justify-between items-center gap-4">
                    {q}
                    <svg className="w-4 h-4 text-gold flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-8 pb-6">
                    <p className="font-sans text-muted text-sm leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pb-8">
            <a href="https://app.glossgenius.com" target="_blank" rel="noopener noreferrer" className="inline-block font-sans font-medium bg-gold text-espresso px-8 py-4 rounded-full hover:bg-gold/90 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Book a Consultation
            </a>
            <p className="font-sans text-muted text-xs mt-4">
              Questions? Email us at{" "}
              <a href="mailto:charmariesalon@gmail.com" className="text-gold hover:underline">charmariesalon@gmail.com</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
