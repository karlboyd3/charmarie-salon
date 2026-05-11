import Link from "next/link";

function ScissorsIcon() {
  return (
    <svg className="w-7 h-7 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <path strokeLinecap="round" d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    </svg>
  );
}
function ColorIcon() {
  return (
    <svg className="w-7 h-7 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88" />
    </svg>
  );
}
function ExtensionsIcon() {
  return (
    <svg className="w-7 h-7 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg className="w-7 h-7 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function FacialIcon() {
  return (
    <svg className="w-7 h-7 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}
function BridalIcon() {
  return (
    <svg className="w-7 h-7 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

const services = [
  {
    Icon: ScissorsIcon,
    name: "Haircuts & Styling",
    description: "Cuts, blowouts, special occasion up-dos, and conditioning treatments for every hair type.",
    href: "/services#cuts",
    gold: false,
  },
  {
    Icon: ColorIcon,
    name: "Color & Texture",
    description: "Balayage, highlights, foiliyage, color corrections, perms, and keratin treatments.",
    href: "/services#color",
    gold: false,
  },
  {
    Icon: ExtensionsIcon,
    name: "Extensions",
    description: "Hand-tied weft and invisible bead extensions for length, volume, and dimension.",
    href: "/services#extensions",
    gold: false,
  },
  {
    Icon: EyeIcon,
    name: "Lashes & Brows",
    description: "Classic, hybrid, and volume lash extensions, lifts, tints, lamination, and microblading.",
    href: "/services#lashes",
    gold: false,
  },
  {
    Icon: FacialIcon,
    name: "Facials & Skincare",
    description: "Basic, standard, premium, and OxyGeneO facials plus full body waxing services.",
    href: "/services#facials",
    gold: false,
  },
  {
    Icon: BridalIcon,
    name: "Bridal & Special Events",
    description: "Complete hair and makeup packages for brides and their entire wedding party.",
    href: "/bridal",
    gold: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-muted text-xs tracking-[0.2em] uppercase mb-4">Our Services</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso">
            Everything You Need.<br />All Under One Roof.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className={`bg-white rounded-xl p-8 shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group ${
                service.gold ? "border-gold/50" : "border-espresso/8 hover:border-gold/40"
              }`}
            >
              {service.gold && (
                <span className="inline-block font-sans text-xs text-muted tracking-widest uppercase mb-4">Featured</span>
              )}
              <div className="mb-5"><service.Icon /></div>
              <h3 className="font-display font-semibold text-xl text-espresso mb-2">{service.name}</h3>
              <p className="font-sans text-muted text-sm leading-relaxed mb-6">{service.description}</p>
              <Link
                href={service.href}
                className={`font-sans text-sm font-medium transition-colors ${
                  service.gold ? "text-muted hover:text-espresso" : "text-espresso/40 group-hover:text-gold"
                }`}
              >
                View Pricing →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-block font-sans font-medium bg-espresso text-cream px-8 py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Services & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
