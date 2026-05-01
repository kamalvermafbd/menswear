import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Collections } from "@/components/Collections";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { InstagramSection } from "@/components/InstagramSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const target = params.get("scroll");

    if (target) {
      const el = document.getElementById(target);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    }
  }, [location.search]);
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Collections />
      <WhyChooseUs />
      <WhatsAppCTA />
      <Testimonials />
      <InstagramSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
