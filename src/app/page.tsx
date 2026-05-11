import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Gallery from "@/components/Gallery";
import Bridal from "@/components/Bridal";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Gallery />
        <Bridal />
        <Team />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
