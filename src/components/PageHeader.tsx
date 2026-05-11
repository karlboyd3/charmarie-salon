import Navbar from "@/components/Navbar";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <>
      <Navbar />
      <div
        className="pt-32 pb-16 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, #2B211D 0%, #1f1915 60%, #150e0b 100%)",
        }}
      >
        {eyebrow && (
          <p className="font-sans text-gold text-xs tracking-[0.25em] uppercase mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display font-semibold text-4xl sm:text-5xl text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-white/60 max-w-xl mx-auto mt-4 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </>
  );
}
