import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const onLocationPricing = [
  { service: "Bride/Bridesmaid Hair — On Location", price: "$140" },
  { service: "Bride/Bridesmaid Makeup — On Location (includes lash)", price: "$140" },
  { service: "Mother of Bride/Groom Hair — On Location", price: "$100" },
  { service: "Mother of Bride/Groom Makeup — On Location", price: "$100" },
  { service: "Flower Girl Hair — On Location", price: "$85" },
  { service: "Flower Girl Makeup — On Location", price: "$85" },
  { service: "Specialty Eye Makeup (cut crease, glitter, etc.)", price: "+$15" },
  { service: "Specialty Lash", price: "+$15" },
];

const faq = [
  {
    q: "Do you offer on-location services?",
    a: "Yes! On-location services are priced at 1½ times the regular fee plus a travel charge. See the pricing breakdown below.",
  },
  {
    q: "What preparations should we do before the big day?",
    a: "We recommend an eyebrow wax the week before your wedding for an even makeup application. The night before, anyone receiving a hair service should wash their hair, apply a root lifting spray, and blow dry upside down. Day-of makeup clients should arrive with a clean, moisturized face. All hair should be completely dry.",
  },
  {
    q: "How long will services take?",
    a: "We generally allow one hour for up-dos and 45 minutes for makeup applications.",
  },
  {
    q: "Do you provide false lashes?",
    a: "Yes — false lashes are highly recommended and are included in the cost of bridal makeup at no additional charge.",
  },
  {
    q: "Do you recommend a trial run?",
    a: "If you are unfamiliar with our staff, a trial can help put you at ease. While not required, it's a great chance to try your ideas. We recommend scheduling your bridal portraits the same day as your trial. Trials are done in-salon at our regular Special Occasion Hair and Makeup rate.",
  },
  {
    q: "What do I need to bring?",
    a: "We provide everything — makeup, bobby pins, hot tools, and styling products. Just bring the accessories you want to add to your style: clips, veils, pins, combs, tiaras, etc.",
  },
  {
    q: "What products do you use?",
    a: "We proudly use Tribe, Aveda styling products, Temptu Airbrush Makeup, and CharMarie Cosmetics, along with a wide array of other high-end cosmetic brands.",
  },
];

export default function BridalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bridal & Wedding"
        title="Your Day. Your Look. Perfection."
        subtitle="Complete hair, makeup, and beauty services for brides and their entire wedding party — in-salon or on-location."
      />

      <main className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Intro */}
          <div className="bg-white rounded-2xl p-10 border border-muted/30">
            <p className="font-sans text-muted text-xs tracking-widest uppercase mb-4">Why CharMarie for Your Wedding</p>
            <p className="font-display font-semibold text-3xl text-espresso mb-4">
              Years of Experience. Endless Attention to Detail.
            </p>
            <p className="font-sans text-muted leading-relaxed mb-4">
              From bridal trials to day-of glam, CharMarie Salon creates stunning hair, makeup, and beauty services for brides and their entire wedding party. Serving Blacksburg, the New River Valley, and beyond.
            </p>
            <p className="font-sans text-muted leading-relaxed">
              Your wedding day should be happy, fun, and as stress-free as possible. Our service providers have years of experience and are well equipped for any situation.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {["Bridal Trials", "Day-Of Glam", "Full Wedding Party", "On-Location Services", "Makeup & Hair", "False Lashes Included"].map((tag) => (
                <span key={tag} className="font-sans text-xs text-muted border border-muted/30 rounded-full px-3 py-1.5">{tag}</span>
              ))}
            </div>
          </div>

          {/* On-Location Pricing */}
          <div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-2">On-Location Pricing</h2>
            <p className="font-sans text-muted text-sm mb-6">On-location services are priced at 1½× the regular fee plus a travel charge.</p>
            <div className="bg-white rounded-2xl border border-espresso/8 overflow-hidden">
              {onLocationPricing.map(({ service, price }, i) => (
                <div key={i} className="flex justify-between items-center gap-4 px-8 py-4 border-b border-espresso/8 last:border-0">
                  <span className="font-sans text-espresso text-sm">{service}</span>
                  <span className="font-sans text-espresso text-sm font-medium whitespace-nowrap">{price}</span>
                </div>
              ))}
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
                    <svg className="w-4 h-4 text-muted flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="bg-espresso rounded-2xl p-10 text-center">
            <p className="font-sans text-muted text-xs tracking-widest uppercase mb-3">Ready to Begin?</p>
            <h2 className="font-display font-semibold text-3xl text-white mb-4">Let&#39;s Plan Your Perfect Day</h2>
            <p className="font-sans text-white/60 max-w-md mx-auto mb-8 text-sm leading-relaxed">
              We recommend booking 3–4 months in advance of your wedding date to allow time for a trial and any follow-up sessions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="inline-block font-sans font-medium bg-gold text-espresso px-8 py-4 rounded-full hover:bg-gold/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Start Your Bridal Inquiry →
              </a>
              <a
                href="/bridal-contract.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-white/70 border border-white/20 px-6 py-4 rounded-full hover:border-white/50 hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                Bridal Contract
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
