"use client";

import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real form handler when ready
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-xs tracking-[0.2em] uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-espresso">
            Come See Us.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-sans font-medium text-espresso mb-1">
                  Location
                </p>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  Blacksburg, Virginia
                  <br />
                  New River Valley
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-sans font-medium text-espresso mb-1">
                  Hours
                </p>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  Monday – Saturday: 9am – 7pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-sans font-medium text-espresso mb-1">
                  Phone
                </p>
                <p className="font-sans text-muted text-sm">
                  (540) 000-0000
                </p>
              </div>
            </div>

            {/* Booking CTA */}
            <div className="pt-4">
              <a
                href="https://app.glossgenius.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-sans font-medium bg-gold text-espresso px-8 py-4 rounded-full hover:bg-gold/90 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                Book Your Appointment Online →
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center rounded-2xl border border-gold/30 p-12 text-center">
                <div>
                  <p className="text-3xl mb-4">✨</p>
                  <h3 className="font-display font-semibold text-2xl text-espresso mb-2">
                    Message Received!
                  </h3>
                  <p className="font-sans text-muted text-sm">
                    We&#39;ll be in touch with you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-sans text-xs text-espresso/60 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full font-sans text-sm text-espresso bg-cream border border-espresso/15 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs text-espresso/60 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full font-sans text-sm text-espresso bg-cream border border-espresso/15 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                  />
                </div>

                <div>
                  <label className="block font-sans text-xs text-espresso/60 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for, or ask us anything..."
                    className="w-full font-sans text-sm text-espresso bg-cream border border-espresso/15 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-muted/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-sans font-medium bg-espresso text-cream py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
