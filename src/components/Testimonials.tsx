const reviews = [
  {
    quote:
      "Holly transformed my hair completely. I've been going to CharMarie for two years and I'll never go anywhere else.",
    name: "Sarah M.",
    location: "Blacksburg, VA",
  },
  {
    quote:
      "Best salon in the New River Valley — hands down. My color looked exactly like the inspo photo.",
    name: "Jenna K.",
    location: "Christiansburg, VA",
  },
  {
    quote:
      "They did my bridal hair and I cried happy tears. Every bridesmaid looked stunning. Absolutely recommend.",
    name: "Taylor R.",
    location: "Radford, VA",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#E8D8C3"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32 px-4"
      style={{ backgroundColor: "#2B211D" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.2em] uppercase mb-4">
            Client Love
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-cream">
            Don&#39;t Just Take Our Word for It.
          </h2>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#3a2e28" }}
            >
              <StarRating />
              <p className="font-sans text-cream/80 italic leading-relaxed mb-6 text-sm">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div>
                <p className="font-sans font-medium text-cream text-sm">
                  {review.name}
                </p>
                <p className="font-sans text-muted text-xs mt-0.5">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLqgQS0cYJaPL+EJXEsdmhwDbHDrqoEJm0qk3XsE5TT85bPeJ/ymX7NWXPgtuzug11sunBLXOM5hI0aEzf1Lll4TD90a/smNSxnjpcAyTERbEIUBubX7B4HOlIqqOuW+najoaET4Y0PN1TMT0l5ZcNfEhFoBu1BmnAhle4NFoNYypllGn0f7WDppxWH+fNDM3La5Gs21jkrSaSPvYuwjnB8rxNKWkJ3Nkrm5zRIQ8ApfG2XZ6xPrlMwPo0cVcLVgJTDBCcgANmwOw2c5QnwCvJFKdk55RSj6CQlSj8NRiW1+OQ54hvy3gHX6/Ud+YaXhbR7zXe4kKk/9S/pxAw4x9cpA7BXwjobqJ9vAJwQjcrzExCjFiWpKI2n5MCZcGVMsTiFVtn5SQka/fXVGrkq3WQVZ7Ie0uyJ9zhYvuTIEqgrn&c_type=tab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans font-medium bg-gold text-espresso px-8 py-4 rounded-full hover:bg-gold/90 transition-all hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
