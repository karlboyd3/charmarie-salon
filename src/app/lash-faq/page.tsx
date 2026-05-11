import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Link from "next/link";

const lashTypes = [
  {
    name: "Classic",
    description: "A 1:1 ratio — one extension applied to each natural lash. Great if you already have full lashes and want added length. Customizable with different lengths and curls.",
  },
  {
    name: "Hybrid",
    description: "A mix of classic and volume lashes. You get the best of both worlds: fullness and length. Different lengths and curls can be mixed in for a customized look.",
  },
  {
    name: "Volume",
    description: "Also known as Russian Volume. Uses thinner lashes so more can safely be applied to each natural lash. Fluffier and more dramatic. Ideal for sparse lashes or a full, dramatic look.",
  },
];

const faq = [
  { q: "Can I wear makeup to my appointment?", a: "Your eye area must be completely free of makeup. You can wear moisturizer and foundation, but no under-eye concealer or mascara. Your lash artist will require you to remove any eye-area makeup before starting." },
  { q: "How long are lash extension appointments?", a: "Your first full set takes around 2 hours. Fills take 60 minutes to 2 hours depending on the look and artist speed." },
  { q: "Should I curl my natural lashes beforehand?", a: "No — lash artists prefer to work with your natural lashes in their most natural state. Straight lashes allow the adhesive to bond and hold the extension better." },
  { q: "What is the difference between a 2-week and 3-week fill?", a: "A 2-week fill is booked within 17 days of your last appointment. A 3-week fill is booked between days 18–25. The longer you wait, the more lashes need replacing and the longer the appointment." },
  { q: "Can I wear contacts?", a: "We suggest removing contacts when you arrive to minimize irritation during your appointment." },
  { q: "What if I fall asleep?", a: "Totally fine — some artists prefer it! Your comfort is the priority." },
  { q: "Should I wash my lashes?", a: "Yes! Washing your lashes once per day with a lash-safe cleanser will extend their life, keep them clean and fresh, and help prevent irritation and bacteria." },
  { q: "What are your lashes made of?", a: "Our lashes are faux mink — made from unique synthetic yarn fibers that are super soft and lightweight." },
  { q: "How can I improve retention?", a: "Clean lashes last longer. Be gentle — avoid rubbing, picking, or pulling. Don't sleep on your face. A lash serum like Borboleta can also reduce natural lash shed and extend time between fills." },
];

const aftercare = [
  "Avoid water, steam, and sweat for the first 24–48 hours.",
  "Do not use oil-based products around the eye area — they break down lash adhesive.",
  "Wash lashes daily with a lash-safe foam cleanser.",
  "Brush lashes gently each morning with a clean spoolie.",
  "Sleep on your back or use a silk pillowcase to reduce friction.",
  "Do not rub, pick, or pull at your lashes.",
  "Avoid waterproof mascara — it's very difficult to remove and damages extensions.",
  "Schedule your fill on time (every 2–3 weeks) to maintain fullness.",
];

export default function LashFaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lash Extensions"
        title="Your Lash Guide."
        subtitle="Everything you need to know before, during, and after your lash appointment."
      />

      <main className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Lash types */}
          <div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-8">Classic vs. Hybrid vs. Volume</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {lashTypes.map((type) => (
                <div key={type.name} className="bg-white rounded-2xl p-6 border border-espresso/8 hover:border-gold/30 transition-colors">
                  <h3 className="font-display font-semibold text-xl text-espresso mb-3">{type.name}</h3>
                  <p className="font-sans text-muted text-sm leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-muted text-sm mt-4 text-center">
              All three are fully customizable. Don&#39;t be afraid to experiment — you can switch between sets!
            </p>
          </div>

          {/* Pricing reminder */}
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-sans font-medium text-espresso">Ready to book your lashes?</p>
              <p className="font-sans text-muted text-sm">View full pricing on our Services page.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/services#lashes" className="font-sans text-sm font-medium border border-espresso/20 text-espresso px-5 py-2.5 rounded-full hover:border-gold hover:text-gold transition-all">
                View Pricing
              </Link>
              <a href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLqgQS0cYJaPL+EJXEsdmhwDbHDrqoEJm0qk3XsE5TT85bPeJ/ymX7NWXPgtuzug11sunBLXOM5hI0aEzf1Lll4TD90a/smNSxnjpcAyTERbEIUBubX7B4HOlIqqOuW+najoaET4Y0PN1TMT0l5ZcNfEhFoBu1BmnAhle4NFoNYypllGn0f7WDppxWH+fNDM3La5Gs21jkrSaSPvYuwjnB8rxNKWkJ3Nkrm5zRIQ8ApfG2XZ6xPrlMwPo0cVcLVgJTDBCcgANmwOw2c5QnwCvJFKdk55RSj6CQlSj8NRiW1+OQ54hvy3gHX6/Ud+YaXhbR7zXe4kKk/9S/pxAw4x9cpA7BXwjobqJ9vAJwQjcrzExCjFiWpKI2n5MCZcGVMsTiFVtn5SQka/fXVGrkq3WQVZ7Ie0uyJ9zhYvuTIEqgrn&c_type=tab" target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-medium bg-gold text-espresso px-5 py-2.5 rounded-full hover:bg-gold/90 transition-colors">
                Book Now
              </a>
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

          {/* Aftercare */}
          <div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-6">Aftercare Instructions</h2>
            <div className="bg-white rounded-2xl p-8 border border-espresso/8 space-y-3">
              {aftercare.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-sans text-gold font-medium text-sm flex-shrink-0">{i + 1}.</span>
                  <p className="font-sans text-muted text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pb-8">
            <a href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLqgQS0cYJaPL+EJXEsdmhwDbHDrqoEJm0qk3XsE5TT85bPeJ/ymX7NWXPgtuzug11sunBLXOM5hI0aEzf1Lll4TD90a/smNSxnjpcAyTERbEIUBubX7B4HOlIqqOuW+najoaET4Y0PN1TMT0l5ZcNfEhFoBu1BmnAhle4NFoNYypllGn0f7WDppxWH+fNDM3La5Gs21jkrSaSPvYuwjnB8rxNKWkJ3Nkrm5zRIQ8ApfG2XZ6xPrlMwPo0cVcLVgJTDBCcgANmwOw2c5QnwCvJFKdk55RSj6CQlSj8NRiW1+OQ54hvy3gHX6/Ud+YaXhbR7zXe4kKk/9S/pxAw4x9cpA7BXwjobqJ9vAJwQjcrzExCjFiWpKI2n5MCZcGVMsTiFVtn5SQka/fXVGrkq3WQVZ7Ie0uyJ9zhYvuTIEqgrn&c_type=tab" target="_blank" rel="noopener noreferrer" className="inline-block font-sans font-medium bg-gold text-espresso px-8 py-4 rounded-full hover:bg-gold/90 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Book Your Lash Appointment
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
