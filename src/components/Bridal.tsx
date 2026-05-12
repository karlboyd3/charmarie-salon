"use client";

import { useState, useEffect } from "react";

const photos = [
  "/bridal/wedding-1.avif",
  "/bridal/wedding-2.avif",
  "/bridal/wedding-3.avif",
  "/bridal/wedding-4.avif",
  "/bridal/wedding-5.avif",
  "/bridal/wedding-6.avif",
  "/bridal/wedding-7.avif",
  "/bridal/wedding-8.avif",
  "/bridal/wedding-9.avif",
];

export default function Bridal() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="bridal" className="bg-champagne-wash py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left: rotating photos */}
          <div className="relative min-h-72 lg:min-h-full overflow-hidden">
            {photos.map((photo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={photo}
                src={photo}
                alt="Bridal hair styling at CharMarie Salon"
                className={`absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-1000 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Right: content */}
          <div className="flex items-center px-8 py-16 lg:px-16 lg:py-20 bg-champagne-wash">
            <div className="max-w-lg">
              <p className="font-sans text-muted text-xs tracking-[0.25em] uppercase mb-5">
                Bridal &amp; Wedding
              </p>
              <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso leading-tight mb-6">
                Your Day.
                <br />
                Your Look.
                <br />
                Perfection.
              </h2>
              <p className="font-sans text-muted leading-relaxed mb-8">
                From bridal trials to day-of glam, CharMarie Salon creates
                stunning hair, makeup, and beauty services for brides and their
                entire wedding party. Serving Blacksburg, the New River Valley,
                and beyond.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Bridal Trials", "Day-Of Glam", "Wedding Party", "On-Site Services"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs text-muted border border-muted/30 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <a
                href="#contact"
                className="inline-block font-sans font-medium bg-espresso text-cream px-8 py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Start Your Bridal Inquiry →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
