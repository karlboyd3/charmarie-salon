function TrophyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12v6a6 6 0 01-12 0V3zM4 3H2v2a4 4 0 004 4M20 3h2v2a4 4 0 01-4 4M9 17v1a3 3 0 006 0v-1M7 21h10" />
    </svg>
  );
}

function GradCapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

const pillars = [
  {
    Icon: TrophyIcon,
    title: "Top-Rated in Blacksburg",
    body: "Recognized by the Collegiate Times as one of the best salons in the New River Valley. Our reputation is built on real results, not just reviews.",
  },
  {
    Icon: GradCapIcon,
    title: "Educated & Innovative",
    body: "Our team stays current with the latest techniques and uses premium products including K18 treatments. Education never stops at CharMarie.",
  },
  {
    Icon: ChatIcon,
    title: "Built on Integrity",
    body: "Honest consultations, realistic timelines, and no surprise charges. Ever. We believe every client deserves to know exactly what to expect.",
  },
  {
    Icon: StarIcon,
    title: "A Team That Cares",
    body: "We're building relationships, not just booking appointments. You're always a guest, never just a ticket — and it shows in every visit.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.2em] uppercase mb-4">
            Why CharMarie
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso">
            More Than a Haircut.
            <br />
            An Experience.
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-5 p-8 rounded-2xl border border-espresso/8 hover:border-gold/30 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-1 text-gold">
                <pillar.Icon />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-espresso mb-2">
                  {pillar.title}
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
