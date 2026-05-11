"use client";

import { useActionState, useEffect, useState } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { sendContactEmail, type ContactFormState } from "@/app/actions";

const hours = [
  { day: "Monday", time: "By Appointment Only" },
  { day: "Tuesday", time: "9:00 am – 7:00 pm" },
  { day: "Wednesday", time: "9:00 am – 6:30 pm" },
  { day: "Thursday", time: "9:00 am – 7:00 pm" },
  { day: "Friday", time: "9:00 am – 6:30 pm" },
  { day: "Saturday", time: "9:00 am – 3:00 pm" },
  { day: "Sunday", time: "Closed" },
];

const initialState: ContactFormState = { status: "idle", message: "" };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState);

  useEffect(() => {
    if (state.status === "success") {
      setForm({ name: "", email: "", message: "" });
    }
  }, [state.status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-champagne-wash py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto">
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
                <p className="font-sans font-medium text-espresso mb-1">Location</p>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  120 Professional Park Dr, Suite 7<br />
                  Blacksburg, VA 24060
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-sans font-medium text-espresso mb-1">Phone</p>
                <a
                  href="tel:5402513350"
                  className="font-sans text-muted text-sm hover:text-gold transition-colors"
                >
                  (540) 251-3350
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-sans font-medium text-espresso mb-1">Email</p>
                <a
                  href="mailto:charmariesalon@gmail.com"
                  className="font-sans text-muted text-sm hover:text-gold transition-colors"
                >
                  charmariesalon@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-sans font-medium text-espresso mb-3">Hours</p>
                <div className="space-y-1.5">
                  {hours.map(({ day, time }) => (
                    <div key={day} className="flex justify-between gap-8">
                      <span className="font-sans text-espresso text-sm">{day}</span>
                      <span className="font-sans text-muted text-sm text-right">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLqgQS0cYJaPL+EJXEsdmhwDbHDrqoEJm0qk3XsE5TT85bPeJ/ymX7NWXPgtuzug11sunBLXOM5hI0aEzf1Lll4TD90a/smNSxnjpcAyTERbEIUBubX7B4HOlIqqOuW+najoaET4Y0PN1TMT0l5ZcNfEhFoBu1BmnAhle4NFoNYypllGn0f7WDppxWH+fNDM3La5Gs21jkrSaSPvYuwjnB8rxNKWkJ3Nkrm5zRIQ8ApfG2XZ6xPrlMwPo0cVcLVgJTDBCcgANmwOw2c5QnwCvJFKdk55RSj6CQlSj8NRiW1+OQ54hvy3gHX6/Ud+YaXhbR7zXe4kKk/9S/pxAw4x9cpA7BXwjobqJ9vAJwQjcrzExCjFiWpKI2n5MCZcGVMsTiFVtn5SQka/fXVGrkq3WQVZ7Ie0uyJ9zhYvuTIEqgrn&c_type=tab"
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
            {state.status === "success" ? (
              <div className="h-full flex items-center justify-center rounded-2xl border border-gold/30 p-12 text-center">
                <div>
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-espresso mb-2">
                    Message Received!
                  </h3>
                  <p className="font-sans text-muted text-sm">
                    We&#39;ll be in touch with you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form action={formAction} className="space-y-5">
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
                {state.status === "error" && (
                  <p className="font-sans text-sm text-red-600">{state.message}</p>
                )}
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full font-sans font-medium bg-espresso text-cream py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
                >
                  {pending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
