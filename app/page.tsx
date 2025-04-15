import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { PracticeAreasSection } from "@/components/sections/PracticeAreasSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="hero">
      <HeroSection />
      </section>
      
      <section id="areas">
        <PracticeAreasSection />
      </section>
      <section id="problemas">
        <ProblemsSection />
      </section>
      <BenefitsSection />
      <section id="sobre">
        <AboutSection />
        <TeamSection />
      </section>
      <section id="depoimentos">
        <TestimonialsSection />
      </section>
      <section id="localizacao">
        <LocationSection />
      </section>
      <section id="contato">
        <FAQSection />
        <CTASection />
      </section>
      <Footer />
    </main>
  );
}