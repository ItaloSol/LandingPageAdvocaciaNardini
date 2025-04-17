"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function CTASection() {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useScrollReveal();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini. Pode me ajudar?"
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 text-center scroll-reveal ${sectionIsVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green animate-fade-in">
          Precisa de Assistência Jurídica?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Entre em contato agora para uma consulta inicial e descubra como podemos ajudar no seu caso
        </p>
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-gold hover:bg-gold/90 text-white font-semibold hover-scale animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <MessageCircle className="mr-2" />
          Fale com um Advogado
        </Button>
      </div>
    </section>
  );
}