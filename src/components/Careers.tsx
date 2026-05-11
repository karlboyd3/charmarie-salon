function BriefcaseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

const positions = [
  {
    Icon: BriefcaseIcon,
    title: "Employment",
    description:
      "Join our team as a full-time or part-time stylist. We offer competitive compensation, continuing education, and a supportive environment where you can grow your client base.",
  },
  {
    Icon: KeyIcon,
    title: "Booth Rental",
    description:
      "Run your own business under the CharMarie brand. Enjoy the freedom of booth rental in one of the most recognized salons in the New River Valley.",
  },
  {
    Icon: BookIcon,
    title: "Shadowing Program",
    description:
      "New to the industry? Our structured shadowing program gives aspiring beauty professionals hands-on experience alongside our experienced team.",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="bg-blush-wash py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 max-w-2xl mx-auto">
          <p className="font-sans text-muted text-xs tracking-[0.2em] uppercase mb-4">
            Join the Team
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso mb-6">
            Come Grow With Us.
          </h2>
          <p className="font-sans text-muted leading-relaxed">
            CharMarie Salon is one of the most recognized salons in the New
            River Valley — and we&#39;re always looking for talented, passionate
            beauty professionals. We offer employment positions, booth rental,
            and a structured shadowing program.
          </p>
        </div>

        {/* Option Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {positions.map((pos) => (
            <div
              key={pos.title}
              className="bg-white rounded-2xl p-8 border border-espresso/8 hover:border-muted/30 hover:shadow-md transition-all duration-300"
            >
              <div className="text-muted mb-5">
                <pos.Icon />
              </div>
              <h3 className="font-display font-semibold text-xl text-espresso mb-3">
                {pos.title}
              </h3>
              <p className="font-sans text-muted text-sm leading-relaxed">
                {pos.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block font-sans font-medium bg-espresso text-cream px-8 py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Submit an Inquiry →
          </a>
        </div>
      </div>
    </section>
  );
}
