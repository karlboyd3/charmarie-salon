"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

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

const shadowingBenefits = [
  "See how Charmaine manages her books and stylizes her schedule",
  "Watch color formulation and strategy for haircuts",
  "Ask any business-related questions: clientele building, salon ownership, social media, and more",
  "Watch microblading, brow shaping, and learn about PMU licensing",
  "See extensions, makeup, and blowout techniques up close",
];

const shadowingFor = [
  "Looking to streamline your services",
  "A booth renter who needs help organizing your business",
  "Newer to the industry and looking to grow your clientele",
  "Struggling with proper color formulation",
  "Interested in opening or owning a salon",
  "A seasoned stylist who needs motivation from someone with a proven track record",
  "A salon owner looking for leadership mentorship",
];

export default function CareersPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    startDate: "",
    instagram: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Join Our Team"
        title="Come Grow With Us."
        subtitle="CharMarie Salon is one of the most recognized salons in the New River Valley — and we're always looking for talented, passionate beauty professionals."
      />

      <main className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Positions */}
          <div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-8">Current Opportunities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {[
                {
                  Icon: BriefcaseIcon,
                  title: "Employment",
                  desc: "Join our team as a full-time or part-time stylist. We offer a supportive environment, continuing education, and the opportunity to grow your client base.",
                },
                {
                  Icon: KeyIcon,
                  title: "Booth Rental",
                  desc: "Run your own business within our salon. We have private suites available for booth rental — including a lash/hair suite with high-end equipment.",
                },
                {
                  Icon: BookIcon,
                  title: "Shadowing",
                  desc: "Hands-on learning alongside Charmaine during a full work day behind the chair. Investment of $225. See the program details below.",
                },
              ].map((pos) => (
                <div key={pos.title} className="bg-white rounded-2xl p-7 border border-espresso/8 hover:border-gold/30 hover:shadow-sm transition-all">
                  <div className="text-gold mb-4"><pos.Icon /></div>
                  <h3 className="font-display font-semibold text-xl text-espresso mb-2">{pos.title}</h3>
                  <p className="font-sans text-muted text-sm leading-relaxed">{pos.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-5">
              <p className="font-sans text-espresso text-sm">
                <strong>Note:</strong> We are currently fully staffed, but we maintain applications and resumes in the event of an opening. We encourage you to apply!
              </p>
            </div>
          </div>

          {/* Shadowing Program */}
          <div className="bg-espresso rounded-2xl overflow-hidden">
            <div className="relative h-64 sm:h-80 w-full">
              <Image src="/shadowing.avif" alt="Shadowing with Charmaine" fill className="object-cover object-top opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="font-sans text-gold text-xs tracking-widest uppercase mb-2">Featured Program</p>
                <h2 className="font-display font-semibold text-3xl text-white">Shadowing with Charmaine</h2>
                <p className="font-sans text-white/60 text-sm mt-1">Investment: $225 · Lunch provided · 7-hour block</p>
              </div>
            </div>
            <div className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">What You&#39;ll Experience</p>
                <ul className="space-y-2">
                  {shadowingBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-sans text-white/70 text-sm">
                      <span className="text-gold mt-0.5">·</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">You&#39;ll Benefit If You&#39;re...</p>
                <ul className="space-y-2">
                  {shadowingFor.map((b) => (
                    <li key={b} className="flex items-start gap-2 font-sans text-white/70 text-sm">
                      <span className="text-gold mt-0.5">·</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="font-sans text-white/60 text-sm">
                To apply for shadowing, email{" "}
                <a href="mailto:charmariesalon@gmail.com?subject=Shadowing" className="text-gold hover:underline">charmariesalon@gmail.com</a>
                {" "}with <strong className="text-white">Shadowing</strong>{" "}in the subject line. Introduce yourself and include the specialties you&#39;re most interested in learning.
              </p>
            </div>
            </div>
          </div>

          {/* About Charmaine */}
          <div className="bg-white rounded-2xl p-10 border border-espresso/8">
            <p className="font-sans text-gold text-xs tracking-widest uppercase mb-3">About Your Mentor</p>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-4">About Charmaine</h2>
            <p className="font-sans text-muted leading-relaxed">
              Charmaine worked in salons for over 8 years as a stylist and has owned an employee-based salon since 2014. This gives her a unique perspective on ownership, being both employee and client focused. With advanced education in color, cutting, leadership, permanent makeup, and a Bachelor&#39;s degree from Radford University in Accounting, she offers a wide range of skills to coach both service providers and salon owners.
            </p>
          </div>

          {/* Application Form */}
          <div>
            <h2 className="font-display font-semibold text-3xl text-espresso mb-8">Submit Your Application</h2>
            {submitted ? (
              <div className="bg-white rounded-2xl border border-gold/30 p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-2xl text-espresso mb-2">Application Received!</h3>
                <p className="font-sans text-muted text-sm">We&#39;ll be in touch when an opening arises. Thank you for your interest in CharMarie Salon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-espresso/8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: "First Name", name: "firstName", type: "text", placeholder: "Jane" },
                    { label: "Last Name", name: "lastName", type: "text", placeholder: "Smith" },
                    { label: "Email", name: "email", type: "email", placeholder: "jane@email.com" },
                    { label: "Phone", name: "phone", type: "tel", placeholder: "(540) 000-0000" },
                    { label: "Start Date", name: "startDate", type: "date", placeholder: "" },
                    { label: "Professional Instagram", name: "instagram", type: "text", placeholder: "@yourinsta" },
                  ].map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                      <label className="block font-sans text-xs text-espresso/60 uppercase tracking-wider mb-2">{label}</label>
                      <input
                        type={type}
                        name={name}
                        required
                        value={form[name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full font-sans text-sm text-espresso bg-cream border border-espresso/15 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block font-sans text-xs text-espresso/60 uppercase tracking-wider mb-2">Position</label>
                  <select
                    name="position"
                    required
                    value={form.position}
                    onChange={handleChange}
                    className="w-full font-sans text-sm text-espresso bg-cream border border-espresso/15 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select a position...</option>
                    <option value="Employment">Employment (Full-Time / Part-Time)</option>
                    <option value="Booth Rental">Booth Rental</option>
                    <option value="Shadowing">Shadowing Program</option>
                    <option value="Lash Artist">Lash Artist (Private Suite Available)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full font-sans font-medium bg-espresso text-cream py-4 rounded-full hover:bg-espresso/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
